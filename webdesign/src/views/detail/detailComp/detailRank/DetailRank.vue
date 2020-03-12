<template>
  <div class="rank">
    <div class="r_top">
      <div class="a">宝贝排行榜</div>
      <div class="b">
        <span :class="{active : isShow}" @click="change">销售量</span>
        <span :class="{active: !isShow}" @click="change">收藏数</span>
      </div>
    </div>
    <div class="content">
      <div class="goods" v-for="item in tempLeftImg">
        <div class="a">
          <img :src="item.image" alt="">
        </div>
        <div class="b">
          <div class="title"><span>{{item.title}}</span></div>
          <div class="price">￥{{item.price}}</div>
          <div class="cfav"><span>收藏：{{item.cfav}}</span></div>
        </div>
      </div>
      <div class="tip"><span @click="showLess">收起商品展示</span></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailRank",
    props: {
      rankLeftImg: {
        type: Array,
        default() {
          return []
        }
      },
      rankRightImg: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        isShow: true,
        tempLeftImg: this.rankLeftImg
      }
    },
    computed: {

    },
    methods: {
      change() {
        this.isShow = !this.isShow;
        // 切换展示列表
        if (!this.isShow) {
          this.tempLeftImg = this.rankRightImg
        } else {
          this.tempLeftImg = this.rankLeftImg
        }

        // alert('jjj')
      },
      showLess() {
        var temp = this.tempLeftImg.slice(0,6);
        // alert(temp)
        this.tempLeftImg = temp
      }
    }
  }
</script>

<style scoped>
  .rank {
    margin-top: 20px;
    cursor: pointer;
    border: 1px solid #E5E5E5;
  }
  .r_top .a {
    background: rgba(0,0,0,0.8);
    color: #FFFFFF;
    padding: 5px 0 5px 10px;
    font-size: 14px;
  }
  .r_top .b span {
    display: inline-block;
    width:50%;
    text-align: center;
    padding: 10px 0;
    color: #666666;
    background: #eeeeee;
  }
  .r_top .b .active {
    background: #FFFFFF;
  }
  .goods {
    width: 90%;
    padding: 10px;
    display: flex;
    border-bottom: 1px solid #E5E5E5;
  }
  .goods .a {
    width: 30%;
  }
  .goods .a img {
    width: 50px;
    height: 50px;
    margin-right: 5px;
  }
  .goods .b {
    width: 70%;
  }
  .goods .b .title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    color: #666666;
  }
  .goods .b .title span:hover {
    border-bottom: 1px solid #ff0080;
  }
  .goods .b .price {
    color: #ff1433;
    font-size: 16px;
    font-weight: bold;
  }
  .goods .b .cfav {
    font-size: 14px;
    color: #666666;
  }
  .goods .b .cfav span:hover {
    border-bottom: 1px solid #ff0080;
    color: #ff0080;
  }
  .content .tip {
    padding: 10px;
    margin-top: 20px;
    text-align: center;
  }
  .content .tip span {
    padding: 5px 10px;
    background: #eeeeee;
    color: #999999;
    font-size: 15px;
    border-radius: 10px;
  }
</style>
