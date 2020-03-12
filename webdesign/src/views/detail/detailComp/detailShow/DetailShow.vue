<template>
  <div class="detail-show">
    <div class="show" v-for="item in detailImage.Image">
      <div class="a">
        <img :src="item" alt="">
      </div>
    </div>
    <div class="last"><img :src="detailImage.lastImage" alt=""></div>
  </div>
</template>

<script>
  export default {
    name: "DetailShow",
    props: {
      detailImage: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .detail-show {
    margin: 20px 0 0 30px;
  }
  .show {
    width: 100%;
    height: 600px;
    margin-bottom: 20px;
  }
  .show .a {
    width: 100%;
    height: 600px;
  }
  .show img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
  .last {
    width: 100%;
    height: 200px;
  }
  .last img {
    width: 100%;
    height: 100%;
  }
</style>
