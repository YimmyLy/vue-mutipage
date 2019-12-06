export var wxShare = {

    isWeiXin: function() {
        var ua = window.navigator.userAgent.toLowerCase()
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            return true
        } else {
            return false
        }
    },
    // 分享文案
    initConfig: function(that, wx, api) {
        if (!this.isWeiXin()) {
            return
        }
        // 初始化验证微信配置
        api.share({
                url: location.href.split('#')[0]
            }).then(function(data) {
                data = data.data
                if (data.code === 0) {
                    wx.config({
                        debug: false,
                        appId: data.data.appId,
                        timestamp: data.data.timestamp, // 必填，生成签名的时间戳
                        nonceStr: data.data.noncestr, // 必填，生成签名的随机串
                        signature: data.data.signature, // 必填，签名，见附录1
                        jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                    })
                }
            })
            // 初始化微信
        wx.ready(function() {
            // 分享到朋友圈
            wx.onMenuShareTimeline({
                    title: that.title, // 分享标题
                    desc: that.text, // 分享描述
                    link: that.url, // 分享链接
                    imgUrl: that.thumbImage, // 分享图标
                    success: function() {
                        //
                    },
                    cancel: function() {
                        //
                    }
                })
                // 分享给朋友
            wx.onMenuShareAppMessage({
                    title: that.title, // 分享标题
                    desc: that.text, // 分享描述
                    link: that.url, // 分享链接
                    imgUrl: that.thumbImage, // 分享图标
                    type: '', // 分享类型,music、video或link，不填默认为link
                    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                    success: function() {
                        //
                    },
                    cancel: function() {
                        //
                    }
                })
                // 分享到QQ
            wx.onMenuShareQQ({
                title: that.title, // 分享标题
                desc: that.text, // 分享描述
                link: that.url, // 分享链接
                imgUrl: that.thumbImage, // 分享图标
                success: function() {
                    // 用户确认分享后执行的回调函数
                },
                cancel: function() {
                    // 用户取消分享后执行的回调函数
                }
            });
            // 分享给微博
            wx.onMenuShareWeibo({
                    title: that.title, // 分享标题
                    desc: that.text, // 分享描述
                    link: that.url, // 分享链接
                    imgUrl: that.thumbImage, // 分享图标
                    success: function() {
                        //
                    },
                    cancel: function() {
                        //
                    }
                })
                // 分享到QQ空间
            wx.onMenuShareQZone({
                title: that.title, // 分享标题
                desc: that.text, // 分享描述
                link: that.url, // 分享链接
                imgUrl: that.thumbImage, // 分享图标
                success: function() {
                    // 用户确认分享后执行的回调函数
                },
                cancel: function() {
                    // 用户取消分享后执行的回调函数
                }
            });
        })
        wx.error(function(res) {
            console.log('err:', res)
        })
    }

}