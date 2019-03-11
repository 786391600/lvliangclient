//index.js
const app = getApp()
const until = require('../../until/index.js')
Page({
  data: {
    adress_tit:'',
    adress_con:'',
    addressShow: true,
    commodity_img: '',
    commodity_price: '',
    commodity_id: '',
    commodity_body: '',
    loading: true
  },
  onLoad: function (options) {
    var that = this;
    var appData = app.globalData;
    if(options.clickId){
      that.getCommodity({id: options.clickId})
    } else {
      that.getCommodity()
    }
    this.getAddress().then((res)=>{
      that.setData({
        adress_tit: res.userName + ' ' + res.telNumber,
        adress_con: res.provinceName + ' ' + res.cityName + ' ' + res.countyName + ' ' + res.detailInfo,
        addressShow: false
      })
    })
    this.setData({navHeight: appData.navHeight, windowHeight: appData.windowHeight });
  },
  onGetUserInfo: function(e) {
    if (!this.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        userInfo: e.detail.userInfo
      })
    }
  },

  onGetOpenid: function() {
    // 调用云函数
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        app.globalData.openid = res.result.openid
        wx.navigateTo({
          url: '../userConsole/userConsole',
        })
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
        wx.navigateTo({
          url: '../deployFunctions/deployFunctions',
        })
      }
    })
  },

  // 上传图片
  doUpload: function () {
    // 选择图片
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {

        wx.showLoading({
          title: '上传中',
        })

        const filePath = res.tempFilePaths[0]
        
        // 上传图片
        const cloudPath = 'my-image' + filePath.match(/\.[^.]+?$/)[0]
        console.log(cloudPath)
        wx.cloud.uploadFile({
          cloudPath,
          filePath,
          success: res => {
            console.log('[上传文件] 成功：', res)

            app.globalData.fileID = res.fileID
            app.globalData.cloudPath = cloudPath
            app.globalData.imagePath = filePath
            
            wx.navigateTo({
              url: '../storageConsole/storageConsole'
            })
          },
          fail: e => {
            console.error('[上传文件] 失败：', e)
            wx.showToast({
              icon: 'none',
              title: '上传失败',
            })
          },
          complete: () => {
            wx.hideLoading()
          }
        })

      },
      fail: e => {
        console.error(e)
      }
    })
  },
  getPhoneNumber: function (e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.iv)
    console.log(e.detail.encryptedData) 
  },
  zhifu: function(){
    console.log('zhifu')
    // wx.request({
    //   url: 'http://localhost:18080/action',
    //   method: 'POST',
    //   data:{
    //     action: 'wangtao',
    //     "data":{
    //       "bb":"bbbbb"
    //     }
    //   },
    //   success:function(e){
    //     console.log('success')
    //     console.log(e)
    //   }
    // })
    wx.requestPayment({
      timeStamp: '',
      nonceStr: '',
      package: '',
      signType: 'MD5',
      paySign: '',
      success(res) { },
      fail(res) {
        console.log(res)
      }
    })
  },
  pay: function () {
    // until.pay({
    //   body:'支付测试1',
    //   fee: 0.01
    // }).then((res)=>{
    //   console.log(res)
    // })
    until.request({
      action:'app.shop.buy',
      data:{
        name:'wangtao'
      }
    }).then(function(e){
      console.log(e)
    })
  },
  chooseAddress:function(){
    var that = this;
    wx.chooseAddress({
      success(res) {
        if (JSON.stringify(res) === JSON.stringify(wx.getStorageSync('address'))) {
          return
        }
        that.setData({
          adress_tit: res.userName + ' ' + res.telNumber,
          adress_con: res.provinceName + ' ' + res.cityName + ' ' + res.countyName + ' ' + res.detailInfo,
          addressShow: false
        })
        until.request({
          action: 'app.user.addAddress',
          data: {
            address: res
          }
        }).then(function (e) {
          wx.setStorageSync('address', res)
          if (that.data.userAuth){
            that.setData({ userAuth: false });
          }
        })
      },
      fail:function(res){
        if (res.errMsg.indexOf('auth') != -1) {
          that.getSetting()
        }
      }
    })
  },
  getAddress:function(){
   var that = this; 
   return new Promise((resolve,reject)=>{
     var that = this;
     wx.getStorage({
       key: 'address',
       success: function (res) {
         if (res) {
           that.addressShow = false;
           resolve(res.data)
         }
       },
       fail:function(res){
         until.request({
           action: 'app.user.getAddress',
           data:{}
         }).then((e)=>{
           if (e.data.success&&e.data.data){
             wx.setStorageSync('address', e.data.data)
             resolve(e.data.data)
           } else {
             reject()
           } 
         })
       }
     })
   })  
  },
  getCommodity (obj) {
    var that = this;
    var query = {}
    if (obj && obj.id){
      query.id = obj.id
    }
    until.request({
      action: 'app.commodity.getCommodity',
      data: query
    }).then(function (e) {
      that.setCommodity(e.data.data)
    })
  },
  commodityPay () {
    var that = this;
    // app.globalData.shareData = {
    //   imageUrl: that.data.commodity_img
    // }
    // wx.navigateTo({
    //   url: '/pages/paySuccess/index?id=' + that.data.commodity_id + '&title=' + this.data.commodity_body
    // })
    // return false;
     if (!wx.getStorageSync('address')) {
       wx.showToast({
         title: '请添加地址',
         icon: 'none',
         duration: 2000
       })
       return false;
     }
     console.log(this.data.commodity_id)
     if (!this.data.commodity_id) {
       wx.showToast({
         title: '没有商品信息',
         icon: 'none',
         duration: 2000
       })
       return false;
     }
     var that = this;
     until.pay({
       body: that.data.commodity_body,
       fee: that.data.commodity_price,
       commodityId: that.data.commodity_id,
       address: wx.getStorageSync('address'),
       type: 'commodity'
     }).then((res)=>{
       app.globalData.shareData = {
         imageUrl: that.data.commodity_img
       }
       wx.navigateTo({
         url: '/pages/paySuccess/index?id='+that.data.commodity_id+'&title='+this.data.commodity_body
       })
       console.log(res, 'pay test')
     }).catch((res) => {
       console.log(res, 'pay faile')
     })
  },
  imageOnload (e) {
    this.setData({loading:false})
  },
  moreCommodity (){
    // wx.navigateTo({
    //   url: '/pages/commodityList/index'
    // })
    wx.switchTab({
      url: '/pages/home/index'
    })
  },
  setCommodity(data){
    this.setData({ commodity_img: data.imgUrl, commodity_id: data.id, commodity_body: data.name, commodity_price: data.price })
  },
  toOrder () {
    wx.navigateTo({
      url: '/pages/order/index'
    })
  },
  getSetting(){
    let that = this;
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.address']) {
          that.chooseAddress()
        } else {
          that.setData({ userAuth: true });
        }
      }
    })
  },
  handleSetting(e) {
    let that = this;
    // 对用户的设置进行判断，如果没有授权，即使用户返回到保存页面，显示的也是“去授权”按钮；同意授权之后才显示保存按钮
    if (!e.detail.authSetting['scope.address']) {
      return;
    } else {
      that.setData({
        userAuth: false
      })
      that.chooseAddress()
    }
  }
})
