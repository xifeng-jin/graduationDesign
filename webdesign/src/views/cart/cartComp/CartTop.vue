<template>
  <div class="cart-top">
    <div class="left">
      <img src="~assets/img/png/bird2.png" alt="">
      <span>购物车</span>
    </div>
    <div class="right">
      <div class="p">
        <span class="a">宝贝</span>
        <input type="text" placeholder="搜索物品">
        <span class="b">搜索</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CartTop"
  }
</script>

<style scoped>
  .cart-top {
    display: flex;
    margin-top: -20px;
    /*border-bottom: 1px solid red;*/
  }
  .left {
    width: 40%;
    position: relative;
  }
  .left img {
    margin-top: -15px;
    margin-left: 50px;
    width: 180px;
    height: 145px;
  }
  .left span {
    font-size: 22px;
    color: #444444;
    font-weight: bold;
    position: absolute;
    top: 45px;
    left: 230px;
  }
  .right {
    width: 60%;
    position: absolute;
  }
  .right .p {
    position: absolute;
    right: -200px;
    top: 40px;
    padding: 3px 0 1px 0;
    border: 2px solid orangered;
  }
  .right .p .a {
    padding: 5px 25px;
    background: #E5E5E5;
    font-size: 14px;
    color: #444444;
  }
  .right .p input {
    padding: 5px 0 5px 10px;
    outline-style: none;
    border: none;
    width: 350px;
  }
  .right .p .b {
    padding: 5px 25px;
    color: #FFFFFF;
    background: orangered;
    letter-spacing: 3px;
    font-weight: bold;
  }
</style>
