import { IField, ISchema } from "../type";
import { registerComponent } from "../utils";
import { store } from "../store";
import Input from "../widgets/Input.vue";

jest.mock("nanoid", () => ({
  nanoid: jest.fn(),
}));

import nanoid from "nanoid";

import { parseSchema } from "../paster";

beforeEach(() => {
  store.widgets.clear();
});

test("Simple type Map to Field", () => {
  // prepare Schema
  const schema = { type: "string" } as ISchema;
  registerComponent("string", Input);
  jest.spyOn(nanoid, "nanoid").mockReturnValue("name");

  // when
  const field: IField = parseSchema(schema) as IField;

  // then
  expect(field.name).toEqual("name");
  expect(field.Widget).not.toBe(Input);
  expect(field.Widget.name).toEqual("InputWidget_name");
  expect(field.schema).toEqual({ type: "string" });
});
