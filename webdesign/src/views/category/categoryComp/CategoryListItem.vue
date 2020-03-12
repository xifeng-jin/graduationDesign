<template>
  <div class="list-item">
    <img :src="item.img" alt="" class="goodImg">
    <div class="info">
      <div class="title">{{item.title}}</div>
      <img :src="item.logo" alt="">
      <div class="price">
        <span class="a">￥{{item.newPrice}}</span>
        <span class="b">{{item.oldPrice}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CategoryListItem",
    props: {
      item: {
        type:Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .list-item {
    width: 100%;
    position: relative;
  }
  .list-item  .goodImg {
    width: 100%;
    height: 152px;
  }
  .list-item  .info {
    /*text-align: center;*/
    margin-top: 10px;
    font-size: 14px;
  }
  .list-item  .info .title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    margin-bottom: 10px;
    color: #333333;
  }
  .list-item  .info img {
    width: 25px;
    height: 25px;
    margin-left: 8px;
  }
  .list-item  .info .a {
    color: orangered;
    /*font-size: 14px;*/
    font-weight: bold;
  }
  .list-item  .info .b {
    text-decoration: line-through;
    /*font-size: 14px;*/
    color: #999999;
    margin-left: 5px;
  }
  .list-item .price {
    position: absolute;
    bottom: 5px;
    left: 38px;
  }
</style>
