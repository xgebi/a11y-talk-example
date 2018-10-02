<template>
  <span v-on:click="openLink">Go to profile</span>
</template>

<script>
  export default {
    name: "BadButtonLink",
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
  }
</style>