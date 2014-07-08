---
layout: post
title: "Android Concurrency: ReentrantLock"
date: 2014-07-08 18:25
comments: true
categories: [android, concurrency]
---

# ReentrantLock

ReentrantLock uses the Ganga four bridge pattern

it provides mutual exclusion and implements the lock interface

1. First, it inherits the bulk of its functionality from  
   the AbstractQueuedSynchronizer class which  
   provides a framework for implementing  
   blocking locks and synchronizers that  
   rely on First In, First Out or F.I.F.O.  
   wait queues.  

2. Second, it implements several lock  
   acquisition models via its common  
   interface.  

3. The key methods in ReentrantLock are lock,  
   lock interruptibly, and unlock.  
