import FormBuilder from "./builder.vue";
import { Modal, Form } from "ant-design-vue";
import { createStore } from "./store";

/**
 *
 * @param {Vue} Vue Vue 实例
 */
FormBuilder.install = function(Vue) {
  Vue.use(Form);
  Vue.use(Modal);
  createStore(Vue);

  Vue.component("form-builder", FormBuilder);
};

export default FormBuilder;
