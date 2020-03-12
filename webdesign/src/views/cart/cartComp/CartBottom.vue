<template>
  <div class="cart-bottom">
    <div class="one">
      <span>阿里巴巴</span><span>淘宝网</span><span>天猫</span><span>聚划算</span><span>全球速卖通</span><span>阿里巴巴国际交易场</span><span>1688</span><span>阿里妈妈</span><span>飞猪</span><span>阿里通信</span><span>阿里云计算</span><span>AliOS</span><span>一淘</span><span>万网</span><span>高速</span><span>UC</span><span>友盟</span><span>支付宝</span><span>钉钉</span><span>网上银行</span>
    </div>
    <div class="two">
      <span>关于淘宝</span><span>合作伙伴</span><span>营销中心</span><span>廉政举报</span><span>联系客服</span><span>开放平台</span><span>诚征英才</span><span>联系我们</span><span>网站地图</span><span>隐私权政策</span><span>法律声明</span><span>知识产权</span>
      <div class="content">
        <div>增值电信业务经营许可证：赣B：188-3848-438</div><div>增值电信业务许可证（跨地区）：B1-2020-688</div><div>江西网：（2020）1033-089号</div><div>江西新余互联网IT技术所第三方平台提供</div>
      </div>
      <span>互联网药品信息服务资格证书</span><span>增值业务许可证</span><span>千场乐此不疲，为我大仙不闹</span><span>欢迎大家品阅我的页面成品展示</span>
    </div>
    <div class="i">
      <img src="~assets/img/png/word.png" alt="图片未显示">
    </div>
  </div>
</template>

<script>
  export default {
    name: "CartBottom"
  }
</script>

<style scoped>
  .one {
    padding: 15px 10px;
    border-top: 1px solid #eeeeee;
    border-bottom: 1px solid #eeeeee;
    color: #666666;
    font-size: 14px;
  }
  .one span {
    padding: 0 10px;
    border-right: 1px solid #E5E5E5;
  }
  .two {
    margin-top: 10px;
    padding: 10px 10px;
    color: #999999;
    font-size: 13px;
  }
  .two span {
    padding: 5px 10px;
    border-right: 1px dotted #eeeeee;
  }
  .two .content {
    display: flex;
  }
  .two .content div {
    width:600px;
  }
  .i {
    text-align: center;
    margin-top: 20px;
  }
</style>
