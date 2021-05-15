import { reactive } from "vue";

export let state = {
  designer: {
    selectFieldName: "",
  },
};

export function createStore() {
  state = reactive(state);
}
