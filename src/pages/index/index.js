// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import FastClick from 'fastclick'
// 
import '@/js/rem.js'
import '@/js/filter.js'
import utils from '@/js/utils.js'

import '../../../static/css/base.css'

// 

Vue.prototype.$utils = utils
Vue.config.productionTip = false
FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: {
        App
    },
    template: '<App/>'
})