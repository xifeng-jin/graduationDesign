<template>
  <div class="detail-top">
    <div class="detail">
      <div class="left">
        <div class="bird">
          <img src="~assets/img/png/bird2.png" alt=""><span></span>
        </div>
        <div class="shop">
          <div class="a">朱氏旗舰店</div>
          <div class="b">全球品牌</div>
        </div>
        <div class="desc">描述服务物流</div>
        <div class="mobile">
          <div class="a">手机逛逛</div>
          <div class="b">
            <img src="~assets/local/er.jpg" alt="">
          </div>
        </div>
      </div>
      <div class="right">
        <div class="text">
          <input type="text" placeholder="搜索朱氏产品包你满意">
          <span class="a">搜天猫</span>
          <span class="b">搜本店</span>
        </div>
      </div>
    </div>
    <div class="tab">
      <div class="bar">
        <ul>
          <li class="first"><a href="#">本店所有商品</a></li>
          <li><a href="#">首页</a></li>
          <li><a href="#">卫衣</a></li>
          <li><a href="#">羽绒服</a></li>
          <li><a href="#">背心/马甲</a></li>
          <li><a href="#">毛衣</a></li>
          <li><a href="#">休闲裤</a></li>
          <li><a href="#">棉衣</a></li>
          <li><a href="#">夹克</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailTop"
  }
</script>

<style scoped>
  .detail {
    display: flex;
    margin-top: 5px;
    cursor: pointer;
  }
  .bird {
    width: 300px;
    height: 200px;
    margin: -60px 0 0 -45px;
  }
  .bird img{
    width: 99%;
    height: 100%;
  }
  .bird span {
    height: 55px;
    width: 2px;
    border-right: 1px solid #E5E5E5;
    position: absolute;
    top: 5px;
    right: 360px;
  }
  .shop {
    position: absolute;
    top: 10px;
    left: 250px;
    padding-right: 20px;
    border-right: 1px solid #E5E5E5;
  }
  .shop .a {
    font-size: 18px;
    font-weight: bold;
  }
  .shop .a:hover {
    color: #ff1433;
  }
  .shop .b {
    font-size: 14px;
    font-weight: bold;
    padding: 2px 10px 2px 15px;
    border-radius: 5px;
    background:darkgoldenrod;
  }
  .desc {
    position: absolute;
    top: 10px;
    right: 80px;
    letter-spacing: 10px;
    color: #333333;
    font-size: 15px;
  }
  .desc:hover {
    color: #ff1433;
  }
  .mobile {
    position: absolute;
    right: -20px;
    top: 10px;
    width: 100px;
    height: 100px;
  }
  .mobile .a {
    font-size: 14px;
    letter-spacing: 1px;
    margin-bottom: 3px;
    color: #444444;
  }
  .mobile .a:hover {
    color: #ff1433;
  }
  .mobile .b {
    width: 100px;
    height: 60px;
  }
  .mobile .b:hover {
    color: #ff1433;
  }
  .mobile .b img {
    width: 35px;
    height: 35px;
    margin-left: 10px;
  }

  .text {
    position: absolute;
    top: 10px;
    left: 60px;
  }
  .text input {
    padding: 10px 0 10px 5px;
    width: 350px;
    outline-style: none;
    border: 2px solid #ff1433;
  }
  .text> .a {
    color: #FFFFFF;
    padding: 8px 12px 11px;
    background: #ff0000;
  }
  .text .b {
    color: #FFFFFF;
    padding: 8px 15px 11px;
    margin-left: 5px;
    background: grey;
  }
  .right,.left {
    flex: 1;
    position: relative;
  }


  .tab {
    width: 100%;
    height: 40px;
    background: brown;
    margin-left: -80px;
    margin-top: -50px;
    padding: 0 80px;
    box-shadow: 1px 1px brown;
  }
  .tab .bar {
    width: 80%;
    height: 100%;
    background: blue;
    margin-left: 110px;
  }
  .tab .bar ul {
    display: flex;
    list-style: none;
    line-height: 40px;
    margin: 0;
    padding-left: 10px;
    /*color: #FFFFFF;*/
    font-size: 15px;
    font-weight:bold;
    box-shadow: 1px 1px blue;
  }
  .tab .bar ul li {
    margin-right: 40px;
  }
  .tab .bar ul li a {
    text-decoration: none;
    color: white;
    width: 100%;
    height: 100%;
  }
  .tab .bar ul li a:hover {
    background: darkslateblue;
    color: red;
  }
  .tab .bar ul .first {
    margin-right: 10px;
    background: darkslateblue;
    padding: 0 100px 0 10px;
    margin-left: -10px;
  }
</style>
