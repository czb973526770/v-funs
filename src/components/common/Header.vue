<template>
    <div>
        <header>
            <div class="top_bar">
                <div class="container">
                    <div class="top_header_content">
                        <div class="menu_logo">
                            <a href="#" title="" class="menu" @click="showMenu()">
                                <b-icon icon="blockquote-right"
                                        style="color: #292929; width: 23px;height: 21px;"></b-icon>
                            </a>
                            <a href="index.html" title="" class="logo">
                                <img src="../../assets/images/logo.png" alt="">
                            </a>
                        </div><!--menu_logo end-->
                        <div class="search_form">
                            <form>
                                <input type="text" name="search" placeholder="Search Videos">
                                <button type="submit">
                                    <b-icon icon="search"></b-icon>
                                </button>
                            </form>
                        </div><!--search_form end-->
                        <ul class="controls-lv">
                            <li>
                                <a href="#" title="">
                                    <b-icon icon="chat"></b-icon>
                                </a>
                            </li>
                            <li>
                                <a href="#" title="">
                                    <b-icon icon="bell"></b-icon>
                                </a>
                            </li>
                            <li class="user-log" @click="showUserMenu(this)">
                                <div class="user-ac-img">
                                    <img src="../../assets/images/resources/user-img.png" alt="">
                                </div>
                                <div class="account-menu" :style="this.userMenu">
                                    <h4>用户名 <span class="usr-status">PRO</span></h4>
                                    <div class="sd_menu">
                                        <ul class="mm_menu">
                                            <li>
												<span>
													<i class="icon-user"></i>
												</span>
                                                <a href="#" title="">我的频道</a>
                                            </li>
                                            <li>
												<span>
													<i class="icon-paid_sub"></i>
												</span>
                                                <a href="#" title="">订阅</a>
                                            </li>
                                            <li>
												<span>
													<i class="icon-settings"></i>
												</span>
                                                <a href="#" title="">设置</a>
                                            </li>
                                            <li>
												<span>
													<i class="icon-logout"></i>
												</span>
                                                <a href="#" title="">退出登录</a>
                                            </li>
                                        </ul>
                                    </div><!--sd_menu end-->
                                    <div class="sd_menu scnd">
                                        <ul class="mm_menu">
                                            <li>
												<span>
													<i class="icon-feedback"></i>
												</span>
                                                <a href="#" title="">分享至微博</a>
                                            </li>
                                        </ul>
                                    </div><!--sd_menu end-->
                                </div>
                            </li>
                            <li>
                                <a href="Upload_Video.html" title="" class="btn-default">上传视频</a>
                            </li>
                        </ul><!--controls-lv end-->
                        <div class="clearfix"></div>
                    </div><!--top_header_content end-->
                </div>
            </div><!--头部搜索-->
            <div class="btm_bar">
                <div class="container">
                    <div class="btm_bar_content">
                        <nav>
                            <ul>
                                <li><a href="#" title="">Pages</a>
                                    <div class="mega-menu">
                                        <ul>
                                            <li><a href="index.html" title="">Homepage</a></li>
                                            <li><a href="single_video_page.html" title="">Single Video Page</a></li>
                                            <li><a href="Single_Video_Simplified_Page.html" title="">Single Video
                                                Simplified Page</a></li>
                                            <li><a href="single_video_fullwidth_page.html" title="">Singel Video
                                                Full Width Page</a></li>
                                            <li><a href="single_video_playlist.html" title="">Single Video Playlist
                                                Page</a></li>
                                            <li><a href="Upload_Video.html" title="">Upload Video Page</a></li>
                                            <li><a href="Upload_Edit.html" title="">Upload Video Edit Page</a></li>
                                            <li><a href="Browse_Channels.html" title="">Browse channels page</a>
                                            </li>
                                            <li><a href="Searched_Videos_Page.html" title="">Searched videos
                                                page</a></li>
                                        </ul>
                                        <ul>
                                            <li><a href="#" title="">Single channel <span
                                                    class="icon-arrow_below"></span></a>
                                                <ul>
                                                    <li><a href="Single_Channel_Home.html" title="">Single Channel
                                                        Home page</a></li>
                                                    <li><a href="Single_Channel_Videos.html" title="">Single Channel
                                                        videos page</a></li>
                                                    <li><a href="Single_Channel_Playlist.html" title="">single
                                                        channel playlist page</a></li>
                                                    <li><a href="Single_Channel_Channels.html" title="">single
                                                        channel channels page</a></li>
                                                    <li><a href="Single_Channel_About.html" title="">single channel
                                                        about page</a></li>
                                                    <li><a href="Single_Channel_Products.html" title="">single
                                                        channel products page</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="History_Page.html" title="">History page</a></li>
                                            <li><a href="Browse_Categories.html" title="">Browse Categories Page</a>
                                            </li>
                                            <li><a href="Updates_From_Subs.html" title="">Updates from subscription
                                                page</a></li>
                                            <li><a href="login.html" title="">login page</a></li>
                                            <li><a href="signup.html" title="">signup page</a></li>
                                            <li><a href="User_Account_Page.html" title="">User account page</a></li>
                                        </ul>
                                    </div>
                                    <div class="clearfix"></div>
                                </li>
                                <li><a href="Browse_Categories.html" title="">Categories</a></li>
                                <li><a href="Browse_Channels.html" title="">Channels</a></li>
                                <li><a href="#" title="">Trending</a></li>
                                <li><a href="Single_Channel_Home.html" title="">LIVE</a></li>
                                <li><a href="#" title="">Movies</a></li>
                            </ul>
                        </nav><!--navigation end-->
                        <ul class="shr_links">
                            <li>
                                <h3>Go to : </h3>
                            </li>
                            <li>
                                <button data-toggle="tooltip" data-placement="top" title="Like">
                                    <i class="icon-like"></i>
                                </button>
                            </li>
                            <li>
                                <button data-toggle="tooltip" data-placement="top" title="Watch later">
                                    <i class="icon-watch_later"></i>
                                </button>
                            </li>
                            <li>
                                <button data-toggle="tooltip" data-placement="top" title="Playlist">
                                    <i class="icon-playlist"></i>
                                </button>
                            </li>
                            <li>
                                <button data-toggle="tooltip" data-placement="top" title="Purchased">
                                    <i class="icon-purchased"></i>
                                </button>
                            </li>
                            <li>
                                <button data-toggle="tooltip" data-placement="top" title="History">
                                    <i class="icon-history"></i>
                                </button>
                            </li>
                        </ul><!--shr_links end-->
                        <div class="clearfix"></div>
                    </div><!--btm_bar_content end-->
                </div>
            </div><!--头部导航-->
        </header> <!-- 头部-->

        <div class="side_menu" v-bind:class="this.isShowMenu ? 'active':''">
            <div class="form_dvv">
                <a href="#" title="" class="login_form_show">Sign in</a>
            </div>
            <div class="sd_menu">
                <ul class="mm_menu">
                    <li>
						<span>
							<i class="icon-home"></i>
						</span>
                        <a href="#" title="">Home</a>
                    </li>
                    <li>
						<span>
							<i class="icon-fire"></i>
						</span>
                        <a href="#" title="">Trending</a>
                    </li>
                    <li>
						<span>
							<i class="icon-subscriptions"></i>
						</span>
                        <a href="#" title="">Subscriptions</a>
                    </li>
                </ul>
            </div><!--sd_menu end-->
            <div class="sd_menu">
                <h3>Library</h3>
                <ul class="mm_menu">
                    <li>
						<span>
							<i class="icon-history"></i>
						</span>
                        <a href="#" title="">History</a>
                    </li>
                    <li>
						<span>
							<i class="icon-watch_later"></i>
						</span>
                        <a href="#" title="">Watch Later</a>
                    </li>
                    <li>
						<span>
							<i class="icon-purchased"></i>
						</span>
                        <a href="#" title="">Purchases</a>
                    </li>
                    <li>
						<span>
							<i class="icon-like"></i>
						</span>
                        <a href="#" title="">Liked Videos</a>
                    </li>
                    <li>
						<span>
							<i class="icon-play_list"></i>
						</span>
                        <a href="#" title="">Playlist</a>
                    </li>
                </ul>
            </div><!--sd_menu end-->
            <div class="sd_menu subs_lst">
                <h3>Subscriptions</h3>
                <ul class="mm_menu">
                    <li>
						<span class="usr_name">
							<img src="../../assets/images/resources/th1.png" alt="">
						</span>
                        <a href="#" title="">Dr Disrespect</a>
                        <small>3</small>
                    </li>
                    <li>
						<span class="usr_name">
							<img src="../../assets/images/resources/th2.png" alt="">
						</span>
                        <a href="#" title="">ASMR</a>
                        <small>6</small>
                    </li>
                    <li>
						<span class="usr_name">
							<img src="../../assets/images/resources/th3.png" alt="">
						</span>
                        <a href="#" title="">Rivvrs</a>
                        <small>2</small>
                    </li>
                    <li>
						<span class="usr_name">
							<img src="../../assets/images/resources/th4.png" alt="">
						</span>
                        <a href="#" title="">The Verge</a>
                        <small>11</small>
                    </li>
                    <li>
						<span class="usr_name">
							<img src="../../assets/images/resources/th5.png" alt="">
						</span>
                        <a href="#" title="">Seeker</a>
                        <small>3</small>
                    </li>
                    <li>
						<span class="usr_name">
							<img src="../../assets/images/resources/sn.png" alt="">
						</span>
                        <a href="#" title="">Music</a>
                        <small>20</small>
                    </li>
                </ul>
                <a href="#" title="" class="more-ch"><i class="icon-arrow_below"></i> Show 14 more</a>
            </div><!--sd_menu end-->
            <div class="sd_menu">
                <ul class="mm_menu">
                    <li>
						<span>
							<i class="icon-settings"></i>
						</span>
                        <a href="#" title="">Settings</a>
                    </li>
                    <li>
						<span>
							<i class="icon-flag"></i>
						</span>
                        <a href="#" title="">Report history</a>
                    </li>
                    <li>
						<span>
							<i class="icon-logout"></i>
						</span>
                        <a href="#" title="">Sign out</a>
                    </li>
                </ul>
            </div><!--sd_menu end-->
            <div class="sd_menu m_linkz">
                <ul class="mm_menu">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Community Rules </a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Blogs</a></li>
                    <li><a href="#">Contracts </a></li>
                    <li><a href="#">Donate</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
                <span>azyrusthemes</span>
            </div><!--sd_menu end-->
            <div class="sd_menu bb-0">
                <ul class="social_links">
                    <li>
                        <a href="#" title="">
                            <i class="icon-facebook-official"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" title="">
                            <i class="icon-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" title="">
                            <i class="icon-instagram"></i>
                        </a>
                    </li>
                </ul><!--social_links end-->
            </div><!--sd_menu end-->
            <div class="dd_menu"></div>
        </div><!--侧边菜单-->
    </div>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                isShowMenu: false,
                isShowUserMenu: false,
                userMenu: {},
            }
        },
        methods: {
            showMenu: function () {
                if (!this.isShowMenu) {
                    this.isShowMenu = true;
                } else {
                    this.isShowMenu = false;
                }
            },
            showUserMenu: function () {
                // alert(a);
                if (!this.isShowUserMenu) {
                    this.isShowUserMenu = true;
                    this.userMenu = {display: 'block'};
                } else {
                    this.isShowUserMenu = false;
                    this.userMenu = {display: 'none'};

                }

            },


        },
        mounted() {

        }
    }
</script>

<style scoped>

</style>
