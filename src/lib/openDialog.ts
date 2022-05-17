import Dialog from "./Dialaog.vue"
import {createApp, h} from "vue";
import Dialaog from "./Dialaog.vue";

export const openDialog = (options) => {
    const {title, content, ok, cancel, closeOnClickOverlay} = options
    //    渲染dialog
    const div = document.createElement("div")
    document.body.appendChild(div)
    const app = createApp({
        render() {
            return h(Dialaog, {
                visible: true, 'onUpdate:visible': (newValue) => {
                    if (newValue === false) {
                        app.unmount(div)
                    }
                }, ok, cancel, closeOnClickOverlay, 'onUpdate:closeOnClickOverlay': (value) => {
                    if (value === false) {
                        app.unmount(div)
                    }
                }
            }, {title, content})
        }
    })
    app.mount(div)
}