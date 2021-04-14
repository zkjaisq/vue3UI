<template>
  <div>
    <TopNav/>
    <div class="content">
      <aside>边栏</aside>
      <main>主要内容</main>
    </div>
  </div>
</template>
<script lang="ts">
import TopNav from '../components/topNav.vue'
export default {
  name: 'home',
  components: {
    TopNav
  }
}
</script>