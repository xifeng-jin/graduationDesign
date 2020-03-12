<template>
  <div class="category">
    <div class="cate">
      <ul>
        <li><span class="a">宝贝分类</span></li>
        <li><span class="arrow"></span><span class="b">查看所有宝贝</span></li>
        <li><span class="c">按综合 按销量 按新品 按价格</span></li>
        <li><span>夹克</span></li>
        <li><span>棉衣</span></li>
        <li><span>衬衫</span></li>
        <li><span>卫衣</span></li>
        <li><span>毛呢大衣</span></li>
        <li><span>休闲裤</span></li>
        <li><span>毛衣</span></li>
        <li><span>羽绒服</span></li>
        <li><span>套装</span></li>
        <li><span>风衣</span></li>
        <li><span>背心/马甲</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailCategory"
  }
</script>

<style scoped>
  .category {
    margin-top: 30px;
    border: 2px solid #e8f2ff;
    cursor: pointer;
  }
  .cate ul {
    margin: 0;
    padding: 0;
  }
  .cate ul li {
    list-style: none;
    font-weight: bold;
    font-size: 14px;
    width: 100%;
    border-bottom: 2px solid #E5E5E5;
    color: #555555;
    padding: 5px 0;
    background: rgb(245,245,250);
  }
  .cate ul li span {
    margin-left: 30px;
  }
  .cate ul li span:hover {
    color: #ff1433;
    border-bottom: 1px solid #ff1433;
  }
  .cate ul li:nth-child(1) {
    color: #FFFFFF;
    background: darkslateblue;
  }
  .cate ul li .a {
    margin-left: 10px;
  }
  .cate ul li:nth-child(3) {
    background: #FFFFFF;
  }
  .cate ul li .c {
    margin-left: 10px;
    color: #999999;
  }
  .cate ul li .b {
    margin-left: 10px;
    position: relative;
  }
  .cate ul li .arrow {
    display: inline-block;
    width: 7px;
    height: 7px;
    border-top: 1px solid #999999;
    border-right: 1px solid #999999;
    transform: rotate(135deg);
    margin-bottom: 2px;
  }
  /*.cate ul li .arrow:hover {*/
    /*color: #999999;*/
    /*transform: rotate(135deg);*/
  /*}*/
  /*.cate ul li .b:before {*/
    /*content: '';*/
    /*position: absolute;*/
    /*left: -15px;*/
    /*top: 5px;*/
    /*width: 6px;*/
    /*height: 6px;*/
    /*border-right: 1px solid #9c9c9c ;*/
    /*border-top: 1px solid #9c9c9c;*/
    /*transform: rotate(135deg);*/
  /*}*/
</style>
