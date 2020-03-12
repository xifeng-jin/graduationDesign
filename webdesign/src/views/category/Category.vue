<template>
  <div class="category">
    <category-top></category-top>
    <category-list></category-list>
  </div>
</template>

<script>
  import CategoryTop from "./categoryComp/CategoryTop"
  import CategoryList from "./categoryComp/CategoryList"
  export default {
    name: "Category",
    data() {
      return {
      }
    },
    components: {
      CategoryTop,
      CategoryList
    },
    filters: {
    },
    methods: {
    },
    directives: {
    },
    mounted() {
    }
  }
</script>

<style scoped>

</style>
