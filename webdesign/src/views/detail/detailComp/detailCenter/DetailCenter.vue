<template>
  <div class="detail-center">
    <div class="title">{{detailInfo.title}}</div>
    <div class="price">
      <div class="top">价格 <span>{{detailInfo.oldPrice}}</span></div>
      <div class="bottom">
        <div class="a">促销价</div>
        <div class="b">
          <div class="p">￥{{detailInfo.price}} <span>{{detailInfo.sell}}</span></div>
          <div class="c">淘金币可抵扣商品价格5%</div>
          <div class="d">想要￥{{detailInfo.price - 5}}拿下吗？<span>那就来朱氏店铺!!!</span></div>
        </div>
      </div>
    </div>
    <div class="trans">
      运费
      <span class="a">江西宜春</span>
      <span class="b">至</span>
      <span class="c">{{detailInfo.extra}}</span>
      <span class="d">快递费：{{detailInfo.transPrice}}元</span>
      <span class="e">快递：顺丰快递</span>
      <span class="f">时间：{{detailInfo.time}}</span>
    </div>
    <div class="csell">
      <span class="c1">月销量：{{detailInfo.cSells | getSell}}</span>
      <span class="c2">累计评论：{{detailInfo.comment}}</span>
      <span class="c3">送天猫积分：{{detailInfo.pointScore}}</span>
    </div>
    <div class="d_info">
      <div class="d_top">
        <span class="first">尺码</span><span>M</span><span>L</span><span>XL</span><span>XXL</span><span>3XL</span><span>4XL</span><span>5XL</span>
      </div>
      <div class="d_center">
        <span class="first">优惠</span>
        <span v-for="item in detailInfo.promote">{{item}}</span>
        <!--<span>{{detailInfo.promote[0]}}</span>-->
        <!--<span>{{detailInfo.promote[3]}}</span>-->
        <!--<span>{{detailInfo.promote[1]}}</span>-->
        <!--<span>{{detailInfo.promote[2]}}</span>-->
      </div>
      <div class="d_bottom">
        <span class="d_a">数量</span>
        <div class="count">
          <span class="d_count">{{count}}</span>
          <span class="a" @click="sub"><</span>
          <span class="b" @click="add">></span>
        </div>
      </div>
    </div>
    <div class="shop">
      <span class="s_a">立即购买</span>
      <span class="s_b" @click="addToCart">加入购物车</span>
    </div>
    <div class="tip">
      <span class="first">服务承诺</span>
      <span v-for="item in detailInfo.services">{{item}}</span>
      <!--<span>{{detailInfo.services[0]}}</span>-->
      <!--<span>{{detailInfo.services[1]}}</span>-->
      <!--<span>{{detailInfo.services[2]}}</span>-->
      <!--<span>{{detailInfo.services[3]}}</span>-->
      <!--<span class="last">{{detailInfo.services[4]}}</span>-->
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailCenter",
    data() {
      return {
        count: 0
      }
    },
    props: {
      detailInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters: {
      getSell(msg) {
        var temp = (msg / 10000).toFixed(1);
        if (temp >= 1) {
          return temp + '万'
        } else  {
          return msg
        }
      }
    },
    methods: {
      add() {
        this.count += 1
      },
      sub() {
        if (this.count) {
          this.count -= 1
        } else {
          this.count = 0;
          alert("兄台不能在减少了！！")
        }
      },
      addToCart() {
        // alert("添加购物成功!!!");
        this.$emit('addCart')
      }
    }
  }
</script>

<style scoped>
  .title {
    font-weight: bold;
  }
  .price {
    width: 100%;
    padding: 10px;
    background: #E5E5E5;
    margin-top: 15px;
  }
  .price .top {
    font-size: 14px;
    color: #666666;
    margin-bottom: 10px;
  }
  .price .top span {
    margin-left: 50px;
    font-size: 16px;
    color: #111111;
    text-decoration: line-through;
  }
  .price .bottom {
    color: #666666;
    font-size: 14px;
    position: relative;
    padding-bottom: 70px;
  }
  .price .bottom .b {
    width: 85%;
    position: absolute;
    top: 0;
    left: 80px;
  }
  .b .p {
    color: #ff0000;
    font-size: 24px;
    margin-left: -5px;
    margin-bottom: 5px;
    font-weight: bold;
  }
  .b .p span {
    padding: 1px 14px;
    border-radius: 5px;
    background: #ff383a;
    color: #ffffee;
    font-size: 14px;
  }
  .b .c {
    color: #ff1433;
    font-size: 14px
  }
  .b .d {
    color: #ff1433;
    font-size: 15px;
    border-top: 1px solid rgba(0,0,0,0.1);
    padding-top: 8px;
    letter-spacing: 1px;
  }
  .b .d span {
    color: #333333;
    font-size: 16px;
    margin-left: 10px;
  }

  .trans {
    width: 100%;
    padding: 15px 10px 35px 10px;
    font-size: 12px;
    color: #888888;
    position: relative;
  }
  .trans .a {
    margin-left: 20px;
  }
  .trans .b {
    margin-left: 4px;
  }
  .trans .c {
    margin-left: 4px;
  }
  .trans .d {
    margin-left: 10px;
    border-top: none;
  }
  .trans .e {
    margin-left: 90px;
  }
  .trans .f {
    position: absolute;
    left: 10px;
    top: 40px;
  }

  .csell {
    width: 100%;
    color: #888888;
    font-size: 14px;
    padding: 10px 10px 10px 20px;
    border-top: 1px dotted #E5E5E5;
    border-bottom: 1px dotted #E5E5E5;
  }
  .csell .c1 {
    margin: 0 50px 0 30px;
  }
  .csell .c2 {
    margin-right: 50px;
  }

  .d_info {
    padding: 15px 12px;
    width: 100%;
  }
  .d_info .d_top {
    width: 100%;
    cursor: pointer;
  }
  .d_info .d_top span {
    padding: 5px 10px;
    border: 1px solid #9999;
    margin-right: 5px;
    font-size: 14px;
  }
  .d_info .d_top span:hover {
    border: 2px solid #ff1433;
  }
  .d_info .d_top .first {
    color: #888888;
    font-size: 14px;
    margin-right: 30px;
    border: none;
  }
  .d_info .d_top .first:hover {
    border: none;
  }
  .d_info .d_center {
    width: 100%;
    cursor: pointer;
    margin-top: 30px;
    padding-left: 5px;
  }
  .d_info .d_center span {
    color: #888888;
    font-size: 14px;
    padding: 5px;
    margin-right: 5px;
    border: 1px solid #999999;
  }
  .d_info .d_center span:hover {
    border: 2px solid #ff1433;
    /*color: #FFFFFF;*/
  }
  .d_info .d_center .first {
    border: none;
    margin-right: 40px;
  }
  .d_info .d_center .first:hover {
    border: none;
  }

  .d_bottom {
    width: 100%;
    color: #888888;
    font-size: 14px;
    margin-top: 15px;
    padding: 10px;
    position: relative;
    cursor: pointer;
  }
  .d_bottom .count {
    position: absolute;
    top: 10px;
    left: 80px;
    font-size: 16px;
  }
  .d_bottom .count .d_count {
    border: 1px solid #888888;
    padding: 5px 30px 5px 5px;
    margin-right: 20px;
  }
  .d_bottom .count span {
    padding: 5px 0;
    border-radius: 2px;
    border: 1px solid #666666;
    margin-right: 10px;
  }
  .d_bottom .count span:hover {
    background: #ff2222;
    color: #FFFFFF;
  }
  .d_bottom .count .d_count:hover {
    background: #FFFFFF;
    color: #888888;
  }
  .shop {
    width: 100%;
    text-align: center;
    margin-top: 16px;
  }
  .shop span {
    border: 1px solid #ff2222;
    padding: 10px 50px;
    cursor: pointer;
  }
  .shop .s_a {
    background: rgba(255,237,237);
    color: #ff1433;
    margin-right: 10px;
  }
  .shop .s_b {
    color: #FFFFFF;
    background: rgba(255,0,54);
    font-weight: bold;
  }
  .tip {
    margin-top: 50px;
    margin-left: 20px;
    font-size: 14px;
    color: #555555;
  }
  .tip span {
    margin-right: 20px;
  }
  .tip .first {
    color: #888888;
    margin-right: 20px;
  }
  .tip .last {
    margin-left: 75px;
    margin-top: 15px;
  }
</style>
