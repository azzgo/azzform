import Widget from "../widget";
import { shallowMount } from "@vue/test-utils";
import FieldRender from "../../../renderer/components/field-renderer";

describe("GIVEN Container in render mode", () => {
  test("when with a object form schema, it should render all properties widget", () => {
    const schema = {
      type: "object",
      widget: "container",
      properties: {
        name: {
          type: "string",
          widget: "input",
        },
      },
    };

    const wrapper = shallowMount(Widget, {
      props: {
        ...schema,
      },
    });

    expect(wrapper.findComponent(FieldRender).exists()).toBeTruthy();
  });
});
