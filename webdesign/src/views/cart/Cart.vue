<template>
  <div class="cart">
    <div class="goods-lis">
      <cart-top></cart-top>
      <cart-list></cart-list>
    </div>
    <div class="other-goods">
      <hot-sell :goods="hotGoods" @down="pageDown"></hot-sell>
    </div>
    <div class="cart-bottom">
      <cart-bottom></cart-bottom>
    </div>
  </div>
</template>

<script>
  import CartTop from "./cartComp/CartTop"
  import CartList from  "./cartComp/CartList"
  import CartBottom from "./cartComp/CartBottom"

  import HotSell from "../home/homeComp/HotSell"

  import {getHomeGoods} from "network/home"

  export default {
    name: "Cart",
    data() {
      return {
        page: 1,
        hotGoods: []
      }
    },
    components: {
      CartTop,
      CartList,
      HotSell,
      CartBottom
    },
    computed: {

    },
    methods: {
      _getSellGoods(page) {
        getHomeGoods('sell',page).then(res => {
          var list = res.data.list;

          // list = list.slice(0,list.length - 2);
          this.hotGoods = list.slice(0,5);
          // console.log(this.hotGoods)
          // console.log( this.pops );
        })
      },
      pageDown() {
        this.page += 1
      }
    },
    created() {
      this._getSellGoods(this.page)
    }
  }
</script>

<style scoped>
  .other-goods {
    margin-top: 40px;
  }
  .cart-bottom {
    margin-top: 40px;
  }
</style>
