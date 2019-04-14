---
title: "Sveriges Television"
date: "2007-12-11"
---

In January this year I rearranged my living room. After the furniture were in position and cables were starting to find their new routes, I realized that my TV-antenna cable was too short.

At the time it wasn't unusual for me to get caught in front of the TV, zapping channels, watching random crap, and by doing so I also polluted my brain with those evil commercials that NOBODY wants to watch, but most of us watch anyway.

Instead of going out to buy a new one (so that I could continue to destroy my brain, bit by bit) I decided to simply ditch oldschool TV, and consume all content on demand.

Most series I follow were already available for download from great websites that really understands how to treat a consumer. The missing piece was my absolute favorite TV-station, Swedish Television, that has given me hours of interesting content since I was a kid.

At the time Swedish Television was accessible only through the webbrowser, by Real Media, or Microsoft Media Player, but after browsing some HTML source I managed to grab the URL to the Windows Media stream, and was able to play it successfully with [Xbox Media Center][1]. By using the python scripting interface to XBMC I could replicate the web interface as a browsable directory tree with all content Swedish Television decided to put online (which is quite a lot of material). I eventually released the script on the [XBMC scripts portal][2] for others to download and it seemed like others liked the idea too. To this day I've had 16804 downloads, and lots of positive emails that made it all even more worthwhile.

I've been free from commercials for almost a year now, and I must say it feels great. Visiting friends who still watch oldschool TV feels like walking through a time portal, and it's kind of scary to watch commercials when you're not used to them, they feel pretty offensive (which of course is the purpose).

Ok, so the year of 2007 has been a great year, but what about 2008? The future of Swedish Television on the web is uncertain. This weekend I had to update the script because the short news clips are now distributed using Macromedia Flash. Luckily the url to the .flv-files could be found in the HTML-source, and XBMC can play all formats known to man, so I still have access to all content I'm interested in. But using Macromedia Flash isn't the only new addition to the webportal. A couple of months ago Swedish Television started to distribute some content with [Move Media Player][3] that would allow for higher quality streams, but required the consumer to [install additional software][4] on their computers. When I saw the news I did a little digging to see if I could access the stream, unfortunately without much luck (may still be possible to find out where to reach them). During the digging I found out a bit more about Move Media Player and it seems to be using the [VP7][5] codec which FFMPEG currently doesn't suppor (but hopefully will soon). So using VP7 on the Xbox is a no go, for now at least.

FFMPEG not supporting VP7 isn't that big of a deal. The frustration lies in that Swedish Television is produced by tax-money, and obligatory TV-licence that you must pay if you have a TV or a computer with a TV-card and you live in Sweden. We fund the production of their content, and they repay us with restrictions on the content by using proprietary and patent damaged solutions.

<h2><p style="text-align: center;">This is NOT ok!</p></h2>

Swedish Television put pride in their claim to be [Free as in Freedom][6]. I fully agree to this when applied to their content, but by locking that Free as in Freedom content into proprietary and patent damaged distribution forms they completely invalidate their claim.

Their locked down agenda also stretches outside their own web portal. In an attempt to gain more publicity in the younger crowd of Internet-addicted kids they started to publish some of their content on YouTube which offers really crappy video quality, and uses the non-Free Macromedia Flash format for distributing its content. I can see why they do this as a LOT of people use YouTube, by creating a link between YouTube and their own web portal they are likely to get more publicity, at least to some degree.

However, YouTube isn't the only external site with damaged distribution forms they've looked at. The latest way to gain more viewers has been to establish a relationship with a new site called [Joost][7]. This site is run by the founder of Skype, and is even more closed down by requiring you to create an account to watch the TV programs that the population of Sweden has collectively funded. Sorry, I don't see the public interest in associating a person with a tv program, maybe someone can enlighten me? I haven't verified what codec Joost uses, but as Skype uses VP7, that is probably a good bet. But to play content from Joost, you have to blindly implement their P2P technology too which most likely will never happen.

I wonder how much money has poured into the pockets of Microsoft, Real Media and Move Media for providing the current solutions, and Joost for the new sidetrack, and the project of uploading their content to YouTube. I wonder how many hours of developer time those price tags could have translated to if Swedish Television had hired a group of good programmers to write the necessary tools and modifications to get a Free solution using [Theora][8] or [Dirac][9] up and running.

So, in my eyes the future of video on demand from Swedish Television using Free software without steping on patents is in grave danger, specially when (and it's probably just a question of when) EU opens its arms for US patents. For those who agree with me I strongly suggest you sign this petition in hope of seeing the Free as in Freedom content using Free as in Freedom distribution forms:

[http://www.namninsamling.se/index.php?sida=2&nid=1120][10]

**Update**: The Xbox Media Center script, Sveriges Television 0.94, can be found [here][11].

[](http://www.namninsamling.se/index.php?sida=2&nid=1120)

[1]: https://web.archive.org/web/20070927124345/http://www.xboxmediacenter.com/
[2]: https://web.archive.org/web/20071210032749/http://www.xbmcscripts.com/
[3]: https://web.archive.org/web/20071205024741/http://www.movenetworks.com/
[4]: https://web.archive.org/web/20071123065345/http://svt.se/content/1/c6/91/20/20/support/faq.html
[5]: http://en.wikipedia.org/wiki/VP7
[6]: https://web.archive.org/web/20071128094816/http://svt.se/svt/jsp/Crosslink.jsp?d=3784&a=971658 "Only available in Swedish"
[7]: http://en.wikipedia.org/wiki/Joost
[8]: http://en.wikipedia.org/wiki/Theora
[9]: https://en.wikipedia.org/wiki/Dirac_(video_compression_format)
[10]: https://web.archive.org/web/20180902084126/https://namninsamling.se/index.php?sida=2&nid=1120
[11]: https://web.archive.org/web/20080211214254/http://www.xbmcscripts.com/index.php?option=com_docman&task=search_result&Itemid=Array&search_mode=phrase&search_phrase=Sveriges%20Television%20v0.94