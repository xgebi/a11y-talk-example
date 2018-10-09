<template>
  <span 
    v-on:click="openLink" 
    v-on:keydown="openLinkByKeyboard" 
    tabindex="0"
    title="Go to twitter profile">
      <img alt="Twitter logo" src="../assets/twitter-logo.svg">
  </span>
</template>

<script>
  export default {
    name: "AccessibleBadButtonLink",
    props: [
      'twitterProfile'
    ],
    methods: {
      openLink: function() {
        window.location = "https://twitter.com/"+this.twitterProfile;
      },
      openLinkByKeyboard: function(event) {
        if (event.keyCode === 13 || event.keyCode === 32) {
          window.location = "https://twitter.com/"+this.twitterProfile;
        }
      }
    }
  }
</script>

<style scoped>
  span {
    cursor: pointer;
    text-decoration: underline;
  }
</style>