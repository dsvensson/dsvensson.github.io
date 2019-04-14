---
title: "Skidbladnir, a product of GSoC Mentors Summit"
date: "2008-10-30"
---

GSoC Mentors Summit in all glory, but all sessions and no hack made DraX and me dull boys... enter Skíðblaðnir to bring joy to life!

After a day of slow sessions, me hacking on Abraca, while DraX hacking on a new web 2.0 client we decided that enough was enough, time to get some collaboration going.

I actually came up with the idea a really long time ago, while Service Clients was just an vague idea in the minds of DraX, theefer, and the wanderers.

As I live in Sweden, [home of the fast Internets][1], I know that a whole lot of people would be very happy if their favorite music player had easy access to, everyones favorite, The Pirate Bay for getting more content.

A typical scenario would be that I was playing some song by Timbuktu, and my music player would automagically notice that I'm missing [that new single that Timbuktu, one of Swedens most popular artists, officially released first to the world on The Pirate Bay][2] \*hint hint hint all other artists\* and then present a link to that torrent for me to click on, and download using my favorite torrent client.

This feature is so hot that **ALL** XMMS2 clients should have it, thus we wanted to do this as a Service Client.

So late saturday afternoon just before we left [Googleplex][6] I started to update the xmmsclient python bindings to match the Service Client branch my student had written during GSoC. Meanwhile DraX was working on getting his webclient ready and some helpers to count string distance between [Freebase][3] data and some mock Pirate Bay torrent names. Due to jetlag my evening ended early for me, but when waking up somewhere around 3AM I had a great message from The Pirate Bay waiting for me about getting early access to their upcoming webservice API. The rest of the sunday was spent frantically hacking the python bindings so that we could have a running demo before I had to leave for the airport and it worked! Around 2.45PM we made the first working request from the service client and I ran to the bus.

So to summarize what this client does:

1. Register as a service client that accepts an artist (string) as argument.
2. Accept request.
3. Find albums by artist in medialibrary.
4. Find albums by artist in Freebase.
5. Find albums by artist in The Pirate Bay.
6. Subtracts the albums in medialibrary from the albums returned by Freebase.
7. Calculates string distance from what's left of Freebase result with The Pirate Bay result to get good names pointing to correct but crappy torrent names.
8. Return a list of albums missing in the medialibrary by some artist, with links to download.

Right.. and the name [Skíðblaðnir][4] refers to the ship of [Freyr][5] that sails the Scandinavian intern^W waters with fair wind, and folds easily into ones pocket.

[1]: http://en.wikipedia.org/wiki/Internet_in_Sweden
[2]: https://web.archive.org/web/20080923060712/https://thepiratebay.org/special/timtack.php  "Timbuktu Tack för Kaffet"
[3]: http://www.freebase.com/
[4]: http://en.wikipedia.org/wiki/Skiðblaðnir
[5]: http://en.wikipedia.org/wiki/Freyr
[6]: https://en.wikipedia.org/wiki/Googleplex