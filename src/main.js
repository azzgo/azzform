import Vue from "vue";
import VueRouter from "vue-router";
import FormEditPage from "./pages/form-edit/index.vue";
import Home from "./pages/home/index.vue";
import App from "./App.vue";
import FormBuilder from "@/plugins/builder/index";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(FormBuilder);

new Vue({
  router: new VueRouter({
    routes: [
      {
        path: "/form-edit/:formid",
        component: FormEditPage,
      },
      { path: "/", component: Home },
    ],
    mode: "hash",
  }),
  render: (h) => h(App),
}).$mount("#app");
