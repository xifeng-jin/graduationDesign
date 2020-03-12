<template>
  <div class="profile-center">
    <div class="top">
      <div class="a">
        <img src="~assets/local/getAvatar.jpg" alt="">
        <span class="a1">溪风直流(t_1486728770922_0489)</span>
        <span class="a2">我的收货地址</span>
        <span class="a3">我的优惠信息</span>
        <span class="a4">我的支付宝</span>
      </div>
      <div class="b">
        <span class="b1" @click="obligation">待付款{{$store.state.shopGoods.length}}</span>
        <span class="b2" @click="obligation">代发货</span>
        <span class="b3" @click="obligation">待收货</span>
        <span class="b4" @click="obligation">待评价</span>
        <span class="b5" @click="obligation">退款</span>
      </div>
    </div>
    <div class="content">
      <div class="nav">
        <span class="a">根据浏览，猜我喜欢</span>
        <span class="b" @click="exchangeGoods">换一批</span>
      </div>
      <div class="goods">
        <div class="goods-item" v-for="item in sellGoods">
          <img :src="item.show.img" alt="">
          <div class="info">
            <div class="price">
              <span class="p1">￥{{item.price}}</span>
              <span class="p2">{{item.orgPrice}}</span>
            </div>
            <div class="title">{{item.title}}</div>
            <div class="cfav">销量：{{item.cfav}}</div>
          </div>
        </div>
        <div class="more">加载更多</div>
      </div>
    </div>
  </div>
</template>

<script>
  import {getHomeGoods} from "network/home"

  export default {
    name: "ProfileCenter",
    data() {
      return {
        sellPage: 1,
        sellGoods: []
      }
    },
    methods: {
      exchangeGoods() {
        this.sellPage += 1;
        this._getSellGoods(this.sellPage)
      },
      obligation() {
        this.$router.push('/shop')
      },
      _getSellGoods(page) {
        getHomeGoods('sell',page).then(res => {
          // console.log( res );
          var list = res.data.list;
          this.sellGoods = list;
          console.log( this.sellGoods );
        })
      }
    },
    created() {
      this._getSellGoods(this.sellPage)
    }
  }
</script>

<style scoped>
  .profile-center {
    /*border-top: 1px solid #ff2222;*/
  }
  .top {
    width: 100%;
    cursor: pointer;
  }
  .top .a {
    padding: 30px;
    background: rgb(245,245,245);
    border: 1px solid #eeeeee;
    position: relative;
  }
  .top .a img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    position: absolute;
    top: 15px;
    left: 20px;
  }
  .top .a span {
    font-size: 14px;
    color: #222222;
  }
  .top .a .a1 {
    margin-left: 60px;
    margin-right: 60px;
  }
  .top .a .a2 {
    margin-right: 60px;
    color: #888888;
  }
  .top .a .a3 {
    margin-right: 60px;
    color: #888888;
  }
  .top .b {
    padding: 20px 0;
    border: 1px solid #eeeeee;
    width: 100%;
  }
  .top .b span {
    display: inline-block;
    font-size: 14px;
    color: #444444;
    text-align: center;
    border-right: 1px solid #eeeeee;
    width: 19%;
  }
  .top .b .b5 {
    border-right: none;
  }

  .content {
    margin-top: 20px;
    cursor: pointer;
  }
  .content .nav {
    padding: 10px 0;
    background: lightblue;
    width: 100%;
  }
  .content .nav .a {
    margin-left: 10px;
    color: #FFFFFF;
    font-size: 17px;
  }
  .content .nav .b {
    float: right;
    margin-right: 10px;
    padding: 2px 10px;
    color: #444444;
    border-radius: 5px;
    background: #FFFFFF;
    font-size: 15px;
  }
  .content .goods {
    position: relative;
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    justify-content: space-around;
    padding: 30px 0 50px;
    background: rgb(245,245,245);
  }
  .content .goods .goods-item {
    width: 30%;
    margin-bottom: 15px;
  }
  .content .goods .goods-item:hover {
    border: 1px solid #ff2222;
  }
  .content .goods .goods-item img{
    width: 100%;
    height: 250px
  }
  .content .goods .goods-item .info {
    background: #FFFFFF;
    padding: 10px 10px 10px 15px;
  }
  .content .goods .goods-item .info .price .p1 {
    color: orangered;
    font-size: 18px;
    font-weight: bold;
  }
  .content .goods .goods-item .info .price .p2 {
    margin-left: 10px;
    color: #999999;
    font-size: 14px;
    text-decoration: line-through;
  }
  .content .goods .goods-item .info .title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #333333;
    font-size: 14px;
    margin-top: 10px;
  }
  .content .goods .goods-item .info .cfav {
    margin-top: 10px;
    margin-left: 120px;
    color: #999999;
    font-size: 14px;
  }
  .goods .more {
    position: absolute;
    bottom: 15px;
    left: 40%;
    padding: 5px 15px;
    background: #FFFFFF;
    border-radius: 8px;
  }
</style>
