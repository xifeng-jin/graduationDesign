<template>
  <div class="Hswiper">
    <div class="tip">掌柜热卖 <span>广告</span></div>
    <swiper>
      <div class="swiper-slide" v-for="item in banners">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </div>
    </swiper>
  </div>
</template>

<script>
  import Swiper from "common/swiper/Swiper"
  export default {
    name: "HomeSwiper",
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Swiper
    }
  }
</script>

<style scoped>
  /*@import "swiper.css";*/
  .Hswiper {
    margin-top: 113px;
  }
  .Hswiper .tip {
    font-size: 18px;
    color: #444444;
    padding-bottom: 10px;
    border-bottom: 1px solid #eeeeee;
    font-weight: bold;
    margin-bottom: 15px;
    position: relative;
  }
  .Hswiper .tip span {
    position: absolute;
    right: 6px;
    top:5px;
    font-size: 12px;
    color: #FFE0F7;
    border: 1px solid #e8f2ff;
  }
  img {
    width: 100%;
    height: 100%;
  }
</style>
