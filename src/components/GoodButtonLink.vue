<template>
  <a :href="'https://twitter.com/'+this.twitterProfile" title="Go to twitter profile">
    <img alt="Twitter logo" src="../assets/twitter-logo.svg">
  </a>
</template>

<script>
  export default {
    name: "GoodButtonLink",
    props: [
      'twitterProfile'
    ]
  }
</script>

<style scoped>

</style>