// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
module.exports = {
  prompt: ({ prompter }) =>
    prompter
      .prompt({
        type: "input",
        name: "widgetText",
        message: "生成的拖拽组件名称是（默认单行文本）?",
      })
      .then(({ widgetText }) => {
        return { widgetText: widgetText || "单行文本" };
      }),
};
