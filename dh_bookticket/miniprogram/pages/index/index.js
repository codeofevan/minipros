//index.js
const app = getApp()
const log = console.log.bind(console)

Page({
  data: {
    isActive:true,
    startCity:"广州",
    targetCity:"上海",
    startDate:"12月8日",
    arriveDate:"12月9日"
  },

  onLoad() {
  },
  chgOneWay(){
    this.setData({
      isActive:true
    });
  },
  chgRoundTrip(){
    this.setData({
      isActive: false
    });
  }
})