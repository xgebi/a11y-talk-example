<template>
  <div>
    <BadButtonLink twitterProfile="aaa"/><br/>
    <AccessibleBadButtonLink twitterProfile="aaa"/><br/>
    <GoodButtonLink twitterProfile="aaa"/>
  </div>
</template>

<script>
  import BadButtonLink from '../components/BadButtonLink.vue'
  import AccessibleBadButtonLink from '../components/AccessibleBadButtonLink.vue'
  import GoodButtonLink from '../components/GoodButtonLink.vue'

  export default {
    name: "ButtonsPage",
    components: {
      BadButtonLink,
      AccessibleBadButtonLink,
      GoodButtonLink
    }
  }
</script>

<style>
  img {
    max-width: 2rem;
    max-height: 2rem;
  }
</style>