const dialog = document.querySelector(".modal");

export const showDialog = () => {
  dialog.showModal();
};

export const closeDialog = () => {
  console.log("execute");
  // form.reset();
  dialog.close();
};
