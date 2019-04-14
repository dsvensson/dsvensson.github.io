---
title: "Unfinished GUI crap take 2"
date: "2007-12-24"
---

I'm not a GUI designer, but (...) I still get ideas every once in a while. My [last post][1] on the subject turned into an [OpenMoko client][2] based on the sliding GUI idea thanks to Anders. This time I present to you three more ideas.

### MTV-isch OSD.

The idea behind this is obviously MTV. Over the years they've outdone themselves in the design of new fresh OSD's to present their artists. The OSD's are often animated, and always very pleasant to the eye. When looking at the OSD's available for different music players, none of them comes near. Som just print text on the screen, that disappears after a couple of seconds, some add fading to make it a bit prettier, some use the notification area of GNOME to present the current artist, and some use Growl on OS X, and none of these look very pretty, they just look like half-assed attempts at presenting the current song.

A year or two ago I was into writing C# bindings for XMMS2, and I whipped up this example that made an attempt at creating an animated OSD.

Here is the screencast:

`video: https://youtu.be/kzsD5EO_Tx4`

This is obviously butt ugly as IANAGD, but it shows a glimpse of what may be the future of OSD's. Perhaps using [EFL][3] might be the way to go to get thos animations blinging. Anyway the code and the tools are of no importance without a good design, so copying designs from MTV to start with, and then evolve those to something new, fresh and free could probably lead to something interesting.

Another interesting design is the flowers from the [Moppi Productions][4] Assembly 2004 [invitation demo][5], linked to the music. This could definitely be written as an OSD to XMMS2, as we now have a great visualization API thanks to the Google Summer of Code. The demo is for Windows, but works great in [wine][6]. In an OSD these flowers would grow out around the OSD box, and then anti-grow back when the box is to be closed.

### drag-n-drop cover art.

I have no idea why many of my ideas are related to cover art, as I don't really think they are that important, but here is another good thing to have. The ability to drag an image from Firefox, drop it in the cover art area of the client, and the client downloads the image and sets it as the default cover art of the current song (or album). The point here is that it should be as easy as possible to set the cover art. It's a changeable target, and it should be easy to change it. Other than drag-n-drop it should definitely support copy/paste too. Drag/drop, copy/paste should ofc both handle urls, and data pasts/drops.

And here's the obligatory screencast:

`video: https://youtu.be/eiNBE5hb_8k`

### LastFM buttons.

The way LastFM works is a bit disturbing to the music player. When a LastFM stream is activated you either have to change the GUI, or be dysfunctional. The last alternative sucks a bit, as the power of LastFM is only unleashed if you can skip tracks, otherwise you could just as well listen to regular shoutcast. I prefer music players with three buttons for playback control, \[prev, (play|pause), next\], so some days ago I realized that this happens to be the same amount of buttons required to control LastFM, so why not combine them? I still haven't decided in detail how this should work, but I wrote a small demo application that, when a LastFM stream starts, the three playback-buttons become LastFM buttons. You can access the original buttons by holding the mouse over the controls for a few seconds, this could also be handled with holding shift or something.

Anyway, here's the obligatory screencast:

`video: https://youtu.be/qRA369uUzoc`

And this is all for this time, hope some of the ideas are put into use in some clients.

Time to indulge in all the Christmas food. Merry Christmas everyone! \o/

[1]: ../2007-10-22-unfinished-gui-crap "Unfinished GUI crap"
[2]: http://blog.0x63.nu/2007/11/openmoko-xmms2-client.html
[3]: http://enlightenment.org/
[4]: http://en.wikipedia.org/wiki/Moppi_Productions "Moppi Productions"
[5]: http://pouet.net/prod.php?which=12031 "Assembly 2004 invitation demo"
[6]: http://www.winehq.org