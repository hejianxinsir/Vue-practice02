<template>
  <div class="janson">
    <h1>{{msg}}</h1>
    <h3>{{$route.params.jansonmsg}}</h3>
    <span>span 获取 store 里的 num:</span> {{ getNum }}<br>
    <button @click="jadd">jadd</button><br>
    <button @click="jpaction">jpaction</button>
    <button @click="jmaction">jmaction</button>
  </div>
</template>

<script>
export default {
  name: 'janson',
  data(){
    return {
      msg: 'Hello, I\'m Janson'
    }
  },
  computed: {
    getNum(){
      return this.$store.state.num
    }
  },
  methods: {
    jadd(){
      this.$store.commit('plus')
    },
    jpaction(){
      this.$store.dispatch('plusAction')
    },
    jmaction(){
      this.$store.dispatch('minusAction')
    }
  }
}
</script>

<style scoped>
.janson{
  color: brown;
}
</style>