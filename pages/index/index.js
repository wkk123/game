//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    gradeArr:['简单-单色','中级-双色','高级-四色'],
    gradeIndex: 0,
  },
  // 选择简单程度
  btnItem: function(e){
    let index = e.currentTarget.dataset.idx;
    this.setData({
      gradeIndex: index
    })
  },
  // 选择关卡 开始游戏
  gradeBtn: function(e){
    wx.navigateTo({
      url: '../poker/poker'+`?customsPass=${e.currentTarget.dataset.index}`
    })
  },
  onLoad: function () {

  },
})
