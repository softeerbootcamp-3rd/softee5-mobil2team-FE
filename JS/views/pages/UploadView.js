import { stationList } from "../../data.js";
import {
  UploadCancelView,
  UploadSubmitView,
} from "../components/ButtonViews.js";
import { UploadHeaderView } from "../components/UploadHeaderView.js";
import { UploadPhotoListView } from "../components/UploadPhotoListView.js";
import { UploadTagListView } from "../components/UploadTagListView.js";

export const UploadView = () => {
  /**
   * will fix
   * text count
   * photo
   */
  const { pathname } = window.location;
  const stationId = pathname.split("/")[2];
  const currStation = stationList[stationId];
  return `
<form method="dialog" class="upload">  
    ${UploadCancelView()}
    ${UploadHeaderView(currStation)}
    ${UploadTagListView()}
    <textarea
    class="upload__textarea"
    placeholder="지금 지하철에서 어떤 일이 일어나고 있나요?
ex) 오늘 출근 지옥이다..."
    ></textarea>
    <span class="upload__text-count">0/100</span>
    ${UploadSubmitView()}
</form>
    `;
};

// ${UploadPhotoListView()}
