---
layout: post
title: "ExoPlayer 筆記"
date: 2014-08-05 15:21
comments: true
categories: io2014,android,exoplayer,mediaplayer
---

ExoPlayer
![exoplayer-url](/images/exo_open_url.png)

###MeidaPlayer vs. ExoPlayer
* Youtube and Play Movie use.
* ExoPlayer gives a lot more control.
* ExoPlayer can easily update.

![exo vs mediaplayer](/images/exo_vs_mplayer.png)

###核心

[MediaExtractor](http://developer.android.com/reference/android/media/MediaExtractor.html)
and
[MediaCodec](http://developer.android.com/reference/android/media/MediaCodec.html)

![exoplayer-framework](/images/exo_framework.png)
![exoplayer-model](http://developer.android.com/images/exoplayer/object-model.png)


###支援 Adaptive Streaming

允許在播放的期間，依照網路速度同整影片的品質

* Dynamic adaptive streaming over HTTP (DASH)
* SmoothStreaming
* Persistent caching

###提供

####TrackRenderer

An abstract class processes a component of media for playback, such as video, audio or text.

The ExoPlayer library provides these implements class: 

* **MediaCodecVideoTrackRenderer** as the default implementations rendering video
* **MediaCodecAudioTrackRenderer** for audio.
* **TextTrackRenderer** for text.

####SampleSource

TrackRenderer required **SampleSource** (interface).
It provides *format information* and *media samples to be rendered*

The ExoPlayer library provides these implements class:

* **FrameworkSampleSource** uses MediaExtractor to request, buffer and extract the media samples.![FrameworkSampleSource](http://developer.android.com/images/exoplayer/frameworksamplesource.png)
{% codeblock lang:java %}
FrameworkSampleSource sampleSource = new FrameworkSampleSource(activity, uri, null, 2);
MediaCodecVideoTrackRenderer videoRenderer = new MediaCodecVideoTrackRenderer(sampleSource, null, true, MediaCodec.VIDEO_SCALING_MODE_SCALE_TO_FIT, 0, mainHandler, playerActivity, 50);
MediaCodecAudioTrackRenderer audioRenderer = new MediaCodecAudioTrackRenderer(sampleSource, null, true);
{% endcodeblock %}

> Note that in the example, video and audio are muxed, meaning they are streamed together from a single URI.
*It is also possible to play demuxed media, where video and audio are streamed separately from different URIs.*
This functionality can be achieved by having two FrameworkSampleSource instances instead of one.

* **ChunkSampleSource** provides adaptive playback using DASH or SmoothStreaming, and implements networking, buffering and media extraction. It requires:
  * A **ChunkSource** object, implementations require a **FormatEvaluator** and a **DataSource**
    * The FormatEvaluator objects select from the available formats before each chunk is loaded.
    * The DataSource objects are responsible for actually loading the data.
  * A LoadControl object that controls the chunk buffering policy. ![ChunkSampleSource](http://developer.android.com/images/exoplayer/adaptive-streaming.png)

####Media presentation description parser

**MediaPresentationDescriptionParser** class to obtain **Representation** objects from media presentation description(MPD) files.


###支援格式

See [Supported Media Formats](http://developer.android.com/guide/appendix/media-formats.html) for details.

###參考資料

[ExoPlayer API Guide](http://developer.android.com/guide/topics/media/exoplayer.html)

[Google I/O 2014 - Building great multi-media experiences on Android](http://developer.android.com/guide/topics/media/exoplayer.htm://www.youtube.com/watch?v=92fgcUNCHic&feature=youtube_gdata_player)

