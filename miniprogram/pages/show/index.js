// pages/Testpage/OrderNumber/OrderNumber.js


const app = getApp()
const until = require('../../until/index.js')
var WxParse = require('../../until/wxParse/wxParse.js');
Page({
  data: {
    activityId: '',
    showShareBox: false
  },
  onLoad: function (e) {
    var that = this;
    if (e && e.articleId) {
      if (e.activityId) {
        that.data.activityId = e.activityId;
      }
      this.getArticleInfo({id: e.articleId})
    }
  },
  getArticleInfo: function (query) {
    var that = this;
    wx.showLoading({title: '努力加载中...'})
    until.request({
      action: 'app.article.getArticleInfo',
      data: query
    }).then(function (e) {
      console.log(e)
      var resultData = e.data;
      if (!resultData.success) {
        until.showToast(resultData.data.message, 'error');
        return;
      } else {
        var article = resultData.data.code;
        that.data.showId = resultData.data.id;
        that.data.shareTitle = resultData.data.name;
        WxParse.wxParse('article', 'html', article, that, 5);
        wx.hideLoading()
      }
    })
  },
  buttonClick () {
    wx.navigateTo({
      url: '/pages/activity/index?activityId=' + this.data.activityId
    }) 
  },
  onShareAppMessage: function (ops) {
    var that = this;
    if (ops.from === 'button') {
      // 来自页面内转发按钮
      console.log(ops.target)
    }
    var path = "pages/show/index?articleId=" + that.data.showId + "&activityId=" + that.data.activityId;
    console.log(path)
    console.log('path=======================')
    return {
      title: that.data.shareTitle,
      path: path
    }
  },
  showShareBox () {
    this.setData({showShareBox: true})
  },
  shareBoxHide () {
    this.setData({ showShareBox: false})
  }
})
