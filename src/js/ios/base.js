var base = {
    // 初始化环境
    setupWebViewJavascriptBridge: function (callback) {
        if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) { // IOS
            if (window.WebViewJavascriptBridge) { return callback(WebViewJavascriptBridge) }
            console.log('IOS')
            if (window.WVJBCallbacks) { return window.WVJBCallbacks.push(callback) }
            window.WVJBCallbacks = [callback]
            var WVJBIframe = document.createElement('iframe')
            WVJBIframe.style.display = 'none'
            WVJBIframe.src = 'https://__bridge_loaded__'
            document.documentElement.appendChild(WVJBIframe)
            setTimeout(function () { document.documentElement.removeChild(WVJBIframe) }, 0)
        } else if (/(Android)/i.test(navigator.userAgent)) { // android
            console.log('安卓')
            if (window.WebViewJavascriptBridge) {
                callback(WebViewJavascriptBridge)
            } else {
                document.addEventListener('WebViewJavascriptBridgeReady', function () {
                    callback(WebViewJavascriptBridge)
                }, false)
            }
        }
    }
}

export default base
