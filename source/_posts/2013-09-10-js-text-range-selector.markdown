---
layout: post
title: "JS Text Range selector"
date: 2013-09-10 16:58
comments: true
categories: javascript
---

今天需要用到文字選取  
情境是  
當使用者需要更改檔案名稱時  
直接將檔名反白選取  
這樣也可以避免改到附檔名  
如圖：  
 ![demo] 
[demo]: http://goo.gl/01sWwx "demo"  

程式碼：  
{% codeblock lang:javascript %} 
    /**
     * Text Range Selector
     *
     * @param   {Element}   element
     * @param   {Integer}   start
     * @param   {Integer}   end
     */
    function select (element, start, end) {
        element = element instanceof jQuery ? element.get(0) : element;
        end = end === -1 ? element.value.length : end;
        element.focus();
        try {
            if (element.createTextRange) {
                var range = element.createTextRange();

                if (win.navigator.userAgent.toLowerCase().indexOf("msie") >= 0) {
                    start = element.value.substr(0, start).replace(/\r/g, '').length;
                    end = element.value.substr(0, end).replace(/\r/g, '').length;
                }

                range.collapse(true);
                range.moveStart('character', start);
                range.moveEnd('character', end - start);

                range.select();
            } else if (element.setSelectionRange) {
                element.setSelectionRange(start, end);
            }
        } catch (e) {
        }
    }
{% endcodeblock %}
