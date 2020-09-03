// pages/poker/poker.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pokerData:[
      ['c', 'c', 'c', 'c'],
      ['c', 'd', 'c', 'd'],
      ['a', 'b', 'c', 'd']
    ],
    pokerType:[],//当前类型
    pokerAllPet:[],//扑克数组
    pokerDoneGroup:[],//首发牌数组
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { customsPass } = options;
    const { pokerData } = this.data;
    const pokerType = pokerData[Number(customsPass) - 1];
    this.setData({
      pokerType: pokerType
    },()=>{
      this.initGame()
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  // 初始化游戏
  initGame:function(){
    const { pokerType } = this.data;
    console.log('pokerType', pokerType)
    this.initRandomPoker()
  },
  // 初始化扑克
  initRandomPoker(){
    const arr = [];
    const { pokerType } = this.data;
    for (let index = 0; index < pokerType.length; index++) {
      for (let it = 0; it < 13; it++) {
        let a = `${pokerType[index]}-${it+1}`; 
        arr.push(a,a)
      }
    }
    this.setData({
      pokerAllPet: this.shuffle(arr)
    })
  },
  // 数组 随机
  shuffle:function(arr) {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
      let idx = Math.floor(Math.random() * (len - i));
      let temp = arr[idx];
      arr[idx] = arr[len - i - 1];
      arr[len - i - 1] = temp;
    }
    return arr;
  }

})