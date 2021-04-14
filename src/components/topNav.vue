<template>
  <div class="topNav">
    <div class="logo" @click="toggleMenu">logo</div>
    <ul class="menu">
      <li>菜单一</li>
      <li>菜单二</li>
    </ul>
  </div>
</template>
<script lang="ts">
import {Ref, inject} from 'vue'
export default {
  name: 'topNav',
  setup(){
    const asideVisible =  inject<Ref<Boolean>>('xxx') // get
    console.log(asideVisible)
    console.log('topNav里面获取到的menuVisible为：' + asideVisible.value)
    const toggleMenu = () => {
      asideVisible.value = !asideVisible.value
    }
    return {toggleMenu}
  }
}
</script>
<style lang="scss" scoped>
.topNav {
  background: pink;
  display: flex;
  padding: 16px;
  position: relative;
  z-index: 10;

  > .logo {
    max-width: 6em;
    margin-right: auto;
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
    }
  }
}
</style>