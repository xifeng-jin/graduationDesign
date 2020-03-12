<template>
  <div id="home">
    <div class="h_left">
      <search></search>
      <options></options>
      <sort></sort>
      <new-sort @add="addCounter" @sub="subCounter"></new-sort>
      <goods-list :goods="pops"></goods-list>
    </div>
    <div class="h_right">
      <home-swiper :banners="banners"></home-swiper>
      <broad-side :goods="news"></broad-side>
    </div>
    <div class="bottom">
      <hot-sell :goods="hotGoods" @down="pageDown"></hot-sell>
      <home-bottom></home-bottom>
    </div>
  </div>
</template>

<script>
  import Search from "./homeComp/Search"
  import Options from "./homeComp/Options"
  import Sort from "./homeComp/Sort"
  import NewSort from "./homeComp/NewSort"
  import HomeSwiper from "./homeComp/HomeSwiper"
  import BroadSide from "./homeComp/BroadSide"
  import HotSell from "./homeComp/HotSell"
  import HomeBottom from "./homeComp/HomeBottom"

  import GoodsList from "content/goods/GoodsList"

  import {getHomeMultidata,getHomeGoods} from "network/home"
  export default {
    name: "Home",
    data() {
      return {
        banners:[],
        pops:[],
        popPage:1,
        newPage:1,
        sellPage:1,
        news: [],
        hotGoods:[]
      }
    },
    components: {
      Search,
      Options,
      Sort,
      NewSort,
      HomeSwiper,
      BroadSide,
      HotSell,
      HomeBottom,

      GoodsList
    },
    created() {
      this._getHomeMultidata();
      this._getPopGoods(this.popPage);
      this._getNewGoods(this.newPage);
      this._getSellGoods(this.sellPage)
    },
    methods: {
      /**
        获取数据的方法
       */
      _getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list;
          // console.log( this.banners);
        });
      },
      _getNewGoods(page) {
        getHomeGoods('new',page).then(res => {
          var list = res.data.list;
          // console.log( list );
          var length = Math.ceil(this.pops.length / 4);
          this.news = list.slice(0,length);
          // console.log( this.hotGoods );
        })
      },
      _getPopGoods(page) {
        getHomeGoods('pop',page).then(res => {
          // var list = res.data.list;
          // list = list.slice(0,list.length - 2);
          this.pops = res.data.list;
          // console.log( this.pops );
        })
      },
      _getSellGoods(page) {
        getHomeGoods('sell',page).then(res => {
          var list = res.data.list;

          // list = list.slice(0,list.length - 2);
          this.hotGoods = list.slice(0,5);
          // console.log(this.hotGoods)
          // console.log( this.pops );
        })
      },
    /**
      事件方法
     */
      addCounter() {
        this.popPage += 1;
        this._getPopGoods(this.page)
      },
      subCounter() {
        this.popPage -= 1;
        this._getPopGoods(this.page)
      },
      pageDown() {
        this.sellPage +=1;
        this._getSellGoods(this.sellPage)
      }
    }
  }
</script>

<style scoped>
  #home {
    position: relative;
  }
  .h_left {
    width: 75%;
    /*background: #00ff00;*/
  }
  .h_right {
    position: absolute;
    top: 0;
    right: -10px;
    width: 25%;
    /*background: #00ffff;*/
  }
  .bottom {
    width: 100%;
    margin-top: 30px;
  }
</style>
