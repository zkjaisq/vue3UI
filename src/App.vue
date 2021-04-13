<template>
  <h2>导航栏
    <router-link to="/">component1</router-link>
    <router-link to="/xxxx">component2</router-link>
  </h2>
  <router-view/>
</template>

<script>
import ComponentOne from './components/componentOne.vue' // 引入helloWorld组件
export default {
  name: 'App'
}
</script>
