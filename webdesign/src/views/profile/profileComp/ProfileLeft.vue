<template>
  <div class="profile-left">
    <div v-for="(item,index) in content"
         @click="change(index)"
         :class="{active: currentIndex === count[index]}">
      <span>{{item}}</span>
    </div>
    <!--<div :class="{active: currentIndex === 0 }" @click="change()"><span>全部功能</span></div>-->
    <!--<div :class="{active: currentIndex === 1 }" @click="change()"><span>我的购物车</span></div>-->
    <!--<div :class="{active: currentIndex === 2 }" @click="change()"><span>已买到的宝贝</span></div>-->
    <!--<div :class="{active: currentIndex === 3 }" @click="change()"><span>购买过的店铺</span></div>-->
    <!--<div :class="{active: currentIndex === 4 }" @click="change()"><span>我的发票</span></div>-->
    <!--<div :class="{active: currentIndex === 5 }" @click="change()"><span>我的积分</span></div>-->
    <!--<div :class="{active: currentIndex === 6 }" @click="change()"><span>评价管理</span></div>-->
    <!--<div :class="{active: currentIndex === 7 }" @click="change()"><span>我的足迹</span></div>-->
    <!--<div :class="{active: currentIndex === 8 }" @click="change()"><span>我的钱包</span></div>-->
  </div>
</template>

<script>
  export default {
    name: "ProfileLeft",
    data() {
      return {
        currentIndex: 0,
        content: ['我的界面','我的购物车','已买到的宝贝','购买过的店铺','我的发票','我的积分','评价管理','我的足迹','我的钱包'],
        count: [0,1,2,3,4,5,6,7,8]
      }
    },
    methods: {
      change(index) {
        this.currentIndex = index;

        switch (index) {
          case 0:
            this.$emit('jumpToTrack',index);
            break;
          case 1:
            break;
          case 2:
            break;
          case 3:
            break;
          case 4:
            break;
          case 5:
            break;
          case 6:
            break;
          case 7:
            this.$emit('jumpToTrack',index);
            break;
          case 8:
            break;
        }
      }
    }
  }
</script>

<style scoped>
  .profile-left {
    width: 100%;
    margin-top: 10px;
    cursor: pointer;
  }
  .active span{
    border-bottom: 1px solid #ff2222;
    color: #ff2222;
  }
  .profile-left div {
    color: #222222;
    font-size: 15px;
    padding: 7px 10px;
  }
  .profile-left div span:hover {
    border-bottom: 1px solid #ff2222;
    color: #ff2222;
  }
</style>
