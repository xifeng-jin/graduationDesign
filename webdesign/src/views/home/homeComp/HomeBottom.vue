<template>
  <div class="bottom">
    <div class="search">
      <input type="text" placeholder="衣服">
      <span>搜索</span>
    </div>
    <div class="tip1">
      <ul>
        <li>阿里巴巴</li>
        <li>淘宝网</li>
        <li>京东</li>
        <li>天猫</li>
        <li>聚划算</li>
        <li>全球卖通</li>
        <li>阿里巴巴国际交易场</li>
        <li>1688</li>
        <li>阿里妈妈</li>
        <li>雅虎</li>
        <li>椅套</li>
        <li>湾淘</li>
        <li>UC</li>
        <li>虾米</li>
        <li>酷我</li>
        <li>支付宝</li>
        <li>钉钉</li>
        <li>优酷</li>
        <li>土豆</li>
        <li>阿里健康</li>
        <li>蘑菇街</li>
        <li>阿里体育</li>
        <li>网上银行</li>
        <li>建设银行</li>
        <li>工商银行</li>
      </ul>
    </div>
    <div class="tip2">
      <ul>
        <li>关于江工</li>
        <li>合作伙伴</li>
        <li>营销中心</li>
        <li>廉政举报</li>
        <li>联系客服</li>
        <li>开放平台</li>
        <li>王者荣耀</li>
        <li>刺激战场</li>
        <li>开心斗地主</li>
        <li>诚征英才</li>
        <li>法律声明及隐私权政策</li>
        <li>知识产权</li>
        <li>版权所有</li>
        <li>网络文化经营许可证：江西文[2020]800-820-820</li>
        <li>增值业务经营许可证：赣2B-2020224</li>
        <li>江西网安电话：133-3333-3333</li>
        <li>互联网违法和不良信息举报电话：0571-81683755</li>
      </ul>
    </div>
    <div class="tip3">
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <div class="tip4">
      <img src="~assets/img/png/word.png" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeBottom"
  }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .search {
    text-align: center;
  }
  .search input{
    padding: 8px 0 8px 5px;
    border: 2px solid #ff1433;
    width: 550px;
    outline-style: none;
  }
  .search span {
    padding: 5px 25px 9px 25px;
    background: #ff1433;
    color: #FFFFFF;
    font-weight: bold;
  }
  .tip1 {
    margin-top: 20px;
    border-top: 2px solid #e8f2ff;
    border-bottom: 2px solid #e8f2ff;
    width: 100%;
  }
  .tip1 ul {
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    padding: 15px 0;
    color: #666666;
    font-size: 14px;
  }
  .tip1 ul li {
    padding-right: 10px;
    border-right: 1px solid #E5E5E5;
    margin-right: 5px;
    margin-bottom: 15px;
  }
  .tip2 {
    margin-top: 30px;
  }
  .tip2 ul{
    display: flex;
    flex-wrap: wrap;
    color: #666666;
    font-size: 14px;
  }
  .tip2 ul li {
    padding-right: 10px;
    border-right: 2px solid #E5E5E5;
    margin-right: 10px;
    margin-bottom: 20px;
  }

  .tip3 {
    margin-top: 20px;
    border-top: 2px solid #e8f2ff;
  }
  .tip3 ul {
    display: flex;
    flex-wrap: wrap;
  }
  .tip3 ul li:nth-child(1) {
    margin: 10px 0 0 25px;
    text-align: center;
    width: 110px;
    height: 110px;
    background-image: url("../../../assets/local/small.jpg");
    background-position: 110px 110px;
    color: red;
  }
  .tip3 ul li:nth-child(2) {
    margin: 10px 0 0 15px;
    text-align: center;
    width: 100px;
    height: 100px;
    background-image: url("../../../assets/local/small.jpg");
    background-position: 205px 205px;
    color: red;
  }
  .tip3 ul li:nth-child(3) {
    margin: 14px 0 0 25px;
    text-align: center;
    width: 100px;
    height: 100px;
    background-image: url("../../../assets/local/small.jpg");
    background-position: 110px 205px;
    color: red;
  }
  .tip3 ul li:nth-child(4) {
    margin: 15px 0 0 30px;
    text-align: center;
    width: 100px;
    height: 100px;
    background-image: url("../../../assets/local/small.jpg");
    background-position: 205px 110px;
    color: red;
  }
  .tip3 ul li:nth-child(5) {
    margin: 15px 0 0 30px;
    text-align: center;
    width: 100px;
    height: 100px;
    background-image: url("../../../assets/local/small.jpg");
    background-position: 205px 300px;
    color: red;
  }
  .tip3 ul li:nth-child(6) {
    margin: 15px 0 0 30px;
    text-align: center;
    width: 100px;
    height: 100px;
    background-image: url("../../../assets/local/small.jpg");
    background-position: 205px 395px;
    color: red;
  }
  .tip3 ul li:nth-child(7) {
    margin: 15px 0 0 30px;
    text-align: center;
    width: 100px;
    height: 100px;
    background-image: url("../../../assets/local/small.jpg");
    background-position: 395px 115px;
    color: red;
  }
  .tip3 ul li:nth-child(8) {
    margin: 20px 0 0 25px;
    text-align: center;
    width: 100px;
    height: 100px;
    background-image: url("../../../assets/local/small.jpg");
    background-position: 490px 110px;
    color: red;
  }
  .tip3 ul li:nth-child(9) {
    margin: 20px 0 0 35px;
    text-align: center;
    width: 100px;
    height: 100px;
    background-image: url("../../../assets/local/small.jpg");
    background-position: 608px 110px;
    color: red;
  }

  .tip4 {
    text-align: center;
    margin-bottom: -100px;
  }
</style>
