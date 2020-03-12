<template>
  <div class="profile-center7">
    <div class="top">
      <div class="nav">
        <span class="a">解忧杂货铺</span>
        <span class="b">我的足迹</span>
      </div>
      <div class="track-goods"></div>
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
    name: "ProfileCenter7",
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
  .top {
    margin-top: 10px;
    background: orangered;
    padding: 15px 0;
    color: #FFFFFF;
  }
  .top .a {
    font-size: 25px;
    font-weight: bold;
    margin-left: 25px;
    margin-right: 15px;
  }
  .content {
    margin-top: 50px;
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
