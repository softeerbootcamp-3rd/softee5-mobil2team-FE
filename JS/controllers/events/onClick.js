import { gotoNearWagle } from "../handlers/nearWagleHandler";
import { uploadCardHandler } from "../handlers/uploadCardHandler";

const clickHandlerMap = {
  "js-onUpload": uploadCardHandler,
  "js-nearWagle": gotoNearWagle,
};

export const onClick = (event) => {
  const { target } = event;
  const executeHandler = clickHandlerMap[target.classList[0]];
  if (executeHandler) {
    executeHandler(target);
  }
};
