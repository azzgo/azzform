import { createApp, h } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import FormEditPage from "./pages/form-edit/index.vue";
import Home from "./pages/home/index.vue";
import App from "./App.vue";
import FormDesigner from "@/plugins/form/index";

const routers = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/form-edit/:formid",
      component: FormEditPage,
    },
    { path: "/", component: Home },
  ],
});

const app = createApp({
  render: () => h(App),
});

app.use(routers);
app.use(FormDesigner);

app.mount("#app");

