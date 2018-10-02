<template>
  <span v-on:click="openLink" tabindex="0">Go to profile</span>
</template>

<script>
  export default {
    name: "AccessibleBadButtonLink",
    props: [
      'link'
    ],
    methods: {
      openLink: function() {
        window.location = "https://twitter.com/"+this.link;
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