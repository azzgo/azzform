import { IField, ISchema } from "../type";
import { registerComponent } from "../utils";
import { parseSchema } from "../paster";
import { store } from "../store";
import Input from "../widgets/Input.vue";

beforeEach(() => {
  store.widgets.clear();
});

test("Simple Type Map to Widget", () => {
  // prepare Schema
  const schema = { type: "string" } as ISchema;
  registerComponent("string", Input);

  // when
  const field: IField = parseSchema(schema) as IField;

  // then
  expect(field.name).toBeUndefined();
  expect(field.Widget).toBe(Input);
  expect(field.schema).toEqual({ type: "string" });
});

test("Simple type Map to Field", () => {
  // prepare Schema
  const schema = { type: "string" } as ISchema;
  registerComponent("string", Input);

  // when
  const field: IField = parseSchema(schema, "name") as IField;

  // then
  expect(field.name).toEqual("name");
  expect(field.Widget).not.toBe(Input);
  expect(field.Widget.name).toEqual("InputWidget_name");
  expect(field.schema).toEqual({ type: "string" });
});
