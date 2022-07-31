

console.log("main.js loaded")
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";


const app = createApp(App);

app.use(router);

app.mount("#app");
