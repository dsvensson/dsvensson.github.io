---
title: "Software Quality in an Open Source World"
date: "2011-02-14"
---

As it's always been a bit too far behind the scenes I wanted to take some time to describe what measurements has been taken to increase the quality of XMMS2, and what the future has in stock.

Today we have a basic unit test framework built on top of [libcunit][8]. To reduce boiler plate code in the actual test suites a number of macros have been defined. Here is an example of the basic structure of a simple test suite:

```c
SETUP (mytestsuite) {
  /* setup what ever is needed
   * for each test case to run
   */
}

CLEANUP () {
  /* clean up such that the state
   * is restored to the state before
   * SETUP (mytestsuite) was run.
   */
}

CASE (mytestcase1) {
  /* the actual test */
}

CASE (mytestcase2) {
  ...
}
```

To guarantee correctness `SETUP` will be executed before each `CASE` is run, and `CLEANUP` will be executed after each `CASE` has finished. Additionally the whole `SETUP`, `CASE`, `CLEANUP` is wrapped by the following checks both before and after:

```none
VALGRIND_DO_LEAK_CHECK;
VALGRIND_COUNT_LEAKS(leak, d, r, s);
```

This imposes no runtime dependency but injects markers such that if the test is executed under [_Valgrind_][1], each test case will be inspected for memory leaks independently, which causes that test case to fail if a leak is found.

That covers writing test cases and validating their resource management, next up is getting a clear view of what has been tested and this is where coverage reports come into play. To get coverage reporting, via [_gcov_][2], the `--coverage` flag is appended to both `CFLAGS` and `LINKFLAGS` in the build system. When running the tests a heap of `.gcda` and `.gcno` files will be emited which among other things contains the metadata about what lines were executed. To produce something that's easy to inspect [_lcov_][3] processes these files into a heap of HTML files using the following command line:

```none
$ lcov -c -b "$(base-directory)" -d "$(metadata-directory)" -o coverage.info
$ genhtml -o cov coverage.info
```

The _$base-directory_ in this case is used to resolve relative paths as our build system outputs its artifacts in a sibling directory of the source directory. So for example the source files will be called `../src/xmms/medialib.c`, where `..` is relative to `_build_`. The `$metadata-directory` is the directory to recursively scan for `.gcda` files. See the [_man page_][4] for further details.

So we now know that our tests produce the correct result, they don't leak, and we've verified via coverage that our tests cover the complex code paths we want them to. Already this gives us a lot of comfort that what we're doing is correct, but there's one more tool we can use to increase that comfort and that is the beautiful free [_static analysis tool from the clang project_][5]. To perform a static analysis of the XMMS2 source code simply issue the following commands:

```none
scan-build ./waf configure
scan-build ./waf build
```

After a while the analysis is done and you will be presented with a command to run which opens your browser with the static analysis report. This is the latest addition to our tool chain which will help us to increase our code quality even further, so there are still some warnings of different severities left which should be fixed.

Now on to the future. While working on getting [_Collections 2.0_][6] into shape I started working on a comfortable way of validating the correctness while getting to know the whole concept and the code behind it so that I could easily modify its structure without breaking things.

First step was to build the data structures via the C-API like clients would, and some basic validation of the result. This turned out to be pretty verbose as the whole data structures would be written out in code instead of generated from some kind of user interface. The first step was to write a small JSON parser that constructed a `xmmsv_t` which could be used to build the [_fetch specification_][7], so that by looking at a test for a second you'd know exactly what the result would be. After this the next obvious step was to construct a `xmmsv_t` from JSON with the expected result. Here a vision of an entirely code-free test suite started to grow, and some lines of code later a `xmmsv_coll_t` could also be constructed from JSON.

The envisioned test-runner is not committed yet, but what it does is to scan a directory structure like this:

```none
testcases/test_query_infos_order_by_tracknr/medialib.json
testcases/test_query_infos_order_by_tracknr/collection.json
testcases/test_query_infos_order_by_tracknr/query.json
testcases/test_query_infos_order_by_tracknr/expected.json
testcases/test_something_complex/medialib.json
testcases/test_something_complex/collection.json
testcases/test_something_complex/query.json
testcases/test_something_complex/expected.json
```

And for each directory under `testcases` it performs the same task as the current test framework does, but now in a way that makes it easy for non C-coders to contribute new test cases.

A bonus here is that it's easy to re-use this collection of test cases for other types of tests, such as performance tests, which actually already works. When running the suite in performance mode another directory is scanned for media libraries of different sizes (500, 1000, 2000, 4000, 8000, 16000 songs) on which each of the tests are executed, and performance metrics per test is dumped on `stdout`.

The idea is that these performance tests will emit data in a format that can be used for producing nice graphs based on different metrics. The script that produces the graphs would take as input a number of test-runs, so that you could easily compare multiple versions of the code to check for performance improvements and regressions.

So that's it folks, if you have recommendations on further improvements, don't hesitate to join the IRC channel for a chat, or perhaps drop me a mail.

[1]: https://web.archive.org/web/20110622085844/http://valgrind.org:80/docs/manual/mc-manual.html#mc-manual.clientreqs "Valgrind, the instrumentation framework for building dynamic analysis tools."
[2]: https://web.archive.org/web/20100128043657/http://gcc.gnu.org:80/onlinedocs/gcc/Gcov.html "gcov - coverage testing tool"
[3]: https://web.archive.org/web/20110318154531/http://ltp.sourceforge.net:80/coverage/lcov.php "LCOV - the LTP GCOV extension"
[4]: https://web.archive.org/web/20110312104907/http://ltp.sourceforge.net/coverage/lcov/lcov.1.php "man page of lcov"
[5]: https://web.archive.org/web/20110613100820/http://clang-analyzer.llvm.org:80/ "Clang Static Analyzer"
[6]: http://xmms2.org/wiki/Collections_2.0 "Collections 2.0"
[7]: http://xmms2.org/wiki/Collections_2.0#fetch-specification "Collections 2.0 Fetch Specification"
[8]: https://web.archive.org/web/20110228135855/http://cunit.sourceforge.net/ "libcunit, unit testing library"