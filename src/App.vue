<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <list/>
    <Parent/><br>
    <test1/>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
// import Janson from './components/Janson'
import list from './components/list'
import Parent from './components/Parent'
import test1 from './components/test1'

export default {
  name: 'App',
  components: {
    list,
    Parent,
    test1
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
</style>
