---
layout: post
title: "Jquery Validation With Bootstrap Style"
date: 2013-06-01 13:42
comments: true
categories: HTML, CSS, JQUERY
---
最近因工作需要開始研究 [Jquery Validation]  
不過因為我們導入 [Bootstrap]  
因此它產生訊息提示的 style 還得覆寫一下  
才能符合我們的需求  
看一下 [Demo]  
  
在實作上  
各欄位驗證的屬性設定可以參考[Jquery Validation] Document  
除了 html class 要符合 [Bootstrap] 規範外  
其中需要注意的是  
* 若 form 裡有 radio 或 checkbox 時，一定要去覆寫 errorPlacement，
否則驗證訊息會出現在錯誤的位置
* 驗證欄位可以寫在 html class 或 js，若寫在 js 不能寫 form 裡沒有的欄位，否則 bug 會找不到噢 XD  

再來就是要去覆寫 js 的 function 來達到我們的需求

<!-- more -->

{% codeblock lang:javascript %} 

// default is label
errorElement: 'span'

// 將 message class 換成 bootstrap style
errorClass: 'help-inline'

// 驗證錯誤時要替換的 class
highlight: function(element) {
    $(element).closest('.control-group').removeClass( 'info').addClass('error');
}
// 驗證成功時要替換的 class
success: function(element) {
    $(element).closest('.control-group').removeClass('error').addClass('info');
}
// 判斷 form 裡是否有 radio or checkbox
errorPlacement: function (error, element) {
    if(element.is(':checkbox') || element.is(':radio')) {
        var controls = element.closest('.controls');
        if(controls.find(':checkbox,:radio').length > 1) {
           controls.append(error);
        } else {
            error.insertAfter(element.nextAll('.lbl').eq(0));
        }
    } else {
        error.insertAfter(element);
    }
}
{% endcodeblock %}




[Jquery Validation]: http://jqueryvalidation.org/ "jqueryvalidation"
[Bootstrap]: http://twitter.github.io/bootstrap/ "bootstrap"
[Demo]: /prototype/jq_validate.html "Demo"