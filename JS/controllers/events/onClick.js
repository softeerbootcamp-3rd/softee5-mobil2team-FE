import { textCountHandler } from "../handlers/textCountHandler.js";
import { uploadCardHandler } from "../handlers/uploadCardHandler";

const clickHandlerMap = {
  "js-onUpload": uploadCardHandler,
  "js-textCount": textCountHandler,
};

export const onClick = (event) => {
  const { target } = event;
  const executeHandler = clickHandlerMap[target.classList[0]];
  if (executeHandler) {
    executeHandler(target);
  }
};
