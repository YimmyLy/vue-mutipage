import base from './base'

// ios调取h5
export var ios = {
    proUrl: `${location.protocol}//${location.host}`,
    // 初始化配置
    init: function(vm) {
        var _this = this
        base.setupWebViewJavascriptBridge(function(bridge) {
            vm.bridge = bridge
            if (/(Android)/i.test(navigator.userAgent)) {
                bridge.init(function(message, responseCallback) {
                    responseCallback('')
                })
            }
            _this.getDeviceInfo(vm); //获取设备信息
            _this.getData(vm)
            _this.setTitle(vm)
        })
    },
    // 获取设备信息
    getDeviceInfo: function(vm) {
        let _this = this;
        vm.bridge.callHandler('NativeDeviceInfo', {}, function(response) {
            let getResponse = response;
            if (/(Android)/i.test(navigator.userAgent)) {
                getResponse = JSON.parse(response)
            }
            vm.statusBarHeight = getResponse.statusBarH;
            vm.checkVersion = parseInt((getResponse.version + '').replace('.', ''));
        })
    },
    // 设置标题
    setTitle: function(vm) {
        vm.bridge.callHandler('NativeSetTitle', {
            title: vm.pageTitle
        }, function(response) {
            console.log('JS got response', response)
        })
    },
    // 隐藏loding
    hideloading: function(vm) {
        vm.bridge.callHandler('NativeHideLoading', {}, function(response) {
            console.log('JS got response', response)
        })
    },
    // 返回
    goBack: function(vm) {
        vm.bridge.callHandler('NativePopBack', {}, function(response) {
            console.log('JS got response', response)
        })
    },

    // 去登陆
    goLogin: function(vm) {
        var _this = this;
        vm.bridge.callHandler('NativeShowLogin', {}, function(response) {
            var getResponse = response;
            if (/(Android)/i.test(navigator.userAgent)) {
                getResponse = JSON.parse(response)
            }
            if (getResponse.success == true) {
                _this.getData(vm)
            }
            console.log('JS got response', response)
        })
    },
    // 复制
    copyTextInNative: function(vm, text, info) {
        vm.bridge.callHandler('NativeCopyText', {
            text: text,
            info: info,
        }, function(response) {
            console.log('JS got response', response)
        })
    },
    // 请求接口
    getData: function(vm) {
        if (vm.bridge === null) { return }
        vm.bridge.callHandler('NativeUserInfo', {}, function(response) {
            var getResponse = response
            if (/(Android)/i.test(navigator.userAgent)) {
                getResponse = JSON.parse(response)
            }
            // alert(getResponse.ClientType + '分隔' + getResponse.mToken + '分隔线');
            vm.userId = getResponse.id;
            vm.clientType = getResponse.ClientType;
            vm.mToken = getResponse.mToken;
            vm.httpHeaders = {
                'm-token': vm.mToken,
                'client-type': vm.clientType,
                'system': 2,
                'client-code': vm.userCode || vm.clientCode,
            }
            vm.getDataList()
        })
    },

    // 分享
    jumpShareNative(vm) {
        var _this = this;
        if (vm.bridge == null) return;
        vm.bridge.callHandler('NativeShare', vm.shareInfo, function(response) {
            var getResponse = response
            if (/(Android)/i.test(navigator.userAgent)) {
                getResponse = JSON.parse(response)
            }
            // "success": true bool, 是否分享成功
            // "platform": 1  int, 分享到的平台
        })
    },

    /**
     * 跳转页面方法
     * isWebPage 可以不传， 默认为true
     * true：h5页面 
     * false：原生页面
     */
    jumpUrl(vm, url, isWebPage = true) {
        if (vm.viewType == 2) {
            vm.bridge.callHandler('NativeJumpUrl', { 'url': url }, function(response) {
                console.log('JS got response', response)
            })
            return
        }
        if (isWebPage) {
            window.location.href = url
        }
    },
    // 图片预览 
    showPreImagesInNative: function(vm, index) {
        if (vm.bridge === null) {
            return
        }
        vm.bridge.callHandler('NativeShowImageBrower', {
            images: vm.imgList,
            index: index,
        }, function(response) {
            console.log('JS got response', response)
        })
    },
}

// 去除cnzz生成的文字内容
// $('a[title="站长统计"]').html('');
// $('a[title="站长统计"]').html('');