<template>
  <div class="profile">
    <div class="top"><profile-top></profile-top></div>
    <div class="bottom">
      <div class="left">
        <profile-left @jumpToTrack="jumpToTrack"></profile-left>
      </div>
      <div id="p-center0">
        <profile-center  :class="{active: currentIndex !== 0}"></profile-center>
        <profile-center7  :class="{active: currentIndex !== 7}"></profile-center7>
      </div>
      <div class="right">
        <profile-right></profile-right>
      </div>
    </div>
  </div>
</template>

<script>
  import ProfileTop from "./profileComp/ProfileTop"
  import ProfileLeft from  "./profileComp/ProfileLeft"

  import ProfileCenter from "./profileComp/ProfileCenter"
  import ProfileCenter7 from "./profileComp/ProfileCenter7"

  import ProfileRight from "./profileComp/ProfileRight"

  // import {getHomeGoods} from "network/home"


  export default {
    name: "Profile",
    data() {
      return {

        sellGoods: [],
        currentIndex: 0,
        showCenter: true
      }
    },
    components: {
      ProfileTop,
      ProfileLeft,
      ProfileCenter,
      ProfileRight,
      ProfileCenter7
    },
    methods: {
      jumpToTrack(index) {
        // this.showCenter = !this.showCenter;
        this.currentIndex = index;
        // console.log( this.currentIndex );
        console.log( 'jjj' );
      }
    }
  }
</script>

<style scoped>
  .top {
    width: 106%;
    margin-left: -86px;
    margin-top: -6px;
  }
  .bottom {
    width: 100%;
    display: flex;
    margin-top: 20px;
  }
  .bottom .left {
    width: 13%;
  }
  .bottom #p-center0 {
    width: 67%;
    display: block;
  }
  .bottom .right {
    width: 20%;
  }
  .active {
    display: none;
  }
</style>
