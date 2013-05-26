---
layout: post
title: "div into label tag"
date: 2013-05-26 19:48
comments: true
categories: HTML
---

之前看到 **label** 時  
被它的 **for** 屬性驚到原來可以[這樣用]    
直到和 [Joseph大神] pair programming    
才發現到它真正的迷人之處  
也解決了許久許久之前常聽到有使用者反應  
**為什麼你們系統的 radio 和 checkbox 這麼小**  
我都點不到 XD  
那時得到的解答是：本來預設就是這樣！！  
不過  
今天終於得到真正的答案  
就是搭配 **label** 這屬性  

Demo 開始

<!-- more -->

<a class="jsbin-embed" href="http://jsbin.com/ebuwib/1/embed?live">Label Demo</a><script src="http://static.jsbin.com/js/embed.js"></script>

HTML Code
{% codeblock lang:html %} 
<!-- 
    input 須搭配 for 屬性才能做到focus
    radio 和 checkbox 則只需用label包住就可以
 -->
<label for="cname">Click_me_Name</label>
<input id="cname" type="text"/>

<label>Sex</label>
<label>
    <input name="sex"  type="radio"/>Click_me_Male
</label>
<label>
    <input name="sex" type="radio"/>Click_me_Female
</label>

<label>Hobby</label>
<label>
    <input type="checkbox"/>Click_me_Java
</label>
<label>
    <input type="checkbox"/>Click_me_PHP
</label>
<label>
    <input type="checkbox"/>Click_me_Python
</label>
    
{% endcodeblock %}

很簡單  
卻也解決了使用者心中的痛  
造就更棒的使用者體驗  

這就是**前端工程師**

歡迎加入 [Front-End Developers Taiwan]  
一起討論前端議題！

[這樣用]: blog/2013/05/11/html-and-css-todo-list/
[Joseph大神]: http://josephj.com/ "阿嗚"
[Front-End Developers Taiwan]: http://fb.f2d.tw/ 