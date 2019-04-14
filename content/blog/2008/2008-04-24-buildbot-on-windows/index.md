---
title: "BuildBot on Windows"
date: "2008-04-24"
---

BuildBot is nice... I use it for the XMMS2 project, and I use it at work. However, the hellspawn OS known as Windows likes to tell the user if some executable crashes. This might be nice and user-friendly as it's a pretty common scenario that applications crash on this OS, but when running unittests in a buildbot slave this causes the slave to hang instead as there's nobody watching the screen and clicking the ok button in the dialog box. Killing the application with the Win32-api doesn't help as the message box is heavily guarded by the OS (...or rather the result of another application intercepting the crash). I bet others have stumbled upon this disturbing issue, and like me don't know that much about the OS in question, so here's one solution that works:

1. Disable problem reporting under _"Properties"_ in _"My Computer"_.
2. Disable JIT debugging in `Tools->Options->Debug` in Visual Studio.
3. Enable Dr Watson by running `drwtsn32.exe -i`.
