---
layout: post
title: "RequireJS Study Guideline"
date: 2013-06-02 00:51
comments: true
categories: requirejs, module
---

### Directory Structure

    www
    |—-index.html
    |—-js
    |   |---main.js
    |
    |--css
    |   |---main.scss
    |
    |--img
    |—–lib
        |———jquery/jquery-min.js
        |———requirejs/require.js
        |———bootstrap/bootstrap.js

{% codeblock lang:javascript %} 
requirejs.config({
    baseUrl: lib,
    paths: {
        jquery: jquery/jquery,
        main: ../js/main
    },
    shim: {
        bootstrap: ['jquery']
    }
});
{% endcodeblock %} 

待續...