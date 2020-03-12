<template>
  <div class="goods-item" @click="itemClick">
    <img :src="showImage" alt="">
    <div class="top">
      <span class="price">￥{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
      <span class="stamp">包邮</span>
    </div>
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        imgLength: 0
      }
    },
    computed:{
      showImage() {
        return this.goodsItem.image || this.goodsItem.show.img
      }
    },
    methods: {
      imgLoad() {
        this.$bus.$emit('itemImgLoad')
        // if (++ this.imgLength === (this.goodsItem.image.length || this.goodsItem.show.img.length)) {
        //   console.log( 'haha' );
        //
        // }

        // console.log( this.$bus );
      },
      itemClick() {
        this.$router.push('/detail/' + this.goodsItem.iid);

      }
    }
  }
</script>

<style scoped>
  .goods-item {
    padding-bottom: 30px;

    width: 23%;
    position: relative;

    margin-bottom: 20px;
    cursor: pointer;
  }
  .goods-item:hover {
    border: 1px solid #ff1433;
  }

  .goods-item img {
    width: 100%;
    height: 80%;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    left:0;
    right: 0;
    top: 280px;

    overflow: hidden;
    /*text-align: center;*/
    padding-bottom: 5px;
  }
  .goods-info p {
    text-indent: 2em;
    color: #222222;
    /*overflow: hidden;*/
    /*text-overflow: ellipsis;*/
    /*white-space: nowrap;*/

    margin-bottom: 3px;
  }
  .top {
    position: relative;
  }
  .top .price {
    color: orangered;
    margin-right: 30px;
    font-size: 16px;
    font-weight: bold;
  }
  .top .collect {
    position: relative;
  }
  .top .collect:before {
    content: '';
    position: absolute;
    left: -15px;
    top: 3px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
  .top .stamp {
    color: #FFFFFF;
    padding: 1px 2px;
    background: orangered;
    font-size: 12px;

    position: absolute;
    top: 0;
    right: 5px;
  }
</style>
