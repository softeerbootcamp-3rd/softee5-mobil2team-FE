import { UploadLinkView } from "../components/ButtonViews.js";
import { WagleEmptyView } from "../components/wagle/WagleEmptyView.js";
import { WagleHeaderView } from "../components/wagle/WagleHeaderView.js";
import { WagleMainView } from "../components/wagle/WagleMainView.js";

export const WagleView = (stationId, cardList) => {
  return `
<div class="wagle">
    ${WagleHeaderView(stationId)}
    ${cardList && cardList.length ? WagleMainView(cardList) : WagleEmptyView()}
    ${UploadLinkView()}
</div>
  `;
};
