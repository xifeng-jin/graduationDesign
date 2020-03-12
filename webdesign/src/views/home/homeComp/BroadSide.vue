<template>
  <div class="goods">
    <div class="goods-item" v-for="item in goods" @click="itemClick">
      <a :href="item.link">
        <img :src="item.show.img" alt="">
      </a>
      <div class="info">
        <span class="price">{{item.orgPrice}}</span>
        <span class="count">销量：{{item.cfav}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BroadSide",
    props: {
      goods: {
        type:Array,
        default() {
          return []
        }
      }
    },
    methods: {
      itemClick() {
        this.$router.push('/detail/' + this.goodsItem.iid);
      }
    }
  }
</script>

<style scoped>
  .goods {
    margin-top: 20px;
  }
  .goods-item {
    width: 100%;
    border: 1px solid #E5E5E5;
    margin-bottom: 10px;
  }
  .goods-item:hover {
    border: 1px solid #ff1433;
  }
  .goods-item img {
    display: inline-block;
    width: 100%;
    height: 300px;
  }
  .goods-item .info {
    padding: 5px 0  5px 5px;
    position: relative;
  }
  .goods-item .info .price {
    color: orangered;
    font-size: 18px;
    font-weight: bold;
  }
  .goods-item .info .count {
    position: absolute;
    right: 5px;
    top: 5px;
    font-size: 14px;
    color: #666666;
  }
</style>
