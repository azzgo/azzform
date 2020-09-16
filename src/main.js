import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import FormEditPage from "./pages/form-edit/index.vue";
import Home from "./pages/home/index.vue";
import App from "./App.vue";
import VueAntd from "ant-design-vue";
import { createStore } from "./store";
import "ant-design-vue/dist/antd.css";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueAntd);
Vue.use(Vuex);

new Vue({
  router: new VueRouter({
    routes: [
      {
        path: "/form-edit/:formid",
        component: FormEditPage,
        children: [
          {
            path: "designer",
            component: () =>
              import("./pages/form-edit/sections/FormDesigner.vue"),
          },
          {
            path: "",
            redirect: "designer",
          },
        ],
      },
      { path: "/", component: Home },
    ],
    mode: "hash",
  }),
  store: createStore(),
  render: (h) => h(App),
}).$mount("#app");
