<template>
  <div class="sort">
    <div class="top">
      <div class="left">
        <span class="first">综合排序</span>
        <span class="second">销量</span>
        <span class="third">信用</span>
      </div>
      <div class="center">
        <span class="price">价格</span>
        <div class="col">
          <input type="text" placeholder="￥">-<input type="text" placeholder="￥">
        </div>
      </div>
      <div class="right">
        <div class="c">
          <span class="a">发货地</span>
          <span class="b">网格模式</span>
        </div>
        <div class="page">
          <span @click="sub"><</span> <span class="p">{{counter}}</span>页 <span @click="add">></span>
        </div>
      </div>
    </div>
    <div class="bottom">

    </div>
  </div>
</template>

<script>
  export default {
    name: "NewSort",
    data() {
      return {
        counter: 1
      }
    },
    methods: {
      add() {
        if (this.counter >= 1) {
          this.counter +=1;
          this.$emit('add')
        }
      },
      sub() {
        if (this.counter > 1) {
          this.counter -=1;
          this.$emit('sub')
        }
      }
    }
  }
</script>

<style scoped>
  .sort {
    margin: 10px 0 20px;
    color: #333333;
  }
  .top {
    display: flex;
    border: 1px solid #e5e5e5;
  }
  .top .left,.top .center {
    width: 25%;
    background: yellow;

  }
  .top .left .first {
    display: inline-block;
    padding: 10px 10px;
    background: #ffffee;
    border-right: 1px solid #e5e5e5;
    color: #ff2222;
    cursor: pointer;
  }
  .top .left .second,.top .left .third {
    padding: 10px 17px;
    background: #eeeeee;
    cursor: pointer;
  }
  .top .left .second:hover ,.top .left .third:hover {
    background: #ffffee;
    color: #ff2222;
  }
  .top .center .price{
    display: inline-block;
    padding: 10px 20px 10px 11px;
    margin-left: -2px;
    background: #eeeeee;
    position: relative;
  }
  .top .center .price:after {
    content: '';
    position: absolute;
    left: 48px;
    top: 16px;
    width: 6px;
    height: 6px;
    border-right: 1px solid #9c9c9c ;
    border-top: 1px solid #9c9c9c;
    transform: rotate(135deg);
  }
  .top .center {
    position: relative;
    background: #eeeeee;
  }
  .top .center .col {
    position: absolute;
    top: 10px;
    left: 70px;
  }
  .top .center input {
    width: 50px;
  }
  .top .right {
    width: 50%;
    background: #eeeeee;
    position: relative;
  }
  .top .right .c {
    position: absolute;
    top: 10px;
    left: 240px;
    font-size: 14px;
    cursor: pointer;
  }
  .top .right .c .b {
    margin-left: 20px;
  }
  .top .right .c .b:hover,.top .right .c .a:hover {
    color: #ff1433;
  }
  .top .right .page {
    position: absolute;
    right: 6px;
    top: 9px;
    color: #444444;
    font-size: 16px;

    cursor: pointer;
  }
  .top .right .page .p {

  }


</style>
