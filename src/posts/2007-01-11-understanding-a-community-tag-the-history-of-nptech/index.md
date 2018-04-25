---
kind: article
created_at: 2007-01-11 00:08:06
title: "Understanding a community tag: the history of nptech"
excerpt: "Recently there has been a lot of discussion among the nonprofit technology geeks about the use (and usefulness) of the tag nptech."
tags: [nptech, code, experiment, floksonomy, community, tags ]
modified_on: 2009-01-30 10:46:38
status: publish 
path: /2007/01/11/understanding-a-community-tag-the-history-of-nptech
---

Recently there has been a lot of discussion among the nonprofit technology geeks about the use (and usefulness) of the tag "nptech".

<blockquote class="large"> When the nptech tag started one of the ideas was to gather enough data to look and see what words people were using to describe, say, open source (open source, floss, foss, open source software) and then use those words to inform a taxonomy. It's a taken a long time but I bet there's enough data in the nptech tag on a combination of bookmarking systems to do a little crunching and get at some of those commonly used terms. Sort of an emergent taxonomy... <span class="attribution"><a href="http://ext337.org/">Marnie Webb</a>,<br>nptech proto-tagger</span>
</blockquote> 

The nptech tag (on <a href="http://del.icio.us/tag/nptech">del.icio.us</a>) dates back to December of 2004 and was created by a group of nonprofit technologists that were exploring the potential for social tagging in the community. While I have a "curmudgeonly" eye for Web2.0 gizmos, in addition to a deep distrust of technophilic "progress" ...  I think that the development of this tag is arguably the single largest reason for the current (thriving I think) state of what is commonly called the "nptech community." Which means a lot to me.

(A great summary of the current conversation is at <a href="http://beth.typepad.com/beths_blog/2007/01/nptech_tag_disc.html">Beth Kanter's blog</a>.) 

Opinions abound. Most of us seem to be worked up about the efficiency of the tag. On this note there has been a lot of interesting reaction to a post by <a href="http://digitaldiner.typepad.com/gavins_digital_diner/2006/12/return_to_benea.html">Gavin Clabaugh</a>, which was critical of folksonomies. Laura Quinn of Idealware largely <a href="http://www.idealware.org/blog/2006/10/taxonomy-is-dead-long-live-taxonomy.html">agrees</a> with Gavin. 

In this context, it seems that generally the consensus has been that 1.) Taxonomies are harder to create than Folksonomies, but they are better in many contexts. And 2.) we need more data about how to make the nptech tag more useful as an "emergent taxonomy".

So, in the spirit of improving the tag and promoting the nptech community, here's some data: 

<ol>
<li>A plain text listing of every word that has been used on del.icio.us in association with nptech. <a href="/download/fulltext.xml.txt">fulltext.xml</a> </li>
<li>A sorted and ranked list of these tags. <a href="/download/nptech-tagged.txt">nptech-tagged.txt</a></li>
<li>All of the tags presented as <a href="/experiments/nptech/understanding_nptech.php">a scrollable tag-timeline</a>. </li>
<li>The script that I wrote to gather the data from delicious (in perl): <a href="/download/community-tag-robot.txt">community-tag-robot.txt</a>. (The code is also displayed below with syntax highlighting.)
</li> 
</ol>

<img src="/static/images/nptech.jpg" alt=" "/>
[Prototype removed]

The script that I wrote crawls the pages of del.icio.us and pulls out all of the tags that were used to describe the same stuff tagged "nptech". This gives us an idea of how the tag has been used &mdash; effectively describing the tagged links, if we assume taggers are using "synonym clouds". Del.icio.us has a "related tags" feature but it is lame (only 10 are listed), and judging from my initial review of the data it is pretty random.  (Not really sure if I broke some terms of use or not with my script, but it's *our* data, right? And besides, the script is very polite.)

There are a lot of delicious mashupy-type things that show you tagging patterns, but these approaches seem somehow very passive, and not community-oriented. I mean, in general delicious is used very passively &mdash; people want to be able *consume* more efficiently, not create some community in which greater action can be taken. Or it is just used for explicitly personal purposes, as a web-based bookmark service. 

What I like so much about the nptech tag is that it was intentionally created to support and reflect a community (unlike, say, the tag "nintendo," which may very well support a community, but it is not active in a self-critical, dialogic way.) And certainly there is a beauty, I think, in using these hyper-technological tools (which have the ability to be very atomizing and consumerist) for the sake of doing things that are explicitly not-for-profit and mission-driven. 

And personally I tend to agree with <a href="http://www.zenofnptech.org/2007/01/tagging_discuss.html">Michelle Murrain</a> that we need to be wary of an "expert" approach to developing our tags and community taxonomies. That line of thinking is what made me want to do this in the first place. (Likewise I need to point out how much I have really been thinking lately about stuff that I have been reading at Ulises Ali Majias' blog like <a href="http://ideant.typepad.com/ideant/2006/08/confinement_edu.html">this</a>.)

Anyway, further experimentation (graphs/charts from excel would be easy using the text files, for instance) would be nice; please let me know if you are doing something interesting with the data. I'm hoping that this will help us, as a community, determine what we want to do with this tag now that we have been using it for more than two years. What patterns do you see in the data? What does the nptech tag mean for our community? I am not going to try to start doing any analysis here, now &mdash; but I would really like to hear what people's reactions to the tag timeline are. 

There are still a lot of holes in this data that I could answer with a bit more programming. (i.e., who has been using the tag?) Suggestions for extending the script are welcome. What do we want to know?