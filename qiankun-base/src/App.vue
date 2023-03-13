<template>
    <div>
        <el-menu :router="true" mode="horizontal">
            <!-- 主应用中也可以放自己的路由 -->
            <el-menu-item index="/">首页</el-menu-item>
            <!-- 引用其他的子应用 -->
            <el-menu-item index="/vue">vue应用</el-menu-item>
            <el-menu-item index="/vue3">vue3应用</el-menu-item>
            <el-menu-item index="/react">react应用</el-menu-item>

            <!-- 通信 -->
            <button @click="handleActions">主应用通信按钮</button>
        </el-menu>
        <router-view v-show="$route.name"></router-view>
        <div id="vue"></div>
        <div id="vue3"></div>
        <div id="react"></div>
    </div>
</template>
<script>
import actions from './actions/index.js'
export default {
    name: 'APP',
    mounted () {
        console.log(actions)
        // 注册一个观察者函数
        // state 是变更后的状态，prevState 是变更前的状态
        actions.onGlobalStateChange((state, prevState) => {
            console.log("主应用观察者，改变前的值", prevState)
            console.log("主应用观察者，改变后的值", state)
        })
    },
    methods: {
        handleActions () {
            actions.setGlobalState({
                msg: `主应用消息msg，${Math.random()}`
            })
        }
    }
}
</script>
<style></style>
