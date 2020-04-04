<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>{{ $route.params.worldmsg }}</h3>
    axios GET 方法: <button @click="axiosGet">axiosGet</button>
    axios Post 方法: <button @click="axiosPost">axiosPost</button>
    <ul>
      <li v-for="item in items">
        {{item.title}}
      </li>
    </ul>
    <span>helloworld 获取 store 的 num:</span> {{ getNum }}<br>
    <span> helloworld: </span><button @click="hadd">hadd</button>
    <span>hello action:</span><button @click="haction">haction</button>
    <span>hello action:</span><button @click="hmaction">hmaction</button>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
Vue.prototype.$http = axios

export default {
  name: 'HelloWorld',
  data: function(){
    return {
      msg: 'Welcome to Vue.js',
      items: []
    }
  },
  computed: {
    getNum(){
      return this.$store.state.num
    }
  },
  methods: {
    haction(){
      this.$store.dispatch('plusAction')
    },
    hmaction(){
      this.$store.dispatch('minusAction')
    },
    hadd(){
      console.log('hadd')
      this.$store.commit('plus')
    },
    axiosGet: function(){
      this.$http.get('https://cnodejs.org/api/v1/topics', {
        page: 1,
        limit: 10
      })
        .then((res)=>{
          console.log(res.data.data)
          this.items = res.data.data
        })
        .catch((err)=>{
          console.log('fail')
        })
    },
    axiosPost: function(){
      let self = this
      this.$http.post('url',{
        page: 1,
        limit: 10
      })
        .then((res)=>{
          console.log(res)
        })
        .catch((err)=>{
          console.log(err)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
    border: 1px solid red;
  }
  li{
    list-style: none;
    margin: 20px 0;
  }
</style>
