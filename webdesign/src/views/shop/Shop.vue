<template>
  <div class="shop">
    <div class="top">
      <div class="left">
        <span class="a">解忧杂货铺</span>
        <span class="b" @click="toHome">首页</span>
        <span class="b" @click="toCollect">我的收藏</span>
      </div>
      <div class="right">
        <input type="text" placeholder="内衣">
        <span>搜索</span>
      </div>
    </div>
    <div class="content">
      <div class="c-top">
        <span v-for="(item,index) in options"
              @click="itemClick(index)"
              :class="{active: currentIndex === index}">{{item}}</span>
      </div>
      <div class="c-nav">
        <span class="a">宝贝</span>
        <span class="b">单价</span>
        <span class="c">数量</span>
        <span class="e">商品操作</span>
        <span class="f">交易操作</span>
      </div>
      <div id="goods" :class="{showPage: currentIndex !== 0 }">
        <div class="item" v-for="(item,index) in shopList">
          <div class="g-top">
            <span class="a">时间：{{item.time}}</span>
            <span class="b">订单号：{{item.orderNumber}}</span>
            <span class="c">{{item.name}}</span>
            <span class="e">和我联系</span>
          </div>
          <div class="g-bottom">
            <div class="a">
              <img :src="item.img" alt="">
              <div class="info">
                <div class="title">{{item.title}}</div>
                <div class="logo">
                  <img :src="item.logo" alt="">
                </div>
              </div>
            </div>
            <div class="b">￥{{item.newPrice}}</div>
            <div class="c">X {{item.count}}</div>
            <div class="d">申请售后</div>
            <div class="e" @click="nextOperation(item)">下一步</div>
          </div>
        </div>
      </div>
      <div :class="{showPage: currentIndex !== 1}" id="goods">
        <div class="item" v-for="(item,index) in payGoods">
          <div class="g-top">
            <span class="a">时间：{{item.time}}</span>
            <span class="b">订单号：{{item.orderNumber}}</span>
            <span class="c">{{item.name}}</span>
            <span class="e">和我联系</span>
          </div>
          <div class="g-bottom">
            <div class="a">
              <img :src="item.img" alt="">
              <div class="info">
                <div class="title">{{item.title}}</div>
                <div class="logo">
                  <img :src="item.logo" alt="">
                </div>
              </div>
            </div>
            <div class="b">￥{{item.newPrice}}</div>
            <div class="c">X {{item.count}}</div>
            <div class="d">申请售后</div>
            <div class="e" @click="nextOperation(item)">下一步</div>
          </div>
        </div>
      </div>
      <div :class="{showPage: currentIndex !== 2}" id="goods">
        <div class="item" v-for="(item,index) in shootGoods">
          <div class="g-top">
            <span class="a">时间：{{item.time}}</span>
            <span class="b">订单号：{{item.orderNumber}}</span>
            <span class="c">{{item.name}}</span>
            <span class="e">和我联系</span>
          </div>
          <div class="g-bottom">
            <div class="a">
              <img :src="item.img" alt="">
              <div class="info">
                <div class="title">{{item.title}}</div>
                <div class="logo">
                  <img :src="item.logo" alt="">
                </div>
              </div>
            </div>
            <div class="b">￥{{item.newPrice}}</div>
            <div class="c">X {{item.count}}</div>
            <div class="d">申请售后</div>
            <div class="e" @click="nextOperation(item)">下一步</div>
          </div>
        </div>
      </div>
      <div :class="{showPage: currentIndex !== 3}" id="goods">
        <div class="item" v-for="(item,index) in receiveGoods">
          <div class="g-top">
            <span class="a">时间：{{item.time}}</span>
            <span class="b">订单号：{{item.orderNumber}}</span>
            <span class="c">{{item.name}}</span>
            <span class="e">和我联系</span>
          </div>
          <div class="g-bottom">
            <div class="a">
              <img :src="item.img" alt="">
              <div class="info">
                <div class="title">{{item.title}}</div>
                <div class="logo">
                  <img :src="item.logo" alt="">
                </div>
              </div>
            </div>
            <div class="b">￥{{item.newPrice}}</div>
            <div class="c">X {{item.count}}</div>
            <div class="d">申请售后</div>
            <div class="e" @click="nextOperation(item)">下一步</div>
          </div>
        </div>
      </div>
      <div :class="{showPage: currentIndex !== 4}" id="goods">
        <div class="item" v-for="(item,index) in commentGoods">
          <div class="g-top">
            <span class="a">时间：{{item.time}}</span>
            <span class="b">订单号：{{item.orderNumber}}</span>
            <span class="c">{{item.name}}</span>
            <span class="e">和我联系</span>
          </div>
          <div class="g-bottom">
            <div class="a">
              <img :src="item.img" alt="">
              <div class="info">
                <div class="title">{{item.title}}</div>
                <div class="logo">
                  <img :src="item.logo" alt="">
                </div>
              </div>
            </div>
            <div class="b">￥{{item.newPrice}}</div>
            <div class="c">X {{item.count}}</div>
            <div class="d">申请售后</div>
            <div class="e" @click="nextOperation(item)">下一步</div>
          </div>
        </div>
      </div>
    </div>
    <div class="other">
      <hot-sell :goods="hotGoods" @down="pageDown"></hot-sell>
    </div>
  </div>
</template>

<script>
  import HotSell from "../home/homeComp/HotSell"
  import {getHomeGoods} from "network/home"

  export default {
    name: "Shop",
    data() {
      return {
        shopList: this.$store.state.shopGoods,
        options: ['所有订单','待付款','待发货','待收货','待评价'],
        currentIndex: 0,
        hotGoods: [],
        page: 1,
        payGoods: [],
        shootGoods: [],
        receiveGoods: [],
        commentGoods: []
      }
    },
    methods: {
      toHome() {
        this.$router.push('/home')
      },
      toCollect() {
        this.$router.push('/category')
      },
      itemClick(index) {
        this.currentIndex = index
      },
      nextOperation(item) {
        // this.currentIndex = 1;
        var _this = this;
        setTimeout(function () {
          switch (_this.currentIndex) {
            case 0:
              _this.currentIndex +=1;
              _this.$toast.show('即将跳转至支付页面！');
              _this.payGoods.push(item);
              break;
            case 1:
              //找到当前item在待支付的位置
              var _index = _this.payGoods.indexOf(item);
              _this.currentIndex +=1;
              //对待支付的商品已支付进行删除
              _this.payGoods.splice(_index,1);
              _this.shootGoods.push(item);
              // this.$toast.show('付款成功！！',2000);
              _this.$toast.show('付款成功，支付宝到账:' + item.newPrice,2000);
              break;
            case 2:
              var _index2 = _this.shootGoods.indexOf(item);
              _this.currentIndex +=1;
              _this.shootGoods.splice(_index2,1);
              _this.receiveGoods.push(item);
              _this.$toast.show('您的宝贝发货了！');
              break;
            case 3:
              var _index3 = _this.receiveGoods.indexOf(item);
              _this.receiveGoods.splice(_index3,1);
              _this.currentIndex +=1;
              _this.commentGoods.push(item);
              _this.$toast.show('您的宝贝已经成功签收！');
              break;
            case 4:
              var _index4 = _this.commentGoods.indexOf(item);
              _this.commentGoods.splice(_index4,1);
              _this.$toast.show('您已经评论完了！');
              _this.currentIndex = 0;
              break;
          }
          console.log('jjj',this)
        },500);
        // this.payGoods.push(item)
      },
      //------------------------------
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
    components: {
      HotSell
    },
    created() {
      this._getSellGoods(this.page)
    }
  }
</script>

<style scoped>
  .top {
    width: 114%;
    height: 59px;
    background: orangered;
    display: flex;

    margin-left: -82px;
    margin-top: -6px;
    line-height: 59px;

    cursor: pointer;
  }
  .top .left {
    color: #FFFFFF;
    font-size: 14px;
  }
  .top .left .a {
    font-size: 25px;
    margin-left: 80px;
    margin-right: 100px;
    font-weight: bold;
  }
  .top .left .b {
    margin-right: 50px;
  }
  .top .left .b:hover {
    border-bottom: 1px solid #ffffee;
  }
  .top .right input {
    width: 260px;
    height: 20px;
    outline-style: none;
    margin-left: 450px;
  }
  .top .right span {
    /*width: 50px;*/
    /*height: 20px;*/
    font-size: 14px;
    background: #f2f5f8;
    padding: 2px 14px 4px;
    letter-spacing: 4px;
    color: #999999;
  }
  .content {
    width: 75%;
    margin-left: 140px;
    cursor: pointer;
  }
  .content .c-top {
    margin-top: 35px;
    border-bottom: 2px solid #eeeeee;
    padding-bottom: 10px;

    font-weight: bold;
  }
  .content .c-top span {
    padding: 0 18px 11px;
    border-right: 1px solid #eeeeee;
  }
  .content .c-top span:last-child {
    border-right: none;
  }
  .content .c-top .active {
    color: #ff2222;
    border-bottom: 2px solid #ff2222;
  }

  .content .c-nav {
    width: 100%;
    margin-top: 15px;
    height: 45px;
    line-height: 45px;
    font-size: 14px;
    color: #333333;
    background: #eeeeee;
  }
  .content .c-nav .a {
    margin: 0 140px 0;
  }
  .content .c-nav .b {
    margin-right: 80px;
    margin-left: 50px;
  }
  .content .c-nav .c {
    margin-right: 100px;
  }
  .content .c-nav .e {
    margin-right: 100px;
  }

  #goods {
    margin-top: 30px;
    margin-bottom: 50px;
  }
  #goods .item {
    border: 1px solid #eeeeee;
    margin-bottom: 15px;
  }
  #goods .g-top {
    padding: 14px 0;
    font-size: 14px;
    color: #333333;
    background: #eeeeee;
  }
  #goods .g-top .a {
    font-weight: bold;
    margin: 0 15px 0 25px;
  }
  #goods .g-top .b {
    margin-right: 65px;
  }
  #goods .g-top .c {
    margin-right: 65px;
  }
  #goods .g-top .e {
    padding: 2px 1px;
    color: #ff2222;
    background: orange;
  }

  #goods .g-bottom {
    padding: 20px;
    display: flex;
    color: #333333;
    font-size: 14px;
  }
  #goods .g-bottom .a {
    padding-right: 190px;
    position: relative;
    /*margin-right: 45px;*/
    border-right: 1px solid #eeeeee;
  }
  #goods .g-bottom .a img {
    width: 90px;
    height: 90px;
  }
  #goods .g-bottom .a .info {
    position: absolute;
    top: 10px;
    left: 100px;
  }
  #goods .g-bottom .a .info .title {
    width: 180px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  #goods .g-bottom .a .info img {
    width: 40px;
    height: 40px;
  }
  #goods .g-bottom .b {
    /*margin-right: 80px;*/
    font-weight: bold;
    color: #ff2222;
    border-right: 1px solid #eeeeee;
    padding: 0 40px;
  }
  #goods .g-bottom .c {
    /*margin-right: 100px;*/
    padding: 0 30px;
    border-right: 1px solid #eeeeee;
  }
  #goods .g-bottom .d {
    /*margin-right: 120px;*/
    font-weight: bold;
    padding: 0 70px;
    margin-right: 40px;
    border-right: 1px solid #eeeeee;
  }
  #goods .g-bottom .e {
    padding: 5px 10px;
    height: 20px;
    border-radius: 10px;
    background: #eeeeee;
    color: orangered;
    font-weight: bold;
  }
  .showPage {
    display: none;
    padding-top: 30px;
    padding-bottom: 30px;
  }
</style>
