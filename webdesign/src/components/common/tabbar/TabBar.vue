<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
	export default {
		name: "TabBar"
	}
</script>

<style scoped>
  #tab-bar {
    /* 本身的样式 */
    background:#f5f5f5;
    height: 35px;
    border-bottom: 1px solid #f5f5f5;
    box-shadow: 0 -1px 1px rgba(150,150,150,.08);

    /* 定位相关 */
    position: fixed;
    left: 0;
    right: 0;
    top: 0;

    /* 利用flex进行布局 */
    display: flex;
    text-align: center;
  }
</style>


