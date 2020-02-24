import Vue from 'vue'
import App from './App.vue'

import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'
import './assets/css/animate.css'


import Video from 'video.js'
import 'video.js/dist/video-js.css'

Vue.prototype.$video = Video


Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
