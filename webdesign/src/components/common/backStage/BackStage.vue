<template>
  <div class="back-stage" v-show="stageShow">
    <div class="shop">解忧杂货铺后台管理</div>
    <div class="top"><span>欢迎管理员：充满智慧与帅气的你</span></div>
    <div class="content">
      <div class="a">数据统计</div>
      <div class="nav">
        <span v-for="item in stageNav">{{item}}</span>
      </div>
      <div class="d-data"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BackStage",
    data() {
      return {
        stageShow: false,
        stageNav: ['宝贝','title','价格','数量','评论']
      }
    },
    methods: {
      stageShow() {
        this.stageShow = true
      },
      stageHidden() {
        this.stageShow = false
      }
    }
  }
</script>

<style scoped>
  .back-stage {
    width: 70%;
  }
  .shop {
    padding: 5px 10px;
    background: #FFFFFF;
    color: #222222;
    font-weight: bold;
  }
  .top {
    width: 100%;
    height: 50px;
    line-height: 50px;
  }
  .top span {
    display: inline-block;
    padding: 15px;
    width: 100%;
    background: #E5E5E5;
  }
</style>
