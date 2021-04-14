<template>
  <div>
    <TopNav/>
    <div class="content">
      <aside  v-if="asideVisible">
        <h2>组件列表</h2>
        <ul>
          <li>
            <router-link to="/doc/switch">Switch组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs组件</router-link>
          </li>
        </ul>
      </aside>
      <main>主要内容</main>
    </div>
  </div>
</template>
<script lang="ts">
import TopNav from '../components/topNav.vue'
import {Ref, inject} from 'vue'
export default {
  name: 'home',
  components: {
    TopNav
  },
   setup(){
    const asideVisible =  inject<Ref<Boolean>>('xxx') // get
    console.log('topNav里面获取到的menuVisible为：' + asideVisible)
     return {asideVisible}
  }
}
</script>
<style lang="scss" scoped>
aside {
  background: lightblue;
  width: 150px;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  > h2 {
    margin-bottom: 4px;
  }
  > ol {
    > li {
      padding: 4px 0;
    }
  }
}
</style>