<script>
  export default {
    created(){
      window.location.href=this.$props.url;
    },
    props: {
      url: String
    }
  }
</script>

<template>
  <h1>Redirecting...</h1>
</template>

<style scoped>

</style>