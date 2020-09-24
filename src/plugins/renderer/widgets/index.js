import Description from "./description/index.vue";
import Input from './input/index.vue';
import Range from './range/index'

export const widgets = {
  [Description.name]: Description,
  [Input.name]: Input,
  [Range.name]: Range,
};
