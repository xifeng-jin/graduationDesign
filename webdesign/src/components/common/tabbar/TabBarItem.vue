<template>
  <div id="tab-bar-item">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
    <div class="other">
      <slot name="other"></slot>
    </div>
  </div>
</template>

<script>
	export default {
		name: "TabBarItem",
    computed: {
    },
    methods: {
    }
	}
</script>

<style scoped>
  #tab-bar-item {
    flex: 1;
    display: flex;
    line-height: 35px;
    font-size: 12px;
  }
  .left:hover,.center:hover,.right:hover,.other:hover {
    color: #ff0000;
  }
</style>
