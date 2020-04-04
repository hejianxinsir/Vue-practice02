<template>
  <div class="test2">
    <h2>I am test2</h2>
    来自父组件: {{ money }}<br>
    发送给父组件: <button @click="sendToFath">to Fath</button><br>
    <span>test2 获取 state 的 num : </span> {{getNum}}<br>
    <button @click="twominus">twominus</button>
  </div>
</template>

<script>
export default {
  name: 'test2',
  data(){
    return {
      toFath: 'to Fath 2000$'
    }
  },
  props: {
    money: {
      type: String,
      default: ''
    }
  },
  methods: {
    sendToFath: function(){
      this.$emit('handle', this.toFath)
    },
    twominus(){
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
.test2{
  border: 1px solid blue;
}
</style>