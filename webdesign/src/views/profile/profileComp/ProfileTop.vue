<template>
  <div class="profile-top">
    <div class="left">
      <span class="a">我的淘宝</span>
      <span class="b">首页</span>
      <span class="c">账户设置</span>
      <span class="d">消息</span>
    </div>
    <div class="right">
      <input type="text" placeholder="衣服">
      <span>搜索</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProfileTop"
  }
</script>

<style scoped>
  .profile-top {
    display: flex;
    width: 100%;
    padding: 16px 50px;
    background: orangered;
    box-shadow: -1px 2px #ff2222 inset;
    cursor: pointer;

    position: relative;
  }
  .left {
    color: #FFFFFF;
  }
  .left span {
    font-size: 14px;
  }
  .left .a {
    font-size: 26px;
    font-weight: bold;
    margin-left: 40px;
    margin-right: 100px;
  }
  .left .b {
    margin-right: 60px;
  }
  .left .c {
    margin-right: 60px;
  }
  .left .b:hover ,.left .c:hover ,.left .d:hover {
    border-bottom: 1px solid #ffffee;
  }
  .left .b ,.left .c ,.left .d {
    padding-bottom: 5px;
  }
  .right {
    position: absolute;
    right: 80px;
    top: 20px;
    border: 1px solid #eeeeee;
    border-right: none;
  }
  .right input {
    border: none;
    outline-style: none;
    padding: 8px 0 7px 5px;
    width: 300px;
  }
  .right span {
    padding: 6px 17px 7px 15px;
    color: #FFFFFF;
    font-size: 14px;
    background: #999999;
  }
</style>
