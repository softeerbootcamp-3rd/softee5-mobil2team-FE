export const textCountHandler = (target) => {
  const length = target.value.length;
  const textCnt = [...target.parentNode.children][4];
  textCnt.textContent = `${length}/100`;

  if (length > 100) {
    target.value = target.value.substring(0, 100);
    textCnt.textContent = "100/100";
  }
};
