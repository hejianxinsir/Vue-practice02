<template>
  <div class="son">
    <h2>{{ msg }}</h2>
    {{ info }}<br>
    <button @click="sendToFath">发给父组件</button><br>
    <span>Son 获取 state 的 num : </span>{{getNum}}<br>
    <button @click="sminus">sminus</button>
  </div> 
</template>

<script>
export default {
  name: 'Parent',
  data(){
    return {
      msg: '我是子组件',
      toFath: '有钱，不缺钱 ---- 来自子组件'
    }
  },
  props: {
    info: {
      type: String,
      default: ''
    }
  },
  methods: {
    sendToFath: function(){
      console.log('111')
      this.$emit('handle', this.toFath)
    },
    sminus(){
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
.son{
  color: darkblue;
}
</style>