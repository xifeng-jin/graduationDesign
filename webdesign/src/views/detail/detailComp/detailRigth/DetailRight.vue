<template>
  <div class="detail-right">
    <div class="top">--------花样展示--------</div>
    <div class="swiper-container a" id="hostGraph1">
      <div class="swiper-wrapper">
        <div class="swiper-slide slides" v-for="item in verticalImg">
          <img :src="item.img" alt="">
        </div>
      </div>
      <!--<div class="swiper-button-prev p-btn"></div>-->
      <!--<div class="swiper-button-next n-btn"></div>-->
    </div>
  </div>
</template>

<script>
  import Swiper from "swiper"
  export default {
    name: "DetailRight",
    props: {
      verticalImg: {
        type:Array,
        default() {
          return []
        }
      }
    },
    mounted() {
      var mySwiper = new Swiper('#hostGraph1', {
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        direction: 'vertical',
        spaceBetween: 5,
        slidesPerView: 3,
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        //   hideOnClick: true, //点击slide时隐藏navigation
        // },
      })
    }
  }
</script>

<style scoped>
  @import "swiper.css";

  .detail-right {
    margin-left: 30px;
    border-left: 1px solid #E5E5E5;
    position: relative;
  }
  .top {
    color: #999999;
    font-size: 14px;
    margin-bottom: 10px;
    margin-left: 15px;
  }
  .swiper-container{
    height: 530px;
    text-align: center;
  }
  .slides img{
    width: 80%;
    height: 170px;
    border-radius: 15px;
  }
  .p-btn {
    position: absolute;
    left: 0;
    bottom: 0;
  }
</style>
