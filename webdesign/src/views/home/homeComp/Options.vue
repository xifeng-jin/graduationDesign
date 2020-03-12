<template>
  <div class="options">
    <span class="left">所有宝贝</span>
    <span class="center">天猫</span>
    <span class="right">二手</span>
  </div>
</template>

<script>
  export default {
    name: "Options"
  }
</script>

<style scoped>
  .options {
    margin-top: 20px;
    border-bottom: 2px solid red;
  }
  .left {
    display: inline-block;
    padding: 10px 20px;
    background: #fe0000;
    color: #ffffee;
    font-size: 16px;
    cursor: pointer;
  }
  .center,.right {
    padding: 10px 15px;
    cursor: pointer;
    font-size: 16px;
  }
  .center:hover,.right:hover {
    color: #FFFFFF;
    background: #fe0000;
  }
</style>
