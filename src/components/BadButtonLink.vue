<template>
  <span v-on:click="openLink">
    <img alt="Twitter logo" src="../assets/twitter-logo.svg">
  </span>
</template>

<script>
  export default {
    name: "BadButtonLink",
    props: [
      'twitterProfile'
    ],
    methods: {
      openLink: function() {
        window.location = "https://twitter.com/"+this.twitterProfile;
      }
    }
  }
</script>

<style scoped>
  span {
    cursor: pointer;
  }
</style>