---
title: "The Garbage Garbage Collector of Python"
date: "2010-07-22"
---

Two years ago we started our journey to write what would become an enterprise server software in the Python language. Over time we've done some pretty nutty things that wouldn't have been made if the Python VM wasn't crap. The reason we started with Python was due to a constraint on how to communicate with a core component in the environment. In hindsight we probably should have written our own library from start (we have done so today), but it was also an interesting ride.

Like everyone else we noticed that Python becomes slower and slower for each thread you add, specially on SMP systems, thanks to the glorious Global Interpreter Lock. With the help of python-multiprocessing we later were able to take advantage of the 8 cores available to us, at the cost of copying a lot of data between processes (5-60 processes depending on configuration), and consuming a heap of RAM (16-24GB were not uncommon). To reduce the work of using multiprocessing, [python-orb][1] was created (which could do with a bit more polish, but it suits our needs).

Later on we noticed that our software pretty much crawled to a halt at a regular interval. At last we started to realize that this might be caused by the Python garbage collector. After some investigation this turned out to be the case, and we decided to just skip the garbage collector altogether as it only helps when you have circular references in your application (Python is otherwise reference counted), and those can be fairly easily circumvented.

Python being a dynamic language means that you pretty much have to make up for the rapid development and compact syntax with twice as many test cases (yes, your application will start with completely broken syntax, and typos until it's time to execute that particular line of code). This is not really that bad as the tests too are rapidly developed, and you need to have tests to prove that your software does what you want even after a major refactoring.

At the time we found the problem we simply disabled the garbage collector in our test-framework and started logging `gc.collect()`'s after each test method had run. In addition to this, we added support for running the garbage collector on demand in our software so that we could run it for some hours with tons of data and then see if a `gc.collect()` returned something. Some days later we had nailed the last of the few cyclic references and were ready to run the whole application with the garbage collector disabled. Result was a lot better performance, and the end of stop-the-world garbage collections. Win!

The new version of our product relies on a much better virtual machine, namely the JVM, we do however still use Python a lot for non performance critical scripting, and for analyzing data and so on. During last week I analyzed a lot of data to locate a bug, this involved loading up a blob of JSON data and juggle it around until something interesting popped up (and it did!). This is a prime example of what disabling the garbage collector can do for you on a daily basis, so here it comes:

```python
>>> import cjson, time, gc

>>> def read_json_blob():
...    t0 = time.time()
...    fd = file("mytestfile")
...    data = fd.read()
...    fd.close()
...    t1 = time.time()
...    parsed = cjson.decode(data)
...    t2 = time.time()
...    print "read file in %.2fs, parsed json in %.2fs, total of %.2fs" % \\
                                                   (t1-t0, t2-t1, t2-t0)

>>> read_json_blob()
# read file in 10.57s, parsed json in 531.10s, total of 541.67s

>>> gc.disable()
>>> read_json_blob()
# read file in 0.59s, parsed json in 15.13s, total of 15.72s

>>> gc.collect()
# 0
```

Ok, so that's 15 seconds instead of about 9 minutes until I'm able to to start to analyze the data, and of course there was nothing for the garbage collector to collect afterwards. The file in question is a 1.2GB JSON text file, the disks perform at about 110MB/s sequential reads, and we have 8 cores of Intel Xeon E5520 2.27GHz to use (only one core used in this example).

I hope this saves someone elses time as it has saved mine.

[1]: https://web.archive.org/web/20130427010602/http://opensource.purplescout.se/wiki/orb