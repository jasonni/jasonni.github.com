---
layout: post
title: "amazing box sizing"
date: 2013-08-16 12:02
comments: true
categories: HTML, CSS 
---

最近做了一個兩欄式 layout  
左邊欄嵌入 iframe  
右邊欄分為上和下兩塊  
在 chrome 和 ie 上都顯示的十分幸福美好  
可是到 firefox 上時  
發現 iframe 被擠下去了囧  
和 @Vivian 大神研究之後  
發現是 firefox 在計算 width 的方式和其他不同  
例如  
width 為 235px  
padding 為 25px  
padding 理當和 width 不會有關係  
可是在 firefox 裡  
width 變成 260px 了囧  
好吧....front end 就是在解決這種問題的  
解法就是在右邊欄加入  
box-sizing: border-box  

之後一切又回歸幸福美滿  
