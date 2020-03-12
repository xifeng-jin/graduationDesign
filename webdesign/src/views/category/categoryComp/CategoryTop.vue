<template>
  <div class="category-top">
    <div class="left">
      <span class="a">朱氏店铺</span>
      <span class="b">收藏夹</span>
    </div>
    <div class="right">
      <!--<img src="~assets/img/png/bird2.png" alt="">-->
    </div>
  </div>
</template>

<script>

  export default {
    name: "CategoryTop",
  }
</script>

<style scoped>
  .category-top {
    display: flex;
    width: 114%;
    height: 80px;
    margin-left: -82px;
    background: rgb(255,68,0);
    margin-top: -5px;
    position: relative;
  }
  .left {
    margin-left: 80px;
  }
  .left span {
    display: inline-block;
    line-height: 80px;
    color: #FFFFFF;
  }
  .left .a {
    font-size: 30px;
    font-weight: bold;
    margin-right: 10px;
  }
  .left .b {
    font-size: 20px;
  }
  .right {
    position: absolute;
    right: 50px;
    top: -40px;
  }
</style>
