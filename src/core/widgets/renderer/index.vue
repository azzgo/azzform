<script>
import { widgets } from "../index";

export default {
  name: "form-renderer",
  props: {
    schema: Object,
  },
  components: {
    ...widgets,
  },
  render(h) {
    return h(
      "div",
      Object.keys(this.schema.properties).map((fieldName) => {
        return h(
          "a-form-item",
          {
            props: {
              label: this.schema.properties[fieldName].title,
            },
          },
          [
            h(this.schema.properties[fieldName]["ui:widget"], {
              props: {
                placeholder: this.schema.properties[fieldName][
                  "ui:placeholder"
                ],
              },
            }),
          ]
        );
      })
    );
  },
};
</script>