import {createApp} from 'vue'
import App from './App.vue'
import './assets/index.css'
import axios from 'axios'
import store from "./store";
import router from "./router/router";

const axiosInstance = axios.create({
    withCredentials: true,
})
const app = createApp(App)

app.config.globalProperties.$axios = { ...axiosInstance }
app
    .use(router)
    .use(store)
    .mount('#app')
