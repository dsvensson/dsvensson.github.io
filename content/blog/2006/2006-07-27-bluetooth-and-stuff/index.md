---
title: "Bluetooth and stuff"
date: "2006-07-27"
---

I've started my voyage into bluetooth land now and it has been some confusing days.

I spent about three hours on google just to find out that you couldn't connect to localhost with bluetooth. This means I have to do some of the work correctly the first time instead (or debug the application on the phone, bleh). About 10 minutes later I luckily found out that it was possible to write the Service Discovery part against localhost by using the address `0xFFFFFF000000`. Then I went on to figure out how this [UUID][1]-stuff worked and now I can actually discover my _"XMMS2 Remote Control"_ service from my phone. Yey! I used [AvetanaBT][2] to implement this part. It is a JSR-82 compatible java framework that runs on J2SE.

Today I've been learning about [GIOChannels][3] and refreshing my UNIX socket programming knowledge. I realized that I could write quite a bit locally by writing a J2ME compatible Java Client that connects over TCP to a test server. I've given up on extending [Bemused's protocol][4] as it doesn't fit my needs at all. So this evening/night have also been used to figure out what the protocol should look like, and a some minutes ago I compiled the first working version that communicates integers and strings.

Requesting the playlist for example looks like this:

```none
Client -> Server : CMD_PLAYLIST_LIST, CMD_END

Server -> Client : ANS_PLAYLIST_LIST, size, UINT, 1, UINT, 2, UINT, 3, ANS_END
```

I will probably not document this protocol as I intend to write the server as platform independent as possible. It currently runs on Linux, but with some minor changes it also compiles on FreeBSD. The bluetooth connection will be abstracted so that it can be replaced by TCP if someone cares to write such a module, or perhaps diffrent bluetooth apis (OS X, Wintendo). And maybe the player communication will be abstracted so that any music player with similar features (playback, playlist, medialib) can benefit from this project by adding a corresponding module.

[1]: http://en.wikipedia.org/wiki/UUID
[2]: https://web.archive.org/web/20060720184638/http://sourceforge.net/projects/avetanabt/
[3]: https://web.archive.org/web/20060705075105/http://developer.gnome.org/doc/API/2.0/glib/glib-IO-Channels.html
[4]: https://web.archive.org/web/20060314091451/http://bemused.sourceforge.net/book/view/44