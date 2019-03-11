// pages/Testpage/ActivityOne/index.js
const app = getApp()
const until = require('../../until/index.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    canvasW: 0,
    canvasH: 0,
    navHeight: 0,
    windowHeight: 0,
    userAuth: false,
    options: {scene:''},
    getImage: false,
    shareCon: {
      text1: "意思点科技",
      text2: "免费领取鸡排",
      text3: "长按扫码参加活动！",
      text4: "吕梁惠乐购技术支持！"
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var appData = app.globalData;
    if (options.shareType === 'activity'){
      var shareData = JSON.parse(options.activityInfo)
      that.data.shareCon.text1 = shareData.merchants.name;
      that.data.shareCon.text2 = shareData.title;
      that.data.options.scene = options.scene;
      that.data.options.activityId = shareData.id;
      that.data.options.sceneType = options.sceneType;
      that.data.options.type = 'activity'
      if (options.sceneType === 'private'){
        that.data.options.partakeId = options.scene;
      }
    }
    this.setData({ canvasW: that.getSize(375), canvasH: that.getSize(660), navHeight: appData.navHeight, windowHeight: appData.windowHeight});
    that.getPosterImage()
  },
  getPosterImage(){
    var that = this;
    var canW = that.data.canvasW;
    var canH = that.data.canvasH;
    wx.showLoading({
      title: '海报生成中'
    })
    return new Promise((resolve, reject) => {
      until.request({
        action: 'app.activity.getQrCode',
        data: this.data.options
      }).then(function (e) {
        if (e.data.success) {
          const fsm = wx.getFileSystemManager();
          const FILE_BASE_NAME = 'tmp_base64src';
          var base64data = e.data.data.img;
          const [, format, bodyData] = /data:image\/(\w+);base64,(.*)/.exec(base64data) || [];
          if (!format) {
            reject(new Error('ERROR_BASE64SRC_PARSE'));
          }
          const filePath = `${wx.env.USER_DATA_PATH}/${FILE_BASE_NAME}.${format}`;
          const buffer = wx.base64ToArrayBuffer(bodyData);
          fsm.writeFile({
            filePath,
            data: buffer,
            encoding: 'binary',
            success() {
             console.log(filePath)
              wx.getImageInfo({
                src: filePath,
                success: function(e){
                  const context = wx.createCanvasContext('shareCanvas')
                  var imgW = that.getSize(162);
                  var imgX = canW/2-imgW/2;
                  var imgY = that.getSize(324)
                  context.setFillStyle('#D5554C')
                  context.fillRect(0, 0, canW, canH);
                  context.setTextAlign('center')
                  context.setFillStyle('#FFFFFF')  // 
                  context.setFontSize(that.getSize(34))
                  context.fillText(that.data.shareCon.text1, canW / 2, that.getSize(60))
                  context.fillStyle = "white";
                  context.fillRect(10, that.getSize(228), canW-20, that.getSize(428));
                  context.setFillStyle('#FFFFFF')
                  context.setFontSize(that.getSize(40))
                  var text2 = that.data.shareCon.text2;
                  var text2L = text2.length;
                  var num = Math.ceil(text2L/8);
                  for (var i = 0; i < num; i++){
                    var start = i * 8;
                    context.fillText(text2.substring(start, (start+1)*8), canW / 2, that.getSize(122 + i*43))
                  }
                  context.drawImage(e.path,imgX,imgY,imgW,imgW)
                  context.setFillStyle('#ccc')
                  context.setFontSize(that.getSize(28))
                  context.fillText(that.data.shareCon.text3, canW / 2, that.getSize(290))
                  context.setFillStyle('#ccc')
                  context.setFontSize(that.getSize(20))         // 文字字号：22px
                  context.fillText(that.data.shareCon.text4, canW / 2, that.getSize(540))
                  context.draw(false, function(){
                      setTimeout(function(){
                        wx.canvasToTempFilePath({
                          canvasId: 'shareCanvas',
                          fileType: 'jpg',
                          width: that.data.canvasW,
                          height: that.data.canvasH,
                          destWidth: that.data.canvasW,
                          destHeight: that.data.canvasH,
                          success(res) {
                            console.log(res.tempFilePath)
                            that.setData({ previewUrl: res.tempFilePath })
                            wx.hideLoading()
                            that.data.getImage = true;
                          }
                        })
                      },500)
                    },0)
                }
              })
            },
            fail() {
              reject(new Error('ERROR_BASE64SRC_WRITE'));
            },
          });
          resolve(e)
        } else {
          until.showToast(e.data.message, 'error');
        }
      })
    })
  },
  getSize(size){
    return Math.floor(app.globalData.windowWidth/750 * size) * 3;
    //return size;
  },
  downloadImage () {
    var that = this;
    if (!that.data.previewUrl){
      until.showToast('正在生成..','error')
    }
    wx.saveImageToPhotosAlbum({
      filePath: that.data.previewUrl,
      success(res) {
        until.showToast('保存成功');
      },
      fail(res){
        if (res.errMsg.indexOf('auth') != -1) {
          that.getSetting()
        }
      }
    })
  },
  getSetting (e) {
    let that = this;
    wx.getSetting({
      success(res){
        if (res.authSetting['scope.writePhotosAlbum']){
          that.downloadImage()
        } else {
          that.setData({userAuth: true});
        }
      }
    })
  },
  handleSetting (e) {
    let that = this;
    // 对用户的设置进行判断，如果没有授权，即使用户返回到保存页面，显示的也是“去授权”按钮；同意授权之后才显示保存按钮
    if (!e.detail.authSetting['scope.writePhotosAlbum']) {
      return;
    } else {
      that.setData({
        userAuth: false
      })
      that.downloadImage()
    }
  }
})