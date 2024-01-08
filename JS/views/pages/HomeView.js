import { stationGrid, stationList } from "../../data.js";
import { UploadLinkView, WagleLinkView } from "../components/ButtonViews.js";

export const HomeView = () => {
  return `
  <div class="container">
  <div class="subway-line">
    <div class="subway-line__empty--center"></div>
    <div class="subway-line__empty--edge"></div>
    <div class="subway-line__empty--edge"></div>
    <div class="subway-line__empty--edge"></div>
    <div class="subway-line__empty--edge"></div>
    ${stationGrid.map((stationId) => WagleLinkView(stationId)).join(" ")}
  </div>

</div>
    `;
};
/*${UploadLinkView()}*/
