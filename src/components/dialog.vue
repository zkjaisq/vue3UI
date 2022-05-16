<template>
<h1>Dialog组件</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog :visible="x"></Dialog>
</template>
<script lang="ts">
import Dialog from "../lib/Dialaog.vue"
import Button from "../lib/Button.vue"
import {ref} from "vue";
export default {
  components: {
    Dialog,Button
  },
  setup() {
    const x = ref(false)
    const toggle = () => {
      x.value = !x.value
    }
    return {x,toggle}
  }
}

</script>