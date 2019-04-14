---
title: "Custom Tree Model, or shortcut to hell"
date: "2006-05-29"
---

Over the last couple of months I've been reading [pvanhoof][1]'s blog about his email reader called tinymail. I think he did the first posts about 3 million row treeview before christmas last year, and ever since I've been determined to get my hands dirty with the feared `GtkTreeView` widget.

Earlier this week, ehm last week (past midnight it seems), I started writing on what has now become a custom tree model specialized for XMMS2 metadata.

`GtkTreeView` is a jungle. I almost gave up because of the dangerously high risk of brain-damage when working with `GtkTreeView`, but the people at `#gtk+` were helpful and about half an hour ago I finally managed to get it right.

There are still some bugs I have to take care of before letting it loose for client writers to use and abuse, but all the basics are there. It takes about 2 seconds to populate about 7500 rows of medialib IDs and I think I know of a couple of places where speed could be noticeably improved. Another issue is the speed of resolving. When scrolling the list you see the entries resolve. It would be nice if the model could keep the 10 entries above and below the visible entries in memory. Have to look into that later.

This is also the first project I've written using Gob2, _The GObject Builder_, which is an object oriented language around `C` which you compile to regular `C`-sources later. It has been such a delight to use Gob2. You don't have to edit header files as you change your API, all the boilerplate code gets generated and you have nice macros for dealing with the common stuff. It also gives a much clearer view of the code. Another plus is that it's possible to generate `C++` code too. Gob2 is definitely the tool to use when writing GObjects.

The dynamic loading tree view model is also a part of my grand plans for a DJ application which I'm now thinking about writing in `C++` using [gtkmm][2] as GUI toolkit. Andreas emailed me his phase vocoder some days ago and [juhovh][3] has been working on integrating it into XMMS2, and nailing the last bugs. With the phase vocoder in XMMS2, the last piece is in place and using XMMS2 as a DJ backend is suddenly not so far away.

The Hercules DJ Console works like a charm these days and I've been hacking on some ALSA sequencer GLib `GMainLoop` integration lately. When that has been accomplished it's just loads and loads of gui code to write, but with just one week left of school and 3 months of nothingness ahead of me, it might just happen.

[1]: https://github.com/pvanhoof
[2]: https://www.gtkmm.org/en/
[3]: https://github.com/juhovh