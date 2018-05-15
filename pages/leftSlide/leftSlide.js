// pages/leftSlide/leftSlide.js

const App = getApp()
import itemData from './mock.js'

Page({
  data: {
    itemData,
  },
  touchS: function (e) {  // touchstart
    this.setData({ itemData: App.Touches.touchStart(e) })
  },
  touchM: function (e) {  // touchmove
    let item = App.Touches.touchMove(e)
    item && this.setData({ [`itemData[${App.Touches.getItemIndex(e)}]`]: item })
  },
  touchE: function (e) {  // touchend
    let item = App.Touches.touchEnd(e)
    item && this.setData({ [`itemData[${App.Touches.getItemIndex(e)}]`]: item })
  },
  itemDelete: function(e){  // itemDelete
    this.data.itemData.splice(App.Touches.getItemIndex(e), 1)
    this.initTouchData()
    this.setData({ itemData: this.data.itemData })
  },
  initTouchData() {
    App.Touches.initData({
      datalist: this.data.itemData,
      operationWrapperWidth: 150
    })
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.initTouchData()
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})