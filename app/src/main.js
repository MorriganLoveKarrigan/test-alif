import { createApp } from "vue";
import App from "./App.vue";
import "./assets/index.css";
import axios from "axios";
import store from "./store";
import router from "./router/router";
import components from "./components/UI/index";

const axiosInstance = axios.create({
  withCredentials: true,
});
const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

app.config.globalProperties.$axios = { ...axiosInstance };
app.use(router).use(store).mount("#app");
