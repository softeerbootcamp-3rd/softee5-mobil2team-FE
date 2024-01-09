import { fetchCardList, getHotStations } from "./controllers/api/getApi.js";
import { WagleLoadingView } from "./views/components/LoaderViews.js";
import { HomeView } from "./views/pages/HomeView.js";
import { UploadView } from "./views/pages/UploadView.js";

export default (container) => {
  const home = () => {
    container.innerHTML = HomeView();
    getHotStations();
  };

  const detail = (params) => {
    const { id: stationId } = params;
    container.innerHTML = WagleLoadingView(stationId);
    fetchCardList(stationId);
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
