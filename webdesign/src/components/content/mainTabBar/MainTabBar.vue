<template>
  <tab-bar class="tab_bar">
    <tab-bar-item>
      <div slot="left" class="a1_left">
        <span class="a">中国大陆</span>
        <span class="b">t_1486728770922_0489</span>
      </div>
      <div slot="center" class="a2_center">消息</div>
      <div slot="right" class="a3_right">手机面板</div>
    </tab-bar-item>
    <tab-bar-item>
      <div class="b1_left" slot="left" @click="homeClick">店铺首页</div>
      <div class="b2_center" slot="center" @click="profileClick">我的界面</div>
      <div class="b3_right" slot="right" @click="cartClick">购物车</div>
      <div class="b4_other" slot="other" @click="categoryClick">商品收藏</div>
    </tab-bar-item>
    <tab-bar-item>
      <div class="c1_left" slot="left"><span></span>卖家中心</div>
      <div class="c2_center" slot="center">联系客服</div>
      <div class="c3_right" slot="right">网站导航</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "common/tabbar/TabBar"
  import TabBarItem from "common/tabbar/TabBarItem"
  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    },
    methods: {
      homeClick() {
        this.$router.push('/home')
      },
      profileClick() {
        this.$router.replace('/profile');
        // alert('jjj')
      },
      cartClick() {
        this.$router.push('/cart')
      },
      categoryClick() {
        this.$router.push('/category')
      }
    }
  }
</script>

<style scoped>
  .tab_bar {
    cursor: pointer;
    z-index: 2;
  }
  .a1_left {
    margin-left: 90px;

  }
  .a1_left> .b {
    width: 100px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-left: 15px;
  }
  .a1_left> .b:hover {
    color: #ff5777;
  }
  .a1_left .a {
    position: relative;
  }
  .a1_left:after {
    content: '';
    position: absolute;
    left: 140px;
    top: 12px;
    width: 6px;
    height: 6px;
    border-right: 1px solid #9c9c9c ;
    border-top: 1px solid #9c9c9c;
    transform: rotate(135deg);
  }
  .a2_center {
    margin-left:50px;
    position: relative;
  }
  .a2_center:after {
    content: '';
    position: absolute;
    left: 32px;
    top: 12px;
    width: 6px;
    height: 6px;
    border-right: 1px solid #9c9c9c ;
    border-top: 1px solid #9c9c9c;
    transform: rotate(135deg);
  }
  .a3_right {
    margin-left: 35px;
  }

  .b2_center,.b3_right {
    position: relative;
  }
  .b2_center:after,.b3_right:after {
    content: '';
    position: absolute;
    top: 12px;
    width: 6px;
    height: 6px;
    border-right: 1px solid #9c9c9c ;
    border-top: 1px solid #9c9c9c;
    transform: rotate(135deg);
  }
  .b2_center:after {
    left: 55px;
  }
  .b3_right:after {
    left: 42px;
  }
  .b1_left {
    margin-left: 150px;
  }
  .b2_center {
    margin-left: 20px;
  }
  .b3_right {
    margin-left: 40px;
  }
  .b4_other {
    margin-left: 40px;
  }

  .c1_left,.c2_center,.c3_right {
    position: relative;
  }
  .c1_left:after,.c2_center:after,.c3_right:after {
    content: '';
    position: absolute;
    top: 12px;
    width: 6px;
    height: 6px;
    border-right: 1px solid #9c9c9c ;
    border-top: 1px solid #9c9c9c;
    transform: rotate(135deg);
  }
  .c1_left:after {
    left: 90px;
  }
  .c1_left {
    margin-left: 5px;
  }
  .c1_left span {
    width: 2px;
    height: 20px;
    border-left: 1px solid #9c9c9c;
    margin-right: 30px;
  }
  .c2_center:after {
    left: 60px;
  }
  .c2_center {
    margin-left: 30px;
  }
  .c3_right:after {
    left: 60px;
  }
  .c3_right {
    margin-left: 30px;
  }

</style>
