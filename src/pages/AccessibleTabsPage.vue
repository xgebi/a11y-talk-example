<template>
  <div>
    <AccessibleTabs v-bind:tabsData="tabs" />
    <a href="#">test</a>     
  </div>
</template>

<script>
  import AccessibleTabs from '../components/AccessibleTabs.vue'

  export default {
    name: "GoodTabsPage",
    components: {
      AccessibleTabs
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