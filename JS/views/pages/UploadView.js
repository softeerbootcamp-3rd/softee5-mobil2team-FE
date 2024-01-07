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
  return `
<div class="upload">  
    ${UploadCancelView()}
    ${UploadHeaderView()}
    ${UploadTagListView()}
    <textarea
    class="upload__textarea"
    placeholder="지금 지하철에서 어떤 일이 일어나고 있나요?
ex) 오늘 출근 지옥이다..."
    ></textarea>
    <span class="upload__text-count">0/100</span>
    ${UploadSubmitView()}
</div>
    `;
};

// ${UploadPhotoListView()}
