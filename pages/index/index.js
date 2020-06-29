//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    gradeArr:['简单-单色','中级-双色','高级-四色'],
    gradeIndex: 0,
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  // 选择简单程度
  btnItem: function(e){
    let index = e.currentTarget.dataset.idx;
    this.setData({
      gradeIndex: index
    })
  },
  gradeBtn: function(e){
    let index = e.currentTarget.dataset.index;
    console.log('index',index)
  },
  onLoad: function () {

  },
})
