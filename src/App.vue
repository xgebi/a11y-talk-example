<template>
  <div id="app">
    <Tabs v-bind:tabsData="tabs" />    
  </div>
</template>

<script>
import Tabs from './components/Tabs.vue'

export default {
  name: 'app',
  components: {
    Tabs
  },
  data: function () {
    return {
      tabs: [
        {
          name: "Hello",
          title: "English",
          content: "How are you?"
        },
        {
          name: "Moin",
          title: "Deutsch",
          content: "Wie geht's?"
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

* {
  color: inherit;
  margin: 0;
}

body {
  max-width: 40rem;
  padding: 0 1rem;
  font-size: 125%;
  line-height: 1.5;
  margin: 1.5rem auto;
  font-family: Arial, sans-serif;
  }
</style>
