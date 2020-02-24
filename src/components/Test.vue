<template>
    <div class="wrapper hp_1">
        <div>
            <Header></Header>
        </div>
        <div>
            <!--            <Register></Register>-->
            <!--            <VideoPage></VideoPage>-->
            <!--            <LoginPage></LoginPage>-->
<!--            <Channels></Channels>-->
            <UserCenter></UserCenter>
        </div>
        <div>
            <Footer></Footer>
        </div>
    </div><!--wrapper end-->
</template>

<script>
    import '../assets/css/style.css'
    import '../assets/css/flatpickr.min.css'
    import '../assets/css/responsive.css'
    import '../assets/css/color.css'
    import Header from "./common/Header";
    import Footer from "./common/MoreLtem";
    import UserCenter from "./UserCenterPage";
    // import HomePageComponents from "./HomePageComponents";
    // import Channels from "./Channels";
    // import Register from "./RegisterPage";
    // import VideoPage from "./VideoPage";
    // import LoginPage from "./LoginPage";


    export default {
        name: "Test",
        components: {UserCenter, Footer, Header},
    }
</script>

<style>
    .side_menu {
        top: 65px;
    }

    * {
        margin: 0;
        padding: 0;
    }

    element.style {
        height: 54px;
    }

    .user-log:before {
        display: none;
    }

    #app > div > div > header > div.top_bar > div > div > div.menu_logo > a.logo > img {
        margin-bottom: 5px;
    }

    .top_bar {
        border-bottom: 1px solid #e2ebef;
        padding: 15px 15px 5px;
    }
</style>
