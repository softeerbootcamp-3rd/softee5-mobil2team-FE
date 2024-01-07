import { HomeView } from "./views/pages/HomeView.js";
import { UploadView } from "./views/pages/UploadView.js";
import { WagleView } from "./views/pages/WagleView.js";

export default (container) => {
  const home = () => {
    container.innerHTML = HomeView();
  };

  const detail = (params) => {
    const { id: stationId } = params;
    container.innerHTML = WagleView(stationId);
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
