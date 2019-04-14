---
title: "BuildBot for XMMS2"
date: "2007-10-30"
---

After having talked about setting up a BuildBot service for XMMS2 for 6-7 months I finally got my shit together a couple a days ago and did it.

For now we have three slaves running, Debian Etch, mingw32 and Freebsd 7. The latter two have already helped us locate one bug each and a fix for one of them has been merged. In the near future a Mac OS X slave will be added, and Anders has mentioned that an ARM Scratchbox slave might happen.

The BuildBot setup currently online is just the first step in improving the quality of the XMMS2 project. When DrK is out and the Google Summer of Code testing framework project has been merged, tests will automatically be run on all builds, and hopefully catch even more bugs thus save a tear or two from our users.

Also, when I get the time I will make the mingw32 slave produce snapshots for download to make it easier to run XMMS2 on that strange OS we are forced to use in unfortunate times.

Click [here][1] to get the latest build status.

**Update**:
The ARM slave is now up and running.

**Update:**
The Darwin slave is also up, and yet another bug found.

**Update:**
Separate steps per part of the build, see [here][2].

[1]: https://web.archive.org/web/20071214010820/http://buildbot.xmms2.xmms.se:80/
[2]: https://web.archive.org/web/20080316191715/http://buildbot.xmms2.xmms.se:80/