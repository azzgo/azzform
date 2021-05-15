import { FormDesigner } from "./designer";
import { FormRenderer } from "./renderer";
import {
  Modal,
  Form,
  Row,
  Col,
  Empty,
  Card,
  Space,
  Button,
  Slider,
  Input,
  Tabs,
  Drawer,
} from "ant-design-vue";
import { createStore } from "./store";
import { App } from "@vue/runtime-core";

export default {
  install: function(vueApp: App<any>) {
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
    vueApp.use(Empty);
    vueApp.use(Tabs);
    createStore();
  },
};

export { FormRenderer, FormDesigner };
