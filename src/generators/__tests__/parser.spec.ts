import { IField, ISchema } from "../type";
import { registerComponent } from "../utils";
import { store } from "../store";
import Input from "../widgets/Input.vue";
import InputDatetime from "../widgets/InputDatetime.vue";
import Select from "../widgets/Select.vue";

jest.mock("nanoid", () => ({
  nanoid: jest.fn(),
}));

import nanoid from "nanoid";

import { parseSchema } from "../paster";
import { DefineComponent } from "vue/types/v3-define-component";

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

test("type format Map to Field", () => {
  // prepare Schema
  const schema = { type: "string", format: "datetime" } as ISchema;
  registerComponent("string:datetime", InputDatetime);
  jest.spyOn(nanoid, "nanoid").mockReturnValue("name");

  const mockHyperRender = jest.fn();

  // when
  const field: IField = parseSchema(schema) as IField;
  (field.Widget as unknown as DefineComponent).render(
    mockHyperRender,
    "dummpyText" as any
  );

  // then
  expect(mockHyperRender.mock.calls[0][1].props.component[0]).toBe(
    InputDatetime
  );
  expect(field.Widget).not.toBe(InputDatetime);
  expect(field.Widget.name).toEqual("InputDatetimeWidget_name");
  expect(field.schema).toEqual({ type: "string", format: "datetime" });
});

test("type enum Map to Field", () => {
  // prepare Schema
  const schema = { type: "string", enum: ["yes", "no"] } as ISchema;
  registerComponent("string?enum", Select);
  jest.spyOn(nanoid, "nanoid").mockReturnValue("name");

  const mockHyperRender = jest.fn();

  // when
  const field: IField = parseSchema(schema) as IField;
  (field.Widget as unknown as DefineComponent).render(
    mockHyperRender,
    "dummpyText" as any
  );

  // then
  expect(mockHyperRender.mock.calls[0][1].props.component[0]).toBe(Select);
  expect(field.Widget).not.toBe(InputDatetime);
  expect(field.Widget.name).toEqual("SingleSelect_name");
  expect(field.schema).toEqual({ type: "string", enum: ["yes", "no"] });
});
