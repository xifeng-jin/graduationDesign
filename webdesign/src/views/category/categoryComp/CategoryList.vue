<template>
  <div class="category-list">
    <div class="top">
      <span class="a">全部宝贝</span>
      <span class="b">{{collectLength}}</span>
    </div>
    <div class="c-list">
      <div class="c-item" v-for="item in collectList">
        <category-list-item :item="item"></category-list-item>
      </div>
    </div>

    <div class="bottom">
      <hot-sell :goods="hotGoods" @down="pageDown"></hot-sell>
    </div>
  </div>
</template>

<script>
  import HotSell from "../../home/homeComp/HotSell"

  import {getHomeGoods} from "network/home"

  import {mapGetters} from "vuex"

  import CategoryListItem from "./CategoryListItem"

  export default {
    name: "CategoryList",
    data() {
      return {
        page: 1,
        hotGoods: [],
        collectGoodsLength: 0
      }
    },
    components: {
      HotSell,
      CategoryListItem
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
        this.page +=1
      }
    },
    computed: {
      ...mapGetters(['collectList','collectLength'])
    },
    created() {
      this._getSellGoods(this.page)
    }
  }
</script>

<style scoped>
  .category-list {
    margin-top: 15px;
  }
  .top {
    border-bottom: 3px solid #eeeeee;
    padding-bottom: 12px;
  }
  .top span {
    /*margin-left: 25px;*/
    font-size: 15px;
    color: #ff2222;
  }
  .top .a {
    padding: 0 5px 12px 15px;
    border-bottom: 3px solid #ff2222;
  }
  .top .b {
    margin-left: 8px;
  }
  /*.collect-item{*/
    /*padding: 5px 10px 10px;*/
    /*border: 1px solid #eeeeee;*/
  /*}*/
  .bottom {
    margin-top: 20px;
  }
  .c-list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;

    border-bottom: 3px solid #eeeeee;

    padding: 15px;
  }
  .c-list .c-item {
    width: 13%;
    margin-right: 15px;
    margin-bottom: 15px;
    /*text-align: center;*/
  }
  .c-list .c-item:hover {
    border: 1px solid orangered;
  }
</style>
