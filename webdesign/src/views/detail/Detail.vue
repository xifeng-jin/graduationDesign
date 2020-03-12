<template>
  <div id="detail">
    <detail-top></detail-top>
    <div class="d_center">
      <div class="a"><detail-swiper :slideImg="slideImg"></detail-swiper></div>
      <div class="b"><detail-center
        @addCart="addCart"
        :detailInfo="detailInfo"></detail-center>
      </div>
      <div class="c">
        <detail-right :verticalImg="verticalImg"></detail-right>
        <!--<ul>-->
          <!--<li v-for="item in $store.state.cartList">{{item}}</li>-->
        <!--</ul>-->
      </div>
    </div>
    <div class="d_bottom">
      <div class="d_tip">
        <detail-tip :tipInfo="tipInfo"></detail-tip>
        <detail-category></detail-category>
        <detail-rank :rankLeftImg="rankLeftImg" :rankRightImg="rankRightImg"></detail-rank>
      </div>
      <div class="d_content">
        <content-top :detailParams="detailParams"></content-top>
        <detail-show :detailImage="detailImage"></detail-show>
      </div>
    </div>
    <detail-bottom></detail-bottom>
  </div>
</template>

<script>
  import {getDetail,getRecommend} from "network/home"

  import DetailTop from "./detailComp/detailTop/DetailTop"

  import DetailSwiper from "./detailComp/detailSwiper/DetailSwiper"
  import DetailCenter from "./detailComp/detailCenter/DetailCenter"
  import DetailRight from "./detailComp/detailRigth/DetailRight"

  import DetailTip from  "./detailComp/detailTip/DetailTip"
  import DetailCategory from "./detailComp/detailCategory/DetailCategory"
  import DetailRank from "./detailComp/detailRank/DetailRank"

  import ContentTop from "./detailComp/contentTop/ContentTop"
  import DetailShow from "./detailComp/detailShow/DetailShow"

  import DetailBottom from "./detailComp/DetailBottom"


  export default {
    name: "Detail",
    data() {
      return {
        iid:'',
        recommends:[],
        slideImg: [],
        detailInfo:{},
        verticalImg: [],
        tipInfo: {},
        rankLeftImg: [],
        rankRightImg: [],
        detailParams: {},
        detailImage: {}
      }
    },
    components: {
      DetailTop,
      DetailSwiper,
      DetailCenter,
      DetailRight,
      DetailTip,
      DetailCategory,
      DetailRank,
      ContentTop,
      DetailShow,
      DetailBottom
    },
    created() {
      this.iid = this.$route.params.iid;

      this._getRecommend();
      this._getDetail(this.iid)
    },
    methods: {
      /**
       *网络请求方法
       */
      _getDetail(iid) {
        getDetail(iid).then(res => {
          console.log( res );
          const data = res.result;
          //轮播缩略图
          this.slideImg = data.itemInfo.topImages;
          //商品信息
          var tempInfo = this._getTempInfo(data);
          this.detailInfo = tempInfo;
          // console.log( this.detailInfo );
          //右侧轮播图
          this.verticalImg = data.skuInfo.skus;
          // console.log( this.verticalImg );

          //获得底部侧边栏信息
          this.tipInfo = this._getTipInfo(data);
          // console.log( this.tipInfo );

          //获取商品参数
          this.detailParams = this._getParams(data);
          console.log( this.detailParams );

          //获取商品详情展示
          var list = data.detailInfo.detailImage[0].list;
          this.detailImage = {
            Image: list.slice(0,list.length - 1),
            lastImage: list[list.length - 1]
          };
          console.log( this.detailImage );

        })
      },
      _getParams(data) {
        var tempParams = {
          name: data.shopInfo.name,
          info: data.itemParams.info.set,
          rule: data.itemParams.rule.tables[0],
          rateList: data.rate.list,
          shop: data.topBar.img,
          goodImg: data.itemInfo.topImages[1]
        };
        return tempParams
      },
      _getRecommend() {
        getRecommend().then(res => {
          var list = res.data.list;
          this.rankLeftImg = list.slice(0,12);
          this.rankRightImg = list.slice(12,25);
          // console.log(this.rankRightImg,this.rankLeftImg)
        });
      },
      _getTipInfo(data) {
        var year = Math .floor(Math.random()*10);
        var tipInfo = {
          shopName: data.shopInfo.name,
          shopLogo: data.shopInfo.shopLogo,
          score: data.shopInfo.score,
          year: '天猫' + year + '年店'
        };
        return tipInfo
      },
      _getTempInfo(data) {
        var pointScore = Math.floor(Math.random()*50 + 40);
        var transPrice = Math.floor(Math.random()*10 + 5);
        var time = this.getCurrentTime(new Date());
        var comment = Math.floor(Math.random()*100 + 100);
        // console.log(time);
        var tempInfo = {
          price: data.itemInfo.lowNowPrice,
          oldPrice: data.itemInfo.oldPrice,
          title: data.itemInfo.title,
          sell: data.itemInfo.discountDesc,
          extra: data.itemInfo.extra.sendAddress ? data.itemInfo.extra.sendAddress  :'北京',
          promote: data.promotions.list,
          cFans: data.shopInfo.cFans,
          cSells: data.shopInfo.cSells,
          services: ['退货运费','全国包邮','7天无理由发货','12小时发货'],
          pointScore: pointScore,
          transPrice: transPrice,
          time: time,
          comment:comment
        };
        return tempInfo
      },
      /**
       * 逻辑方法
       */
      getCurrentTime(time) {
        var year = time.getFullYear();
        var date = time.getDate();
        var day = time.getDay();
        var hour = time.getHours();
        var minute = time.getMinutes();
        var second = time.getSeconds();
        return year + '-' + date + '-' + day + ' ' + hour + ':' + minute + ':' + second
      },
      addCart() {
        var tempSize = ['M','L','XL','XXL','3XL'];
        var color = ['红色','绿色','橙色','紫色','灰色','军装绿','麻袋黄','黄色'];
        var orderNum = function () {
          var num = '';
          var num2 = [0,1,2,3,4,5,6,7,8,9];
          for ( var i = 0 ; i < 17 ; i ++ ) {
            num += num2[Math.floor(Math.random() * 10)]
          }
          return num
        };
        var product = {
          iid: this.iid,
          img: this.slideImg[0],
          title: this.detailInfo.title,
          logo: this.tipInfo.shopLogo,
          name: this.tipInfo.shopName,
          sell: this.detailInfo.sell,
          newPrice: this.detailInfo.price,
          oldPrice: this.detailInfo.oldPrice,
          size: tempSize[Math.floor(Math.random() *5)],
          color: color[Math.floor(Math.random()*8)],
          time: this.getCurrentTime(new Date()),
          orderNumber:orderNum()
        };
        alert('detail');
        this.$store.dispatch('addCart',product).then(res => {
          this.$toast.show(res,2000);
        })
      }
    }
  }
</script>

<style scoped>
  .d_center , .d_bottom {
    display: flex;
    margin: 40px 0 0 45px;
  }
  .d_center .a {
    width: 35%;
  }
  .d_center .b {
    width: 45%;
  }
  .d_center .c {
    width: 20%;
  }
  .d_bottom {
    width: 80%;
    margin-top: -160px;
    /*border-top: 1px solid #E5E5E5;*/
    z-index: 2;
  }
  .d_tip {
    width: 22%;

  }
  .d_content {
    width: 78%;
  }
</style>
