// 获取地址栏参数
var utils = {
	getUrlKey:function(name){
		return decodeURIComponent((new RegExp('[?|&]'+name+'='+'([^&;]+?)(&|#|;|$)').exec(location.href)||[,""])[1].replace(/\+/g,'%20'))||null;
	},
	formatDate: function(date, fmt) {
	    if (/(y+)/.test(fmt)) {
	        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
	    }
	    let o = {
	        'M+': date.getMonth() + 1,
	        'd+': date.getDate(),
	        'h+': date.getHours(),
	        'm+': date.getMinutes(),
	        's+': date.getSeconds()
	    }
	    for (let k in o) {
	        if (new RegExp(`(${k})`).test(fmt)) {
	            let str = o[k] + ''
	            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : ('00' + str).substr(str.length))
	        }
	    }
	    return fmt
	},
	getQueryParameter: function(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
	},
	colors: [
		'#568C8A', '#4FE0DC', '#EAB4B4', '#AC9797', '#BA85AA', '#A08AAC', '#A985CF', '#807CB8',
		'#7C91B8', '#7CAFB8', '#7CB891', '#7DB87C', '#A5B87C', '#B8AC7C', '#B8967C', '#B87C7C',                
	],
	getRandomColor: function(){
		return this.colors[parseInt(Math.random() * 16)];
	}
}

export default utils;