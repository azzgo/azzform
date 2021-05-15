---
to: src/plugins/form/widgets/<%= name %>/config.ts
---
import { defineWidget } from "../utils";

const widgetName = "<%= name %>";

export default defineWidget({
  text: "<%= widgetText %>",
  category: 'basic',
  schema: {
    title: "<%= widgetText %>",
    type: "string",
    widget: widgetName,
    column: 24,
  },
});

