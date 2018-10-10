<template>
  <div>
    <Tabs v-bind:tabsData="tabs" /> 
    <a href="#">test</a>
  </div>
</template>

<script>
  import Tabs from '../components/Tabs.vue'

  export default {
    name: "BadTabsPage",
    components: {
      Tabs
    },
    data: function () {
      return {
        tabs: [
          {
            name: "Hello",
            content: "How are you? <a href='#'>Inner</a>"
          },
          {
            name: "Moin",
            content: "Wie geht's?"
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>