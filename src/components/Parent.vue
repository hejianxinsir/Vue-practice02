<template>
  <div>
    <h2>{{ msg }}</h2>
    <Son :info="message" @handle="getFromSon"></Son>
    {{ fromSon }}
    <span>parent 获取 store 的 num : </span>{{getNum}}<br>
    <button @click="padd">padd</button><br>
    <button @click="ppaction">ppaction</button>
    <button @click="pmaction">pmaction</button>
  </div>
</template>

<script>
import Son from './Son'

export default {
  name: 'Parent',
  data(){
    return {
      msg: '我是父组件',
      message: '缺钱吗？————来自父组件',
      fromSon: ''
    }
  },
  components: {
    Son
  },
  methods: {
    getFromSon: function(value){
      console.log('222')
      this.fromSon = value
    },
    padd(){
      this.$store.commit('plus')
    },
    ppaction(){
      this.$store.dispatch('plusAction')
    },
    pmaction(){
      this.$store.dispatch('minusAction')
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

</style>