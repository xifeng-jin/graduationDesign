<template>
  <div class="cart-list">
    <div class="top-bar">
      <div class="left">
        <span :class="{active: isShow}"
              @click="change">全部商品 {{totalLength}}</span>
        <span :class="{active: !isShow}" @click="change">选中商品 {{checkGoods}}</span>
      </div>
      <div class="right">
        <span>已选商品(不含运费)：</span>
        <span class="b1">{{totalPrice}}</span>
        <span class="b2">结算</span>
      </div>
    </div>
    <transition-group>
    <div class="goods-list" v-for="(item,index) in cartList2" :key="index">
      <cart-list-item :item="item"
                      :index="index"
                      @deleteItem="deleteItem"></cart-list-item>
    </div>
  </transition-group>
    <div class="buy-goods">
      <check-button class="check-button"
                    @click.native="checkAll"
                    :is-checked="isSelectAll"></check-button>
      <span class="a1">全选</span>
      <span class="a2">删除</span>
      <span class="a3">分享</span>
      <span class="a4">已选中商品:</span>
      <span class="a5">{{checkGoods}}</span>
      <span class="a6">合计:</span>
      <span class="a7">{{totalPrice}}</span>
      <span class="a8" @click="calculateGoods">结算</span>
    </div>
  </div>
</template>

<script>

  import {mapGetters} from "vuex"
  import CheckButton from "./CheckButton"

  import CartListItem from "./CartListItem"

  export default {
    name: "CartList",
    props: {

    },
    data() {
      return {
        isShow: true,
        cartList2: this.$store.state.cartList
      }
    },
    methods: {
      change() {
        this.isShow = !this.isShow;
        // this.filterList();
        console.log(  );
      },
      checkAll() {
        var cartList = this.$store.state.cartList;
        if (this.isSelectAll) {
          cartList.forEach(item => item.checked = false)
        } else  {
          cartList.forEach(item => item.checked = true)
        }
      },
      deleteItem(index) {
        //删除物品
        this.cartList2.splice(index,1);
        // console.log( list );
      },
      calculateGoods() {
        // var cartList = this.$store.state.cartList;
        var obGoods = this.cartList2.filter(item => item.checked);
        // console.log(cartList,obGoods);
        this.$store.dispatch('addObligation',obGoods).then(res => {
          this.$toast.show(res,1500)
        });


        // var shopGoods = this.$store.state.shopGoods;
        // this.cartList2 = this.cartList2.filter(item => {
        //   console.log( obGoods.includes( item ) );
        //   return obGoods.includes(item)
        // });
        // console.log( this.cartList2 );

        this.$router.push('/shop')

      }
    },
    computed: {
      ...mapGetters(['cartLength','cartList','filterList']),
      isSelectAll() {
        //查找是否存在已经添加购物车的item却没有选中的个数，如果有，那就取非返回
        if (this.cartList2.length === 0) return false;
        // return !(this.$store.state.cartList.filter(item => !item.checked).length)
        //使用find一旦查找到就停止，性能更高点，注意使用两个“！”的妙用,find函数只要找到符合条件的就返回true，
        // 但这里若是找到了，则不能选中
        return !this.cartList2.find(item => !item.checked)
      },
      checkGoods() {
        // var cartList = this.$store.state.cartList;
        var list = this.cartList2.filter(item => item.checked);
        return list.length
      },
      totalPrice() {
        return '￥' + this.cartList2.filter(item => {
          return item.checked
        }).reduce((preValue,item) => {
          return preValue + item.newPrice * item.count
        },0).toFixed(2)
      },
      totalLength() {
        // var cartList = this.$store.state.cartList;
        return this.cartList2.filter(item => {
          return item.checked
        }).reduce((preValue,item) => {
          return preValue + item.count
        },0)
      }
    },
    components: {
      CartListItem,
      CheckButton
    }
  }
</script>

<style scoped>
  .cart-list {
    width: 80%;
    /*border-top: 1px solid forestgreen;*/
    /*margin-top: -80px;*/
    margin-left: 80px;
  }
  .top-bar {
    display: flex;
    border-bottom: 1px solid #eeeeee;
    margin-bottom: 20px;
    cursor: pointer;
  }
  .top-bar .left {
    padding: 10px 0;
  }
  .top-bar .left span{
    padding: 0 20px 10px;
    font-size: 18px;
    font-weight: bold;
  }
  .top-bar .left span:nth-child(1) {
    border-right: 2px solid #eeeeee;
  }
  .top-bar .right {
    color: #444444;
    font-size: 14px;
    margin-left: 400px;
    position: relative;
    right: 0;
    top: 12px;
  }
  .top-bar .right .b1 {
    color: #ff0000;
    font-weight: bold;
    margin-right: 25px;
  }
  .top-bar .right .b2 {
    color: #FFFFFF;
    padding: 4px 13px;
    background: #999999;
  }
  .active {
    border-bottom: 2px solid orangered;
    color: orangered;
  }
  .buy-goods {
    position: relative;
    margin-top: 15px;
    padding: 10px 5px;
    background: #E5E5E5;
    color: #333;
    font-size: 14px;

    cursor: pointer;
  }
  .buy-goods .a1 {
    margin-right: 20px;
    margin-left: 30px;
  }
  .buy-goods .a2 {
    margin-right: 20px;
  }
  .buy-goods .a3 {
    margin-right: 460px;
  }
  .buy-goods .a4 {
    margin-right: 5px;
  }
  .buy-goods .a5 {
    margin-right: 40px;
    color: #ff0000;
  }
  .buy-goods .a6 {
    margin-right: 5px;
  }
  .buy-goods .a7 {
    margin-right: 20px;
    color: #ff0000;
  }
  .buy-goods .a8 {
    background: #999999;
    padding: 10px 22px;
    color: #ffffee;
    font-weight: bold;
  }
  .check-button {
    position: absolute;
    top: -20px;
    left: 22px;
  }

  .v-enter,.v-leave-to {
    opacity: 0;
    transform: translateY(20px);
  }
  .v-leave-active {
    position: absolute;
  }
  .goods-list {
    transition: all 1s;
  }
</style>
