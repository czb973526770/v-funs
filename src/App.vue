<template>
    <div id="app">
        <!--    <img alt="Vue logo" src="./assets/logo.png">-->
        <!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
        <Test></Test>
        <!--        <Video></Video>-->
    </div>
</template>

<script>
    import Test from './components/Test.vue';
    // import Video from './components/Videojs.vue'

    export default {
        name: 'App',
        components: {
            Test,
            // Video
        }
    }
</script>

<style>
    .banner-section {
        background-image: url(assets/images/resources/channel-banner.jpg);
        margin-top: -15px;
    }

    /*#app {*/
    /*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
    /*  -webkit-font-smoothing: antialiased;*/
    /*  -moz-osx-font-smoothing: grayscale;*/
    /*  text-align: center;*/
    /*  color: #2c3e50;*/
    /*  margin-top: 60px;*/
    /*}*/
</style>
