<template>
  <div class="sort">
    <div class="top">
      <span class="s_all">所有分类</span>
      <div class="s">
        <input type="text" placeholder="显示筛选">
      </div>
    </div>
    <div class="bottom">
      <table>
        <tr>
          <td>你是不是要找：</td>
          <td>女衣服</td>
          <td>外套</td>
          <td>女装</td>
          <td>衣服男</td>
          <td>卫衣</td>
          <td>春装</td>
          <td>裙子</td>
          <td>上衣</td>
          <td>衣</td>
          <td>短袖</td>
          <td>衣服春</td>
          <td>连衣裙</td>
          <td>优衣库</td>
          <td>衬衫</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Sort"
  }
</script>

<style scoped>
  .sort {

  }
  .top {
    position: relative;
    padding-bottom: 10px;
    margin: 20px 0 0 20px;
  }
  .s:after {
    content: '';
    position: absolute;
    right: 8px;
    top: -1px;
    width: 6px;
    height: 6px;
    border-right: 1px solid #9c9c9c ;
    border-top: 1px solid #9c9c9c;
    transform: rotate(135deg);
  }
  .s:hover {
    color: #fe0000;
  }
  .top input {
    width: 75px;
    padding: 6px 0 6px 10px;
    position: absolute;
    top: -10px;
    right: 0;
    background: #eeeeee;
    outline: none;
    border: none;
    color: #111111;
  }
  .s_all {
    color: #444444;
    font-size: 14px;
    position: relative;
  }
  .s_all:after {
    content: '';
    position: absolute;
    left: 60px;
    top: 7px;
    width: 6px;
    height: 6px;
    border-right: 1px solid #9c9c9c ;
    border-top: 1px solid #9c9c9c;
    transform: rotate(45deg);
  }

  .bottom{
    font-size: 14px;
    color: #444444;
    border: 1px solid #eeeeee;
  }
  .bottom table {
    padding: 8px 10px;
    text-align: center;
  }
  .bottom table tr>td {
    padding-right: 10px;
  }
  .bottom table tr>td:nth-child(1) {
    color: #666666;
  }
  .bottom table tr>td:hover {
    color: #ff1433;
    cursor: pointer;
  }
  .bottom table tr>td:nth-child(1):hover {
    color: #666666;
  }
</style>
