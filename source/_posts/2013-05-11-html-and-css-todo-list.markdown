---
layout: post
title: "HTML &amp; CSS Todo List"
date: 2013-05-11 14:18
comments: true
categories: HTML, CSS
---

將[miiiCasa]目前學到的新手訓練  
實作了一張 [HTML CSS Todo List] 靜態網頁

之所以想做 Todo List 的原因  
是因為網路上操作其實大多脫離不了*新刪查改*

所以假如在學習一個新的Framework時  
可以搞懂**新刪查改**的使用方式  
大概也掌握了6, 7成

因此做了一個 Todo List  
希望每學到一個新的東西時  
就用 Todo List 實作一下 XD

****

####[小莊大師]魔鬼細節的指導
####*input: placeholder* 以及 *label: for* 的優雅之處
  

{% codeblock lang:html %}
<div>
    <label for="todo">代辦事項</label>
    <input type="text" id="todo" placeholder="enter something todo" >
</div>
{% endcodeblock %}

<!-- more -->

*[input: placeholder]* 的優雅之處在於  
* 描述會直接秀在text裡面  
* 點進去輸入時會自己刪除  
* 不輸入則又會出現  
* 新瀏覽器皆支援, IE9還是只能自己刻(囧)  

*[label: for]* 的優雅之處在於  
* 當 for 的 id 等於 input 的 id 時, 點 label 會自動 focus 到 input  
* 全瀏覽器支援, 太讚了  


Demo: [HTML CSS Todo List]

[input: placeholder]: http://www.w3schools.com/tags/att_input_placeholder.asp "w3c input"
[label: for]: http://www.w3schools.com/tags/att_label_for.asp "w3c label"
[小莊大師]: http://www.kvzhuang.net/ "小莊"
[miiiCasa]: http://miiicasa.com/ "miiiCasa"
[HTML CSS Todo List]: /prototype/html_css_todolist.html/ "Demo"

