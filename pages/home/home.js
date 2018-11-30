// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   * "../" 表示上一级目录开始；
"./" 表示同级目录开始
"/" 表示根目录开始
   */
  data: {

    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 100,
    "banner_list": [

      {
        "banner": [
          
          {
            "pic_url": "/images/1.jpg",
          },
       
          {
            "pic_url": "/images/2.jpg",
          },
          {
            "pic_url": "/images/3.jpg",
          },

          {
            "pic_url": "http://img.my.csdn.net/uploads/201407/26/1406383290_9329.jpg",
          },

        ]
      }
    ],

  },
  onLaunch: function() {
    console.log('App onLaunch');

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var a = 1;
    var b = 1;
    console.log("--------" + (a + b));
    for (var i = 0; i < 5; i++) {
      if (i = 3) {
        console.log(i);
        break;
      }

    }
    var myArray = new Array()


    var person1 = createPerson("Nicholas", 29, "Software Engineer");
    var person2 = createPerson("Greg", 27, "Doctor");
    console.log(person2.name);
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }


})

function createPerson(name, age, job) {
  var o = new Object();
  o.name = name;
  o.age = age;
  o.job = job;
 
  return 0;
}

