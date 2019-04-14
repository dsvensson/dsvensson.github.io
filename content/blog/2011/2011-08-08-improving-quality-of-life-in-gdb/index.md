---
title: "Improving quality of life in GDB"
date: "2011-08-08"
---

Having spent quite a few total hours in GDB over the past weeks it started to get boring to print `*res->value.list->...` etc over and over to see what weird value was harassing my tests. I had heard that GDB had gained [Python support][2] some time ago and decided to write some useful tools for debugging XMMS2 related code.

This is now what it looks like when you print a `xmmsv_coll_t`:

```none
(gdb) print *coll
$11 = {
  "attributes": {
    "type": "id"
  }, 
  "type": "XMMS_COLLECTION_TYPE_ORDER", 
  "idlist": [], 
  "operands": [
    {
      "attributes": {}, 
      "type": "XMMS_COLLECTION_TYPE_UNIVERSE", 
      "idlist": [], 
      "operands": []
    }
  ]
}
```

...and a regular `xmmsv_t`:

```none
(gdb) print *fetch
$15 = {
  "type": "cluster-list", 
  "data": {
    "type": "organize", 
    "data": {
      "id": {
        "aggregate": "first", 
        "type": "metadata", 
        "get": [
          "id"
        ]
      }
    }
  }, 
  "cluster-by": "id"
}
```

The code is a bit under 100 lines of Python and should be a nice inspiration for people who still haven't added this huge help to their projects. The code can be found [here][1], and checked out via:

```none
git clone git://git.xmms.se/xmms2/xmmsgdb.git
```

[1]: http://git.xmms.se/xmms2/xmmsgdb/
[2]: https://web.archive.org/web/20190115182810/https://sourceware.org/gdb/onlinedocs/gdb/Writing-a-Pretty_002dPrinter.html