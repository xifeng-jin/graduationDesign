<template>
  <div class="goods-list">
    <div class="top">
      <!--<img src="" alt="">-->
      <!--<img src="" alt="">-->
      <img :src="item.logo" alt="">
      <span>店铺：{{item.name}}</span>
      <span class="sell">{{item.sell}}</span>
    </div>
    <div class="bottom">
      <check-button :is-checked="item.checked" @click.native="checkItem"></check-button>
      <div class="a">
        <img :src="item.img" alt="">
      </div>
      <div class="b">
        <div class="p1">{{item.title}}</div>
        <div class="p2">2020毕业日</div>
      </div>
      <div class="c">
        <div class="color">颜色：{{item.color}}</div>
        <div class="size">尺寸：{{item.size}}</div>
      </div>
      <div class="d">
        <div class="o">{{item.oldPrice}}</div>
        <div class="n">{{item.newPrice}}</div>
      </div>
      <div class="e">
        <span class="sub">X</span>
        <span class="count">{{item.count}}</span>
      </div>
      <div class="f">
        <div class="coll" @click="CollectClick">移入收藏夹</div>
        <div class="dele" @click="deleteGoods">删除</div>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckButton from "./CheckButton"
  export default {
    name: "CartListItem",
    props: {
      item: {
        type: Object,
        default() {
          return {}
        }
      },
      index: {
        type:Number,
        default: 0
      }
    },
    components: {
      CheckButton
    },
    methods: {
      checkItem() {
        this.item.checked = !this.item.checked
      },
      deleteGoods() {
        this.$emit('deleteItem',this.index)
      },
      CollectClick() {
        this.$store.dispatch('addCollect',this.item).then(res => {
          this.$toast.show(res,1000)
        })
      }
    }
  }
</script>

<style scoped>
  .goods-list .top {
    width: 600px;
    position: relative;
  }
  .goods-list .top img {
    width: 60px;
    height: 50px;
    margin-left: 15px;
    margin-top: -10px;
  }
  .goods-list .top span {
    color: #444444;
    font-size: 14px;
    position: absolute;
    top: 5px;
    left: 80px;
  }
  .goods-list .top .sell {
    padding: 1px 6px;
    background: #ff2222;
    border-radius: 5px;
    color: #FFFFFF;
    letter-spacing: 2px;
    position: absolute;
    top: 5px;
    left: 250px;
  }
  .goods-list .bottom {
    margin-top: -5px;
    display: flex;
    padding: 20px 30px;
    background: rgb(250,248,248);
    border: 1px solid #e8f2ff;
    margin-bottom: 30px;

    color: #444444;
    font-size: 14px;
    cursor: pointer;
  }
  .goods-list .bottom .a img {
    width: 90px;
    height: 90px;
    margin-right: 5px;
  }
  .goods-list .bottom .b {
    width: 250px;
    text-indent: 1em;
  }
  .goods-list .bottom .b {
    margin-right: 100px;
  }
  .goods-list .bottom .b .p1 {
    color: #333333;
  }
  .goods-list .bottom .b .p2 {
    width: 100px;
    padding: 3px 0;
    border-radius: 5px;
    margin-top: 5px;
    font-weight: bold;
    color: #FFFFFF;
    background: #ff2222;
  }
  .goods-list .bottom .c {
    color: #999999;
    margin-right: 60px;
  }
  .goods-list .bottom .d {
    font-size: 16px;
    color: #000;
    margin-right: 60px;
  }
  .goods-list .bottom .d .o {
    color: #999999;
    text-decoration: line-through;
    /*margin-bottom: 10px;*/
  }
  .goods-list .bottom .d .n {
    font-weight: bold;
  }
  .goods-list .bottom .e {
    margin-right: 60px;
    color: #ff2222;
  }
  .goods-list .bottom .e span{
    /*padding:5px ;*/
    /*background: #eeeeee;*/
  }
  .goods-list .bottom .e .count {
    /*border: 1px solid #999999;*/
    /*background: #ffffee;*/
    font-weight: bold;
    font-size: 20px;

    padding: 5px 10px;
  }
  .goods-list .bottom .f {
    color: #444444;
  }
  .goods-list .bottom .f div:hover {
    text-decoration: underline;
  }
  .goods-list .bottom .f .dele {
    margin-top: 5px;
  }
</style>
