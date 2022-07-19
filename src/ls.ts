import AzzStorage, { IAzzStorageParser } from "azz-storage";

const jsonParser: IAzzStorageParser = {
  get(val: string, defaultVal: unknown): unknown {
    try {
      const data = JSON.parse(val);
      return data.value;
    } catch (e) {
      return defaultVal;
    }
  },
  set(val: unknown) {
    return JSON.stringify({
      value: val,
    });
  },
};

export default new AzzStorage("__azzform_", jsonParser);
