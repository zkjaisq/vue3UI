import {createApp} from 'vue'  // 创建app实例
import './lib/gulu.scss'
import './index.scss'
import App from './App.vue'
import {router} from './router'

const app = createApp(App)    // 接受一个组件挂载到#app的元素上
app.use(router)
app.mount('#app')
