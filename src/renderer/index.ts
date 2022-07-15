export { default as FormRender } from "./FormRender.vue";
export { default as FieldRender } from "./FieldRender.vue";
export * from "./type";
import { registerComponent } from "./utils";
export { parseObjectSchemaIntoFileds } from "./paster";
export { registerComponent };

import Input from "./widgets/Input.vue";
import NumberComp from "./widgets/Number.vue";
import Textarea from "./widgets/Textarea.vue";

// default widgets binding
registerComponent("string", Input);
registerComponent("number", NumberComp);
registerComponent("text", Textarea);
