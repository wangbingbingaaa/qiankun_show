<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
       <h1>{{ msg }}</h1>
    <p>qiankun 主应用带过来的消息：{{microInfo}}</p>
    <button @click="handleActions">子应用按钮</button>

    </div>
    <router-view/>
  </div>
</template>
<script>
import actions from './actions/index.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'VUE子应用',
      microInfo: {}
    }
  },
  mounted() {
    // 注册观察者函数
    actions.onGlobalStateChange(state => {
      console.log('子应用的观察函数：', state)
      this.microInfo = state
    }, true)
  },
  methods: {
    handleActions() {
      actions.setGlobalState({
        msg: `子应用传递过来消息，${Math.random()}`
      })
    }
  },
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
