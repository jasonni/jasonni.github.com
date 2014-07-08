---
layout: post
title: ""Android Concurrency: CountDownLatch""
date: 2014-07-08 17:35
comments: true
categories: [android, concurrency] 
---

# CountDownLatch

Java CountDownLatch class that  
implements barrier synchronization.  
  
A barrier is a synchronization technique  
that halts the  
progress of one or more threads at a  
particular point.  
  
Barriers are commonly used in several ways.  
  
One way is to defer the start of  
current computations until after an object  
has been initialized.  
  
Another common use is to allow one thread  
to wait until a group  
of other concurrent threads are done with  
their processing before it can continue.  
