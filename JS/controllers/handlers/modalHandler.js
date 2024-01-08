const dialog = document.querySelector(".modal");

export const showDialog = () => {
  dialog.showModal();
};

export const closeDialog = () => {
  // form.reset();
  dialog.close();
};
