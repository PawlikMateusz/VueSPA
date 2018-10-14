import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import VueSilentbox from "vue-silentbox";
import { routes } from "./routes.js";
Vue.use(VueRouter);
Vue.use(VueSilentbox);

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
