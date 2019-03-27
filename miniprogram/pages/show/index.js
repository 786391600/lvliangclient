// pages/Testpage/OrderNumber/OrderNumber.js


const app = getApp()
const until = require('../../until/index.js')
var WxParse = require('../../until/wxParse/wxParse.js');
Page({
  data: {
    activityId: ''
  },
  onLoad: function (e) {
    var that = this;
    if (e && e.articleId) {
      this.data.activityId = e.activityId;
      this.getArticleInfo({id: e.articleId})
    }
  },
  getArticleInfo: function (query) {
    var that = this;
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
        var article = e.data.data.code;
        WxParse.wxParse('article', 'html', article, that, 5);
      }
    })
  },
  buttonClick () {
    wx.navigateTo({
      url: '/pages/activity/index?activityId=' + this.data.activityId
    }) 
  }
})
