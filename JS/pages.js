import { HomeView } from "./views/pages/HomeView.js";
import { UploadView } from "./views/pages/UploadView.js";

export default (container) => {
  const home = () => {
    container.innerHTML = HomeView();
  };

  const detail = (params) => {
    const { id } = params;
    container.textContent = `This is Detail Page with Id ${id}`;
  };

  const notFound = () => {
    container.textContent = "Page Not Found!";
  };

  const upload = () => {
    container.innerHTML = UploadView();
  };

  return {
    home,
    detail,
    notFound,
    upload,
  };
};
