<template>
  <div class="dialog-overlay">
    <div class="dialog-wrapper">
      <header>标题</header>
      <main>
        <p>文本一</p>
        <p>文本二</p>
      </main>
      <footer>
        <Button>ok</Button>
        <Button>cancel</Button>
      </footer>
    </div>
  </div>
</template>
<script lang="ts">
import Button from "../lib/Button.vue"
export default {
  components: {
    Button
  }
}
</script>
