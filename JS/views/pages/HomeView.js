import { stationGrid, stationList } from "../../data.js";
import { NearWagleTooltipView, NearWagleView, UploadLinkView, WagleLinkView } from "../components/ButtonViews.js";
import { HotStationListView } from "../components/HotStationListView.js"

export const HomeView = () => {
  return `
  <header class="home__header">
    <div class="home__header__title">
      <img src="home_header_img.svg"/>
      <img src="home_header_title.svg"/>
    </div>
    <div class="home__hot_area">
    </div>
  </header>
  <div class="container">
  <div class="subway-line">
    <div class="subway-line__empty--center"></div>
    <div class="subway-line__empty--edge"></div>
    <div class="subway-line__empty--edge"></div>
    <div class="subway-line__empty--edge"></div>
    <div class="subway-line__empty--edge"></div>
    ${stationGrid.map((stationId) => WagleLinkView(stationId)).join(" ")}
  </div>
  ${NearWagleTooltipView()}
  ${NearWagleView()}
</div>
    `;
};
/*${UploadLinkView()}*/
