import { FormBuilder } from "./builder";
import { FormRenderer } from "./renderer";
import {
  Modal,
  Form,
  Row,
  Col,
  Card,
  Space,
  Button,
  Slider,
  Input,
  Tabs,
  Drawer,
} from "ant-design-vue";
import { createStore } from "./store";

export default {
  /**
   *
   * @param {import("@vue/runtime-core").App<any>} Vue Vue 实例
   */
  install: function(vueApp) {
    vueApp.use(Form);
    vueApp.use(Modal);
    vueApp.use(Row);
    vueApp.use(Col);
    vueApp.use(Card);
    vueApp.use(Drawer);
    vueApp.use(Space);
    vueApp.use(Button);
    vueApp.use(Input);
    vueApp.use(Slider);
    vueApp.use(Tabs);
    createStore();
    vueApp.component("form-renderer", FormRenderer);
    vueApp.component("form-builder", FormBuilder);
  },
};
