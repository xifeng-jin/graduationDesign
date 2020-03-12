<template>
  <div class="content-top">
    <div class="c_top">
      <div class="d">手机购买</div>
      <div v-for="(item,index) in params"
      :class="{active: index === currentIndex}"
      @click="itemClick(index)">
      {{item}}
      </div>
    </div>
    <div class="c_bottom">
      <div id="one" :class="{ active2: currentIndex!==count[0]}">
        <div class="a">产品名称：<span>{{detailParams.name}}</span></div>
        <div class="para">产品参数：</div>
        <div class="b1" v-for="item in detailParams.rule">
          <div class="b2" v-for="item2 in item">
            {{item2}}
          </div>
        </div>
        <div class="c_img">
          <img :src="detailParams.goodImg" alt="">
        </div>
        <div class="shop">
          店铺商标：
          <img :src="detailParams.shop" alt="">
      </div>
      </div>
      <div id="two" :class="{ active2: currentIndex!==count[1]}">
        <div class="title">商品种类规划：</div>
        <div class="info" v-for="item in detailParams.info">
          <span class="b1">{{item.key}}</span>
          <span class="b2">{{item.value}}</span>
        </div>
      </div>
      <div id="three" :class="{ active2: currentIndex!==count[2]}">
        <div class="com">全部评论：</div>
        <div class="rate" v-for="item in detailParams.rateList">
          <div class="con">{{item.content}}</div>
          <div class="con_bot">
            <img :src="item.user.avatar" alt="">
            <div class="a">
              <span class="name">{{item.user.uname}}</span>
              <span class="style">{{item.style}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ContentTop",
    props: {
      detailParams: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        params: ['商品详情','规格参数','累计评价'],
        currentIndex: 0,
        isShow: true,
        count: [0,1,2]
      }
    },
    methods:  {
      itemClick(index) {
        this.currentIndex = index
        console.log( this.currentIndex );
      }
    }
  }
</script>

<style scoped>
  .content-top {
    width: 100%;
    margin-left: 10px;
    border: 1px solid #e8f2ff;

    position: relative;
    cursor: pointer;
    z-index: 5;
  }
  .c_top {
    width: 100%;
    border: 1px solid #eeeeee;
    display: flex;
  }
  .c_top div {
    /*display: inline-block;*/
    /*width: 50px;*/
    /*height: 35px;*/
    /*line-height: 35px;*/
    text-align: center;
    padding: 12px;
    font-size: 14px;
    color: #666666;
  }
  .c_top div:nth-child(2) {
    margin-left: 408px;
  }
  .c_top .d {
    margin-left: 10px;
    font-size: 12px;
  }
  .c_top .active {
    color: #ff0080;
    font-weight: bold;
    border-right: 1px solid #E5E5E5;
    border-left: 1px solid #E5E5E5;
    border-top: 2px solid #ff0080;
  }
  .c_bottom #one{
    width: 100%;
    padding: 20px 15px;
    color: #888888;
    font-size: 14px;
    /*display: none;*/
  }
  .c_bottom #one .a {
    margin-bottom: 30px;
  }
  .c_bottom #one span {
    color: #444444;
  }
  .c_bottom #one .para {
    margin-bottom: 10px;
  }
  .c_bottom #one .b1 {
    display: flex;
  }
  .c_bottom #one .b1 .b2 {
    margin-right: 40px;

    padding: 10px 15px;
  }
  .c_bottom #one .shop {
    color: #444444;
    margin-top: 20px;
    position: relative;
  }
  .c_bottom #one .shop img {
    width: 200px;
    height: 30px;
    position: absolute;
    top: -5px;
    left: 75px;
  }
  .c_bottom #one .c_img {
    width: 250px;
    height: 250px;
    position: absolute;
    top: 90px;
    right: 30px;
  }
  .c_bottom #one .c_img img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
  .c_bottom #two {
    color: #666666;
    /*display: none;*/
    margin-bottom: 30px;
  }
  .c_bottom #two .title {
    margin-bottom: 20px;
    margin-top: 20px;
    margin-left: 20px;
  }
  .c_bottom #two .info {
    margin-left: 10px;
  }
  .c_bottom #two .info span {
    font-size: 15px;
    padding: 15px 20px;
  }

  .c_bottom #three {
    margin-bottom: 100px;
    /*display: none;*/
  }
  .c_bottom #three .com {
    margin: 20px 0 20px 20px;
  }
  .c_bottom #three .rate {
    width: 100%;
    height: 80px;
  }
  .c_bottom #three .rate {
    text-indent: 2em;
    color: #666666;
    font-size: 14px;
  }
  .c_bottom #three .rate img {
    width: 30px;
    height: 30px;
    border-radius: 5px;
    margin-top: 20px;
  }
  .c_bottom #three .rate .name {
    margin-left: 10px;
    margin-right: 10px;
  }
  .c_bottom #three .rate {
    position: relative;
  }
  .c_bottom #three .rate .a {
    position: absolute;
    top: 43px;
    left: 30px;
  }
  .c_bottom #three .rate .a .style {
    color: #ff0080;
  }
  .active2 {
    display: none;
    /*color: #ff0080;*/
  }
</style>
