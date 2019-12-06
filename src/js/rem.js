; (function (doc, win) {
  var docEl = doc.documentElement
  var resizeEvt = 'resize'
  var recalc = function () {
    var clientWidth = docEl.clientWidth
    if (!clientWidth) return
    clientWidth >= 640 ? clientWidth = 640 : clientWidth
    docEl.style.fontSize = 20 * (clientWidth / 640) + 'px'
    document.body.style.width = clientWidth + 'px'
  }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
}(document, window))
