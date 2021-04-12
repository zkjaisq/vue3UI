<template>
  <h2>Hi</h2>
  <ComponentOne msg="Hello Vue 3.0 + Vite" />
</template>

<script>
import ComponentOne from './components/componentOne.vue' // 引入helloWorld组件
export default {
  name: 'App',
  components: {
    ComponentOne
  }
}
</script>
