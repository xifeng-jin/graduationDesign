<template>
  <div class="d_swiper">
    <div class="swiper-container a" id="hostGraph">
      <div class="swiper-wrapper">
        <div class="swiper-slide slides" v-for="item in slideImg">
          <img :src="item" alt="">
        </div>
      </div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      <div class="swiper-pagination"></div>
    </div>


    <div class="swiper-container" id="thumbs">
      <div class="swiper-wrapper">
        <div class="swiper-slide t_slides" v-for="item in slideImg">
          <img :src="item" alt="">
        </div>
      </div>
    </div>
    <div class="tip">
      <span class="coll">收藏</span>
      <span class="report">举报</span>
    </div>

  </div>
</template>

<script>
  import Swiper from "swiper"
  export default {
    name: "DetailSwiper",
    props: {
      slideImg: {
        type:Array,
        default() {
          return []
        }
      }
    },
    components: {

    },
    mounted() {
      var mySwiper = new Swiper('#hostGraph', {
        autoplay: true,//可选选项，
        spaceBetween: 10,
        thumbs: {
          swiper: {
            el: '#thumbs',
            spaceBetween:10,
            slidesPerView: 5,
            watchSlidesVisibility: true
          },
          slideThumbActiveClass: "swiper-slide-thumb-active",
          thumbsContainerClass: "swiper-container-thumbs"
        },
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

  .d_swiper {
    margin-right: 20px;
    position: relative;
  }
  .a {
    border:1px solid orangered;
  }
  .swiper-container{
    height: 400px;
  }
  .slides img{
    width: 100%;
    height: 100%;
    display: block;
  }
  .swiper-container-thumbs .swiper-slide-thumb-active img{
    opacity: 1;
    border: 1px solid orangered;
  }
  .swiper-container-thumbs img{
    opacity: .5;
  }
  .t_slides {
    width: 20%;
    height: 20%;
    margin-top: 10px;
  }
  .t_slides img {
    width: 100%;
    height: 100%;
  }
  .tip {
    position: absolute;
    left: 10px;
    bottom: 270px;
    color: #888888;
    font-size: 14px;
  }
  .tip .coll {
    margin-right: 280px;
  }
</style>
