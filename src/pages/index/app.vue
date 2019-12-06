<template>
  <div id="app" v-cloak>
    汉麻工场
  </div>
</template>
<script>
    import {
        ios
    } from "@/js/ios/index.js";
    import wx from "weixin-js-sdk";
    import $ from "jquery";
    import {
        api
    } from "@/js/api.js";
    import {
        wxShare
    } from "@/js/wxshare.js";
    import scroll from "@/js/scroll.js";
    export default {
        data() {
            return {
                proUrl: `http://${location.host}`,
                pageShow: false,
                viewType: 0,
                userId: 0, //当前登录用户的id
                clientType: '1',
                mToken: '',
                httpHeaders: {
                    'system': 2,
                },
                checkVersion: 0,
                bridge: null,
                pageTitle: '汉麻工场',
                statusBarHeight: 0,

                shareInfo: {}, //分享
            }
        },
        created() {
            if (this.$utils.getUrlKey('ft')) {
                this.viewType = this.$utils.getUrlKey('ft')
            }

            if (this.viewType == 2) {
                ios.init(this);
            } else {
                this.getDataList();
            }
        },
        methods: {
            getDataList() {
                let _this = this;
                _this.bridge && ios.hideloading(_this)
            },
            // 返回上一页
            goBack: function() {
                let _this = this;
                ios.goBack(_this)
            },
            // Native分享
            shareNative: function() {
                let _this = this;
                ios.jumpShareNative(_this)
            },
            // 微信二次分享文案
            wxShare: function() {
                if (!this.shareInfo) return;

                wxShare.initConfig(this.shareInfo, wx, api);
            },
        },
    }
</script>
<style scoped>
    [v-cloak] {
        display: none;
    }
</style>