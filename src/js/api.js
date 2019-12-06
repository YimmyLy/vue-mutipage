import Axios from 'axios'
var baseURL = process.env.baseURL || ''
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

function requestApi(url, method, headers, params) {
    var config = {
        url: url,
        method: method,
        baseURL: baseURL,
        headers: headers
    }
    method === 'get' ? config['params'] = params : config['data'] = params
    return Axios(config)
        .catch((err) => {
            console.log(err)
        })
}
export var api = {
    // 微信分享
    share: function(params) {
        return requestApi('wechat/signature', 'get', '', params)
    },

    /*---------------通用接口-----------------*/
    // 用户行为新增 (actionType：1阅读 2点赞 3收藏  objectType=1资讯  ObjectId)
    userAction: function(headers, params) {
        return requestApi(`/api/kkhemp/user/actions`, 'post', headers, params)
    },
    // 用户行为取消 (actionType：1阅读 2点赞 3收藏  objectType=1资讯 ObjectId)
    userActionCancel: function(headers, params) {
        return requestApi(`/api/kkhemp/user/actions`, 'delete', headers, params)
    },
    // 评论新增 objectType:1 资讯  ObjectId  content  replyTo
    addComment: function(headers, params) {
        return requestApi(`/api/v1/comments`, 'POST', headers, params)
    },
    // 评论删除
    delComment: function(headers, params) {
        return requestApi(`/api/v1/comments/cancel`, 'POST', headers, params)
    },
    // 评论列表
    newsCommList: function(headers, params) {
        return requestApi(`/api/v1/comments`, 'get', headers, params)
    },
}