<template>
  <div id="app"> 
    <nav>
      <ul>    
        <li><router-link to="/buttons">Go to Buttons example</router-link>  </li>
        <li><router-link to="/tabs">Go to Tabs example</router-link>  </li>
      </ul>
    </nav>
    <main role="main">
      <router-view></router-view>
    </main>
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

  nav ul {
    list-style: none;
    padding: 0;
    display: flex;
  }
  nav ul li {
    flex: 1 1 50%;
    margin: 0 1rem;
  }

  main {
    margin: 2rem auto;
  }
</style>
