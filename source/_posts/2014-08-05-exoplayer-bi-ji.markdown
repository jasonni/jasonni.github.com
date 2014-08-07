---
layout: post
title: "ExoPlayer 筆記"
date: 2014-08-05 15:21
comments: true
categories: io2014,android,exoplayer,media player
---

##ExoPlayer - An application level media player for Android

![exoplayer-url](/images/exo_open_url.png)

###Before ExoPlayer

之前 MediaPlayer 的用法

{% codeblock lang:java %}

MediaPlayer player = MediaPlayer.create(ctx, uri, display);
player.start();
...
player.release();

{% endcodeblock %}

![mediaplayer-framework](/images/exo_mp_framework.png)

MediaPlayer 隱藏很多的細節

方便使用卻難以客制化

例如自訂 buffer policy 或 cache

在 Jelly Bean 版本

Google 提供 MediaExtractor，MediaCodec and AudioTrack low-level API

![exo-low-level](/images/exo_low_level_lib.png)

讓 media player 方便去做客制化

![exo-high-level](/images/exo_high_level_lib.png)

###What's DASH

[DASH](http://en.wikipedia.org/wiki/Dynamic_Adaptive_Streaming_over_HTTP)

允許在播放的期間，依照網路速度調整影片的品質

###ExoPlayer Benefit

* Youtube use
* 支援 Dynamic adaptive streaming over HTTP (DASH) and SmoothStreaming playback
* DRM 保護
* ExoPlayer gives a lot more control
* ExoPlayer can easily update

![exo vs mediaplayer](/images/exo_vs_mplayer.png)

* 減少啟動播放的延遲時間約 65%
* 重新 buffer 的機率少了 40%
* 平均播放高解析度影片的機率多了 11%

###核心

[MediaExtractor](http://developer.android.com/reference/android/media/MediaExtractor.html)
和
[MediaCodec](http://developer.android.com/reference/android/media/MediaCodec.html)

![exoplayer-framework](/images/exo_framework.png)
![exoplayer-model](http://developer.android.com/images/exoplayer/object-model.png)

###提供

####TrackRenderer

一個 abstract class 

*負責處理 video，audio 或 text 的播放*

ExoPlayer library 提供這些 implements class：

* **MediaCodecVideoTrackRenderer** as the default implementations rendering video
* **MediaCodecAudioTrackRenderer** for audio
* **TextTrackRenderer** for text

####SampleSource

TrackRenderer 需要 **SampleSource** (interface)

*它負責提供 格式資訊 和 media sample*

ExoPlayer library 提供這些 implements class：

* **FrameworkSampleSource** 使用 MediaExtractor 來 request，buffer 和解析 media sample!
  [FrameworkSampleSource](http://developer.android.com/images/exoplayer/frameworksamplesource.png)
	{% codeblock lang:java %}
	 int numRenderer = 2;
	FrameworkSampleSource sampleSource = new FrameworkSampleSource(activity, uri, null, 2);
	MediaCodecVideoTrackRenderer videoRenderer = new MediaCodecVideoTrackRenderer(sampleSource, null, true, MediaCodec.VIDEO_SCALING_MODE_SCALE_TO_FIT, 0, mainHandler, playerActivity, 50);
	MediaCodecAudioTrackRenderer audioRenderer = new MediaCodecAudioTrackRenderer(sampleSource, null, true);
	ExoPlayer player = ExoPlayer.Factory.newInstance(numRenderer);
	player.prepare(videoRenderer, audioRenderer);
	player.setPlayWhenReady(true);
	{% endcodeblock %}
  *注意到，video 和 audio 的來源是同一個 URI，它也能來自不同的 URI，只需要分別給予兩個 FrameworkSampleSource object*

* **ChunkSampleSource** 提供 DASH or SmoothStreaming，未使用 MediaExtractor，而是自己實作 networking，buffering 和 media extraction

	它需要：
	
  * **ChunkSource** object，裡面包含 **FormatEvaluator** 和 **DataSource**
    * FormatEvaluator objects 會在每一塊 chunk 讀取前，去選擇有效的格式
    * DataSource objects 的任務就是去讀取資料
  * **LoadControl** object 可以控制 chunk 的 buffering 規則 
  ![ChunkSampleSource](http://developer.android.com/images/exoplayer/adaptive-streaming.png)

####Media presentation description parser

**MediaPresentationDescriptionParser** class to obtain **Representation** objects from media presentation description(MPD) files


###支援格式

See [Supported Media Formats](http://developer.android.com/guide/appendix/media-formats.html) for details

###參考資料

[ExoPlayer API Guide](http://developer.android.com/guide/topics/media/exoplayer.html)

[Google I/O 2014 - Building great multi-media experiences on Android](http://developer.android.com/guide/topics/media/exoplayer.htm://www.youtube.com/watch?v=92fgcUNCHic&feature=youtube_gdata_player)

[ExoPlayer: Adaptive video streaming on Android](https://www.youtube.com/watch?v=6VjF638VObA)

