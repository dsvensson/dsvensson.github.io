---
title: "Phase Vocoder! Hooray!"
date: "2006-05-31"
---

Some hour and a half ago I got this message on irc.

```none
[23:06:03][juhovh] nano: fixed it
[23:06:08][juhovh] nano: it works
```

Yey! Finally the last piece of the puzzle has landed, well, the code must be converted to an XForm plugin first, but very soon. Currently the phase vocoder uses a 45ms buffer, which is only noticeable when you change the speed of the song, and for that it's an ok latency. After the effect chain the output plugin feeds its data to the jack audio server which with the proper realtime patches has a latency of 2.9ms (according to `qjackctl`) on at least this computer. Pause and play happens in the output layer so the real latency is low enough for any DJ.

I'm so happy! Using XMMS2 as a DJ backend is now just a matter of writing the GUI.
