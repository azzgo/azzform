import FormBuilder from "./builder.vue";
import { Modal, Form } from 'ant-design-vue'

FormBuilder.install = function(Vue) {
  Vue.use(Form);
  Vue.use(Modal)
  Vue.component("form-builder", FormBuilder);
};

export default FormBuilder;
