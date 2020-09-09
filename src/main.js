import Vue from "vue";
import VueRouter from "vue-router";
import FormEditPage from "./pages/form-edit/index.vue";
import Home from "./pages/HomePage.vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);

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
            path: '',
            redirect: 'designer'
          }
        ],
      },
      { path: "/", component: Home },
    ],
    mode: "hash",
  }),
  render: (h) => h(App),
}).$mount("#app");
