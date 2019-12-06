import Vue from 'vue'

Date.prototype.Format = function(fmt) { // author: meizz
    var o = {
        'M+': this.getMonth() + 1, // 月份
        'd+': this.getDate(), // 日
        'h+': this.getHours(), // 小时
        'm+': this.getMinutes(), // 分
        's+': this.getSeconds(), // 秒
        'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
        'S': this.getMilliseconds() // 毫秒
    }
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
    for (var k in o) { if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length))) }
    return fmt
}

// 时间
Vue.filter('fdate', function(date, fmt) {
    var date = new Date(date)
    var o = {
        'M+': date.getMonth() + 1, // 月份
        'd+': date.getDate(), // 日
        'h+': date.getHours(), // 小时
        'm+': date.getMinutes(), // 分
        's+': date.getSeconds(), // 秒
        'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
        'S': date.getMilliseconds() // 毫秒
    }
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    for (var k in o) { if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length))) }
    return fmt
})

Vue.filter('fixPoint', function(num, point) {
    if (!num) return '--'
    return (num * 1).toFixed(point)
})

Vue.filter('lookingTime2', function(time, fmt) {
    var currTime = new Date().getTime()
    var elapse = currTime - time
    var data = new Date(time)

    if (elapse > 0 && elapse <= 60 * 1000) {
        return '刚刚'
    } else if (elapse > 60 * 1000 && elapse <= 60 * 60 * 1000) {
        return parseInt(elapse / (60 * 1000)) + '分钟前'
    } else if (elapse > 60 * 60 * 1000 && elapse <= 24 * 60 * 60 * 1000) {
        return parseInt(elapse / (60 * 60 * 1000)) + '小时前'
    } else if (elapse > 24 * 60 * 60 * 1000 && elapse <= 2 * 24 * 60 * 60 * 1000) {
        return parseInt(elapse / (24 * 60 * 60 * 1000)) + '天前'
    } else {
        var o = {
            'M+': data.getMonth() + 1, // 月份
            'd+': data.getDate(), // 日
            'h+': data.getHours(), // 小时
            'm+': data.getMinutes(), // 分
            's+': data.getSeconds(), // 秒
            'q+': Math.floor((data.getMonth() + 3) / 3), // 季度
            'S': data.getMilliseconds() // 毫秒
        }
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (data.getFullYear() + '').substr(4 - RegExp.$1.length))
        for (var k in o) { if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length))) }
        return fmt
    }
})

// 取名字第一个字母并设置背景色
// 获取名字第一个文字，转换成16进制颜色值
Vue.filter('tranColor', function(name) {
    let firstName = name.substring(1, 0);

    var str = '';
    for (var i = 0; i < name.length; i++) {
        str += parseInt(name[i].charCodeAt(0), 10).toString(16);
    }
    return '#' + str.slice(1, 4);
})


Vue.filter('replaceBlank2br', function(text) {
    if (!text) { return }
    var value = text.split('<').join('&lt;  ')
    value = value.split('>').join('&gt; ')
    value = value.split('\n').join('<br />')
    return value
})
Vue.filter('replaceString', function(string) {
    if (!string) return '--'
    return string.trim().replace(' ', ' - ')
})
Vue.filter('underwriter', function(underwriter) {
    if (!underwriter) return '--'

    if (underwriter.indexOf(',') > 0) {
        return underwriter.split(',')[0]
    } else {
        return underwriter
    }
})

Vue.filter('underwriter', function(underwriter) {
    if (!underwriter) return '--'

    if (underwriter.indexOf(',') > 0) {
        return underwriter.split(',')[0]
    } else {
        return underwriter
    }
})

// 最小单位是亿元
Vue.filter('yiMoney', function(num) {
    if (!num) return '--'
    if (num >= 1) {
        return num.toFixed(2)
    } else {
        return (num * 10000).toFixed(2)
    }
})

Vue.filter('fixe', function(num) {
    if (!num) return '-'
    return (num).toFixed(2)
})

Vue.filter('fixed2', function(num) {
    if(typeof num != 'number'){
        return num
    }
    num = num * 1;
    if(num % 1 == 0){
        return ((num + '.00') * 1).toFixed(2)
    }else{
        return num.toFixed(2)
    }
})

Vue.filter('zanCount', function(num) {
    if (num > 9999) {
        return '10k+'
    } else if (num > 990) {
        return '999+'
    } else {
        return num
    }
})

 // 处理换行
Vue.filter('textareaTo', function(str) {
    let regs = new RegExp("\r", "g");
    let reg = new RegExp("\n", "g");
    let regSpace = new RegExp(" ", "g");
    str = str.replace(reg, "<br/>");
    str = str.replace(regs, "<br/>");
    str = str.replace(regSpace, "&nbsp;");
    return str;
})
