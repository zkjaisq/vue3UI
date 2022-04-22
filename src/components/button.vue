<template>
  <h1>Button 示例</h1>
  <p>示例 1</p>
  <div>
    <Button>你好</Button>
    <Button theme="button">你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="text">你好</Button>
  </div>
  <p>示例 2</p>
  <div>
    <Button size="big">大的按钮</Button>
    <Button size="normal">正常按钮</Button>
    <Button size="small">小按钮</Button>
  </div>
  <div>
    <Button theme="text" size="big">大的按钮</Button>
    <Button theme="text" size="normal">正常按钮</Button>
    <Button theme="text" size="small">小按钮</Button>
  </div>
  <div>
    <Button theme="link" size="big">大的按钮</Button>
    <Button theme="link" size="normal">正常按钮</Button>
    <Button theme="link" size="small">小按钮</Button>
  </div>
  <p>示例 3</p>
  <div>
    <Button level="main">主要按钮</Button>
    <Button level="normal">普通按钮</Button>
    <Button level="danger">危险按钮</Button>
  </div>
  <div>
    <Button theme="link" level="main">主要链接按钮</Button>
    <Button theme="link" level="normal">普通链接按钮</Button>
    <Button theme="link" level="danger">危险链接按钮</Button>
  </div>
  <div>
    <Button theme="text" level="main">主要文字按钮</Button>
    <Button theme="text" level="normal">普通文字按钮</Button>
    <Button theme="text" level="danger">危险文字按钮</Button>
  </div>

  <p>示例 4</p>
  <div>
    <Button :disabled="true">按钮</Button>
    <Button theme="link" :disabled="true">按钮</Button>
    <Button theme="text" :disabled="true">按钮</Button>
  </div>
  <p>示例 4</p>
  <div>
    <Button :loading="true">按钮</Button>
    <Button :loading="false">按钮</Button>
  </div>
</template>
<script lang="ts">
import Button from "../lib/Button.vue"

export default {
  components: {Button},
  setup() {
    const onClick = () => {
      console.log('hi');
    }
    return {onClick}
  }
}
</script>