---
title: "A first glance at J2ME"
date: "2006-07-02"
---

Convinced by a friend of mine that J2ME hacking could provide hours of fun I was determined to give it a try. My earlier attempts had only been with the basic forms, and I'd found it hard to setup a sane build environment without using Nutbeans or some other IDE.

After reading about MIDP packaging, and finding about about tools like `preverify` and other stuff, I finally had a nice and small development environment (`vim` + `ant` + `j2me`) without wasting 1GB of RAM.

A couple of days earlier I had seen Opera Mini for the first time and I was surprised about its clean and good looking GUI so I planned to do something similar.

Now almost a week has passed and my GUI toolkit is comming along well. It looks just as good as the one Opera Mini uses, with some parts better looking, and other parts not yet implemented.

Next, the bluetooth part. When the project idea came to mind I thought any bluetooth enabled phone would do, I was wrong. Bluetooth phones predates the J2ME support for bluetooth (`JSR-82`). After some googling I found out that my phone lacked `JSR-82`, but the timing was perfect as my 24 month mobile phone contract went out this month. Some clicks later I had ordered a new mobile phone with `JSR-82` (Sony Ericsson K750i). With some luck it arrives by the time the GUI toolkit is mature enough.

There are other projects that does this exact task for other music players. I've been looking at Bemused which has both Winamp and XMMS support. Bemused is mostly for Symbian based phones, but an outdated J2ME implementation exists. My plans are to be compatible with this protocol if it doesn't require too much work. The protocol however lacks support for coverart, medialib browsing, so at least that has to differ. When the time comes I'll try to contact the Bemused people to see if they're interested in updating their protocol.
