// 找不到module的解决方法
declare module '*.vue' {
    import { ComponentOptions  } from 'vue'
    const componentOptions: ComponentOptions
    export default componentOptions
  }