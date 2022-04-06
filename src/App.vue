<template>
  <router-view/>
</template>

<script lang="ts">
import { provide, ref } from 'vue'
import { router } from './router';

export default {
  name: 'App',
  setup: function () {
    const width = document.documentElement.clientWidth
    const asideVisible = ref(width <= 500 ? false : true)
    provide('xxx', asideVisible)
    router.afterEach(() => {
      if (width <= 500) {
        asideVisible.value = false;
      }
    });
  }
}
</script>
