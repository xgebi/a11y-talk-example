<template>
  <div>
    <BadButtonLink link="aaa"/><br/>
    <AccessibleBadButtonLink link="aaa"/><br/>
    <GoodButtonLink link="aaa"/>
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

<style scoped>

</style>