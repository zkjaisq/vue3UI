import { createApp } from 'vue'  // 创建app实例
import App from './App.vue'
import './index.scss'
import {createWebHashHistory, createRouter} from  'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Docoment.vue'
const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: Home},
        {path: '/doc', component: Doc}
    ]
})

const app = createApp(App)    // 接受一个组件挂载到#app的元素上
app.use(router)
app.mount('#app')
