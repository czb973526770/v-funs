<template>

    <div class="demo1-video">
        <video class="video-js vjs-default-skin vjs-big-play-centered" controls preload="auto"
               type="application/x-mpegURL" webview.allowsInlineMediaPlayback=YES width='100%' ref='videoRef'
               :poster="posterSrc">
            <source id="sourceBox" :src="videoSrc">
            <p class="vjs-no-js">不支持播放</p>
        </video>
    </div>

</template>


<script>
    import vediojs from 'video.js'
    // import 'videojs-contrib-hls'

    export default {
        name: "Videojs",
        data(){
            return {
                videoSrc: 'http://down.soundaer.com/live/stream_89003_sd/playlist.m3u8?k=d708550fbd49c58a1b8a8412c8623277&t=1553687908',
                posterSrc: 'https://matrimony001.100msh.net.cn/public/code/material/mp-7261-1554175849.jpg',
                isError: false
            }
        },
        mounted() {
            //为避免在初始化video时播放源是空的，报播放源错误，需要先给source 的src赋值
            vediojs('vediobox',{
                    bigPlayButton: true,
                    textTrackDisplay: true,
                    posterImage: true,
                    errorDisplay: false,
                    controlBar: false,
                    playbackRates: [0.5, 1, 1.5, 2],
                    ControlBar:{
                        customControlSpacer: true
                    }
                },
                function onPlayerReady(){
                    this.play();
                    // setTimeout(() => {   //延时确保能监听到视频源错误
                    //     var mediaError = this.error();
                    //     if(mediaError!=null && mediaError.code){
                    //         _this.isError=true
                    //         Dialog.alert({
                    //             message: '啊哦，播放出错了。<br>请刷新重试，如无法播放建议您观看其它内容。',
                    //             confirmButtonText:'确定'
                    //         }).then(() => {
                    //             _this.goback();
                    //         });
                    //     }
                    // },1000);
                });
            // player.width(this.videoW)   //设置播放器宽度
        },
        beforeDestroy(){
            const videoDom = this.$refs.videoRef;   //不能用document 获取节点
            vediojs(videoDom).dispose();  //销毁video实例，避免出现节点不存在 但是flash一直在执行,也避免重新进入页面video未重新声明
        }
    }

</script>

<style scoped>

</style>
