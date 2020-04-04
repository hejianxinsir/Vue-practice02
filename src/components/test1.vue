<template>
  <div class="test1">
    <h1> I am test1</h1>
    来自子组件: {{fromSon}}
    <span> test1 获取 state 的 num : </span> {{getNum}}
    <Son :money="toSon" @handle="getFromSon"></Son><br>
    <button @click="oneminus">oneminus</button>

  </div>
</template>

<script>
// test1 为父组件，test2 为子组件

import Son from './test2'

export default {
  name: 'test1',
  data(){
    return {
      toSon: '1000$',
      fromSon: ''
    }
  },
  components: {
    Son
  },
  methods: {
    getFromSon: function(value){
      this.fromSon = value
    },
    oneminus(){
      this.$store.commit('minus')
    }
  },
  computed: {
    getNum(){
      return this.$store.state.num
    }
  }
}
</script>

<style scoped>
.test1{
  border: 1px solid red;
}
</style>