import router from 'vue-router'
import Vue from 'vue'
import HelloWorld from '../components/HelloWorld'
import Janson from '../components/Janson'
import test1 from '../components/test1'
import test2 from '../components/test2'

Vue.use(router)

export default new router({
  routes: [{
    name: 'helloworld',
    path: '/helloworld/:worldmsg',  // 这里是通过路由传递参数
    component: HelloWorld
  },{
    name: 'janson',
    path: '/janson/:jansonmsg',
    component: Janson
  },{
    name: 'test2',
    path: '/test2',
    component: test2
  },{
    name: 'test1',
    path: '/test1',
    component: test1
  }]
})