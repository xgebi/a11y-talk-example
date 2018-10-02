<template>
  <div>
    <Tabs v-bind:tabsData="tabs" /> 
  </div>
</template>

<script>
  import Tabs from '../components/Tabs.vue'

  export default {
    name: "TabsPage",
    components: {
      Tabs
    },
    data: function () {
      return {
        tabs: [
          {
            name: "Hello",
            content: "How are you?"
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