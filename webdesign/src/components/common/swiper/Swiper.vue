<template>
  <div class="swiper">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <slot></slot>
      </div>
      <div class="swiper-button-prev"></div><!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
      <div class="swiper-button-next"></div><!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
  import Swiper from "swiper"
  export default {
    name: "Swiper",
    mounted() {
      var mySwiper = new Swiper('.swiper-container', {
        autoplay: true,//可选选项，自动滑动
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })
    }
  }
</script>

<style scoped>
  @import "swiper.css";

  .swiper-container{
    height: 200px;
  }

</style>
