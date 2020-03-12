<template>
  <div class="hot">
    <div class="top">
      <span class="a">掌柜热卖</span>
      <span class="b" @click="pageDown">下一页</span>
      <span class="c">广告</span>
      <span class="d">你也想成为热卖吗?</span>
    </div>
    <div class="bottom">
      <div class="item" v-for="item in goods">
        <a :href="item.link">
          <img :src="item.show.img" alt="">
        </a>
        <div class="info">
          <div class="price">
            <span class="a">￥{{item.price}}</span>
            <span class="b">{{item.orgPrice}}</span>
            <span class="c">包邮</span>
          </div>
          <div class="title">{{item.title}}</div>
          <div class="sell">销量：{{item.cfav}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HotSell",
    props: {
      goods: {
        type:Array,
        default() {
          return []
        }
      }
    },
    methods: {
      pageDown() {
        this.$emit('down')
      }
    }
  }
</script>

<style scoped>
  .hot {
    border: 1px solid #bfd1e5;
    padding-bottom: 5px;
    padding-right: 40px;
  }
  .top {
    width: 100%;
    background: #E5E5E5;
    padding: 10px 20px;
    box-shadow: 0 2px 1px #bbbbbb;
    position: relative;
    cursor: pointer;
  }
  .top .a {
    font-weight: bold;
    color: #ff1433;
    padding-bottom: 10px;
    border-bottom: 2px solid #ff1433;
    letter-spacing: 2px;
  }
  .top .b {
    font-size: 14px;
    padding: 10px 30px;
  }
  .top .b:hover {
    border-bottom: 2px solid #ff1433;
    color: #ff1433;
    font-weight: bold;
  }
  .top .c {
    position: absolute;
    right: 150px;
    top: 15px;
    font-size: 12px;
    background: #ffffee;
    font-weight: bold;
    padding: 1px;
    color: #bbbbbb;
  }
  .top .d {
    position: absolute;
    right: 15px;
    top: 13px;
    font-size: 15px;
    color: #444444;
  }
  .bottom {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    padding: 15px 0 10px 20px;
  }
  .bottom .item {
    width: 19%;
    padding-bottom: 35px;
  }
  .bottom .item:hover {
    border: 1px solid #ff1433;
  }
  .bottom .item img{
    width: 100%;
    height: 250px;
    padding-bottom: 5px;
  }
  .info {
    position: relative;
  }
  .info .price {
    margin-bottom: 10px;
  }
  .info .price .a {
    color: orangered;
    font-size: 18px;
    font-weight: bold;
  }
  .info .price .b {
    margin-left: 5px;
    font-size: 14px;
    color: #666666;
    text-decoration: line-through;
  }
  .info .price .c {
    color: #FFFFFF;
    font-size: 14px;
    padding: 1px;
    background: orangered;
    margin-left: 45px;
  }
  .info .title {
    color: #111111;
    text-indent: 5px;
    padding: 0 5px;
    font-size: 14px;
  }
  .info .sell {
    position: absolute;
    right: 5px;
    top: 100px;
    color: #999999;
    font-size: 14px;
  }
</style>
