<template>
<h2>示例一</h2>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="x" :closeOnClickOverlay="true" :ok="f1" :cancel="f2">
    <template v-slot:content>
      <p>111</p>
      <p>222</p>
    </template>
    <template v-slot:title>
      <h3>title</h3>
    </template>
  </Dialog>
  <h2>示例二</h2>
  <Button @click="showDialog">show</Button>
</template>
<script lang="ts">
import Dialog from "../lib/Dialaog.vue"
import Button from "../lib/Button.vue"
import {openDialog} from "../lib/openDialog"
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
    const f1 = () =>{
      return false
    }
    const  f2=() => {

    }
    const showDialog = () => {
      openDialog({
        title: '标题',
        content: '1111',
        closeOnClickOverlay: false,
        ok: () => {
          console.log('ok')
        },
        cancel: () => {
          console.log('cancel')
        }
      })
    }
    return {x,toggle, f1, f2, showDialog}
  }
}

</script>