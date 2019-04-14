---
title: "Preverify with Ant"
date: "2006-07-06"
---

When I originally wrote the `build.xml` for this project my main goal was just to get it to work. This lead to a really crappy handling of `preverify` where you had to add the class files manually as `preverify` doesn't search subdirectories for class files. So today I finally got tired of having to edit `build.xml` every time I added a new class, or renamed an old one. Unfortunately Google let me down except for some outdated J2ME `ant` extensions, but after deciphering the Ant manual I came up with this vanilla Ant code:

```xml
<!-- Find class files. -->
<fileset dir="${build}" id="tmp">
  <patternset>
      <include name="**/*.class">
  </patternset>
</fileset>

<!-- Convert filenames to valid preverify input. -->
<!-- From: /absolute/path/to/package/SomeFile.class -->
<!-- To: package.SomeFile -->
<pathconvert pathsep=" " property="unverified" refid="tmp">
  <packagemapper from="${build}/*.class" to="*">
</pathconvert>

<!-- Execute preverify on classes. -->
<exec dir="${build}" executable="${j2me.bin}/preverify">
  <arg line="-classpath ${classpath.j2me}">
  <arg line="-d ${preverify}">
  <arg line="${unverified}">
</exec>
```

Maybe this will save someone elses time.