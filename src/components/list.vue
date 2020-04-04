<template>
  <ul>
    <li><router-link :to="{name: 'helloworld', params: {worldmsg: 'I am worldmsg'}}">Helloworld</router-link></li>
    <li><router-link :to="{name: 'janson', params: {jansonmsg: 'I am jansonmsg'}}">Janson</router-link></li>
    <li>list 里获取的 store 的 num : </li>
    {{getNum}}<br>
    <button @click="ladd">ladd</button><br>
    <button @click="lpaction">lpaction</button>
    <button @click="lmaction">lmaction</button>
  </ul>
</template>

<script>
import router from 'vue-router'
import Vue from 'vue'

export default {
  name: 'list',
  computed: {
    getNum(){
      return this.$store.state.num
    }
  },
  methods: {
    ladd(){
      this.$store.commit('plus')
    },
    lpaction(){
      this.$store.dispatch('plusAction')
    },
    lmaction(){
      this.$store.dispatch('minusAction')
    }
  }
}
</script>

<style scoped>
li{
  list-style: none;
}
ul{
  color: gray
}
</style>