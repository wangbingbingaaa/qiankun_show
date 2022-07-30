if (window.__POWERED_BY_QIANKUN__) {
    // eslint-disable-next-line no-undef
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

import { createApp } from "vue";
import App from "./App.vue";
import router from "./pages/dataJK/router";
import store from "./pages/dataJK/store";
import ElmentPlus from 'element-plus';
import 'element-plus/dist/index.css'
import actions from '../src/actions'
// import './assets/css/variabels'
// import './assets/css/index1.scss'

// createApp(App).use(router).use(store).use(ElmentPlus).mount('#appJK')



let instance = null;
function render (props = {}) {
    const { container } = props;
    actions.setActions(props)
    instance = createApp(App);
    instance.use(router).use(ElmentPlus).use(store);
    instance.mount(container ? container.querySelector("#app") : "#app");
}

if (!window.__POWERED_BY_QIANKUN__) {
    render();
}

export async function bootstrap () {
    console.log("%c ", "color: green;", "vue3.0 app bootstraped");
}

export async function mount (props) {
    render(props);
    instance.config.globalProperties.$onGlobalStateChange =
        props.onGlobalStateChange;
    instance.config.globalProperties.$setGlobalState = props.setGlobalState;
}

export async function unmount () {
    instance.unmount();
    instance._container.innerHTML = "";
    instance = null;
}



