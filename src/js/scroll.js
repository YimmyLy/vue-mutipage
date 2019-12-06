export default {
  // 滚动条在Y轴上的滚动距离
  scrollTop: 0,
  scrollHeight: 0,
  windowHeight: 0,
  init: function () {
    this.scrollTop = this.getScrollTop()
    this.scrollHeight = this.getScrollHeight()
    this.windowHeight = this.getWindowHeight()
  },
  getScrollTop: function () {
    var scrollTop = 0
    var bodyScrollTop = 0
    var documentScrollTop = 0
    if (document.body) {
      bodyScrollTop = document.body.scrollTop
    }
    if (document.documentElement) {
      documentScrollTop = document.documentElement.scrollTop
    }
    scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop
    return scrollTop
  },
  // 文档的总高度
  getScrollHeight: function () {
    var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0
    if (document.body) {
      bodyScrollHeight = document.body.scrollHeight
    }
    if (document.documentElement) {
      documentScrollHeight = document.documentElement.scrollHeight
    }
    scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight
    return scrollHeight
  },

  // 浏览器视口的高度
  getWindowHeight: function () {
    var windowHeight = 0
    if (document.compatMode == 'CSS1Compat') {
      windowHeight = document.documentElement.clientHeight
    } else {
      windowHeight = document.body.clientHeight
    }
    return windowHeight
  },
  throttle: function (func, wait, options) {
    var _ = this
    var timeout, context, args, result
    var previous = 0
    if (!options) options = {}

    var later = function () {
      previous = options.leading === false ? 0 : _.now()
      timeout = null
      result = func.apply(context, args)
      if (!timeout) context = args = null
    }

    var throttled = function () {
      var now = _.now()
      if (!previous && options.leading === false) previous = now
      var remaining = wait - (now - previous)
      context = this
      args = arguments
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout)
          timeout = null
        }
        previous = now
        result = func.apply(context, args)
        if (!timeout) context = args = null
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining)
      }
      return result
    }

    throttled.cancel = function () {
      clearTimeout(timeout)
      previous = 0
      timeout = context = args = null
    }

    return throttled
  },
  now: Date.now || function () {
    return new Date().getTime()
  }

}
