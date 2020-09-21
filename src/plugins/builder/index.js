import FormBuilder from "./builder.vue";
import { Modal, Form } from 'ant-design-vue'

/**
 * 
 * @param {Vue} Vue Vue 实例
 */
FormBuilder.install = function(Vue) {
  Vue.use(Form);
  Vue.use(Modal);

  Vue.component("form-builder", FormBuilder);
};

export default FormBuilder;
