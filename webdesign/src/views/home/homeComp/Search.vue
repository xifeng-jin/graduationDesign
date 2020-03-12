<template>
  <div class="search">
    <div class="img">
      <img src="~assets/local/timg.jpg" alt="">
    </div>
    <div class="right">
      <span class="baby">宝贝</span>
      <input type="text" placeholder="请输入文字">
      <span class="sou">搜索</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Search"
  }
</script>

<style scoped>
  .search {
    position: relative;
  }
  .img {
    width: 104px;
    margin-top: 20px;
  }
  .right {
    border: 2px solid #ff1433;
    position: absolute;
    right: 0;
    top: 5px;
  }
  .right .sou {
    display: inline-block;
    background:orangered;
    padding: 7px 18px 7px 25px;
    color: #FFFFFF;
    letter-spacing: 5px;
  }
  .right .baby {
    display: inline-block;
    padding: 11px 0 8px 10px;
    width: 60px;
    background: #eeeeee;
    font-size: 12px;
    position: relative;
  }
  .right .baby:after {
    content: '';
    position: absolute;
    left: 40px;
    top: 12px;
    width: 6px;
    height: 6px;
    border-right: 1px solid #9c9c9c ;
    border-top: 1px solid #9c9c9c;
    transform: rotate(135deg);
  }
  .right input {
    outline-style: none;
    border: none;
    padding: 12px 0 8px 5px ;
    width: 450px;
  }
</style>
