import { createApp } from 'vue'  // 创建app实例
import App from './App.vue'
import './index.css'
import {createWebHashHistory, createRouter} from  'vue-router'
import ComponentOne from './components/componentOne.vue'
import ComponentTwo from './components/componentTwo.vue'
const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: ComponentOne},
        {path: '/xxxx', component: ComponentTwo}
    ]
})

const app = createApp(App)    // 接受一个组件挂载到#app的元素上
app.use(router)
app.mount('#app')
