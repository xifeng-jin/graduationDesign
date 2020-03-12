<template>
  <div class="detail-tip">
    <div class="d_one">
      <div class="top">@{{tipInfo.shopName}}</div>
      <div class="bottom">
        <div class="logo">
          <img :src="tipInfo.shopLogo" alt="">
          <span>{{tipInfo.year}}</span>
        </div>
        <div class="one_a">
          <div class="a" v-for="item in tipInfo.score">
            <div class="a1">{{item.name}}</div>
            <div class="a2">{{item.score}}</div>
          </div>
        </div>
        <div class="shop">
          <span class="s_a">进店逛逛</span>
          <span class="s_b">收藏店铺</span>
        </div>
      </div>
    </div>
    <div class="d_two"></div>
    <div class="d_three"></div>
    <div class="d_four"></div>
  </div>
</template>

<script>
  export default {
    name: "DetailTip",
    props: {
      tipInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .d_one {
    border: 1px solid #e8f2ff;
  }
  .d_one .top {
    padding: 15px 0 15px 10px;
    font-size: 14px;
    font-weight: bold;
    background: lightblue;
  }
  .d_one .logo {
    width: 100%;
    margin-top: 10px;
    position: relative;
  }
  .d_one .logo img {
    width: 25px;
    height: 25px;
    margin-left: 25px;
    margin-right: 10px;
    border: 1px solid #e8f2ff;
    padding: 2px;
  }
  .d_one .logo span {
    color: #666666;
    position: absolute;
    top: 5px;
    left: 65px;
  }
  .d_one .one_a {
    display: flex;
    color: #666666;
    font-size: 14px;
    margin-top: 20px;
    text-align: center;
    margin-left:20px;
  }
  .d_one .one_a .a {
    margin-right: 10px;
  }
  .d_one .one_a .a .a1 {
    font-size: 12px;
  }
  .d_one .one_a .a .a2 {
    margin-top: 5px;
    color: #ff1433;
    font-weight: bold;
  }
  .d_one .shop {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .d_one .shop span{
    padding: 5px 15px;
    background: rgba(0,0,0,0.5);
    color: #ffffee;
    font-size: 14px;
  }
  .d_one .shop .s_a {
    margin: 0 5px 0 13px;
  }
  .d_one .shop .s_b {
    background: rgb(245,245,245);
    color: #333333;
  }
</style>
