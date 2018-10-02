<template>
  <div id="app">     
    <router-link to="/buttons">Go to Buttons example</router-link>  
    <router-link to="/tabs">Go to Tabs example</router-link>  

    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
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
