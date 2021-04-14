<template>
  <div>
    <TopNav/>
    <div class="banner">
      <h1>一个厉害的咕噜</h1>
      <h2>一个厉害的ui框架</h2>
      <p class="actions">
        <a href="">GitHub</a>
        <a href="">开始</a>
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import TopNav  from '../components/topNav.vue'
export default {
  name: 'home',
  components:{
    TopNav
  }
}
</script>
<style lang="scss" scoped>

</style>