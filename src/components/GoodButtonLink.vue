<template>
  <a :href="'https://twitter.com/'+this.link">Go to profile</a>
</template>

<script>
  export default {
    name: "GoodButtonLink",
    props: [
      'link'
    ]
  }
</script>

<style scoped>

</style>