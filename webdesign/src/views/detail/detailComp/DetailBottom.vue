<template>
  <div class="detail-bottom">
    <div class="top">
      <div class="one">
        <div class="a">优</div>
        <div class="a2">
          <div class="b1">品质保障</div>
          <div class="b2">品质护航 购物无忧</div>
        </div>
      </div>
      <div class="two">
        <div class="a">七</div>
        <div class="a2">
          <div class="b1">七天无理由换货</div>
          <div class="b2">为您提供售后无忧保障</div>
        </div>
      </div>
      <div class="three">
        <div class="a">特</div>
        <div class="a2">
          <div class="b1">特色服务体验</div>
          <div class="b2">为您呈现不一样的服务</div>
        </div>
      </div>
      <div class="four">
        <div class="a">帮</div>
        <div class="a2">
          <div class="b1">帮助中心</div>
          <div class="b2">您的购物指南</div>
        </div>
      </div>
    </div>
    <div class="center">
      <div class="one">
        <div class="a"><span>购物指南</span></div>
        <div><span>免费注册</span></div>
        <div><span>开通支付宝</span></div>
        <div><span>支付充值</span></div>
      </div>
      <div class="two">
        <div class="a"><span>天猫保障</span></div>
        <div><span>发票保障</span></div>
        <div><span>售后规则</span></div>
        <div><span>缺货赔付</span></div>
      </div>
      <div class="three">
        <div class="a"><span>支付方式</span></div>
        <div><span>快捷支付</span></div>
        <div><span>信用卡</span></div>
        <div><span>余额宝</span></div>
        <div><span>蚂蚁花呗</span></div>
        <div><span>货到付款</span></div>
      </div>
      <div class="four">
        <div class="a"><span>商家服务</span></div>
        <div><span>天猫规则</span></div>
        <div><span>商家入住</span></div>
        <div><span>运营服务</span></div>
        <div><span>物流服务</span></div>
      </div>
    </div>
    <div class="cat">
      <div class="c1"><img src="~assets/img/png/cat1.png" alt=""></div>
      <div class="c2"> <img src="~assets/img/png/cat2.png" alt=""></div>
    </div>
    <div class="bot">
      <img src="~assets/img/png/word.png" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBottom"
  }
</script>

<style scoped>
  .detail-bottom {
    position: relative;
    margin-top: 20px;
    margin-bottom: 20px;
    border-top: 1px solid #e8f2ff;
    padding: 30px 0;
    cursor: pointer;
  }
  .top {
    display: flex;
  }
  .top .one, .top .two, .top .three,.four {
    flex: 1;
    display: flex;
  }
  .top .one .a, .top .two .a, .top .three .a, .top .four .a {
    padding: 10px;
    border: 2px solid #ff0080;
    font-weight: bold;
    border-radius: 50%;
    color: #ff0080;
    margin-right: 10px;
    margin-left: 55px;
  }
  .top .one .b1, .top .two .b1, .top .three .b1, .top .four .b1 {
    font-weight: bold;
    color: #444444;
    font-size: 18px;
  }
  .top .one .b2, .top .two .b2, .top .three .b2, .top .four .b2 {
    font-size: 14px;
    color: #666666;
  }

  .center {
    display: flex;
    border-top: 1px solid #e8f2ff;
    padding-top: 20px;
    margin-top: 30px;
    padding-left: 160px;
  }
  .center .one ,.center .two ,.center .three , .center .four{
    flex: 1;
    color: #666666;
    font-size: 14px;
    display: block;
  }
  .center .one div , .center .two div, .center .three div,.center .four div {
    margin-bottom: 5px;
  }
  .center .one div span:hover , .center .two div span:hover, .center .three div span:hover,.center .four div span:hover {
    border-bottom: 1px solid #ff0080;
    color: #ff0080;
  }
  .center .one .a, .center .two .a , .center .three .a ,.center .four .a {
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  .cat .c1{
    width: 120px;
    height: 174px;

    position: absolute;
    bottom: -10px;
    left: -20px;
  }
  .cat .c2 {
    width: 180px;
    height: 133px;
    position: absolute;
    right: -10px;
    bottom: -10px;
  }
  .cat img {
    width: 100%;
    height: 100%;
  }
  .black {
    /*width: 100%;*/
    /*height: 450px;*/
    /*background: #000;*/
    /*z-index: 30;*/
  }
  .bot {
    position: absolute;
    bottom: -120px;
    left: 30%;
  }
</style>
