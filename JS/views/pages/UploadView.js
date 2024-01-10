import { stationList } from "../../data.js";
import { UploadHeaderView } from "../components/upload/UploadHeaderView.js";
import { UploadPhotoListView } from "../components/upload/UploadPhotoListView.js";
import { UploadTagListView } from "../components/upload/UploadTagListView.js";

export const UploadView = (imageList) => {
  const { pathname } = window.location;
  const stationId = pathname.split("/")[2];
  const currStation = stationList[stationId];
  return `
<form method="dialog" class="upload">  
<button type="button" class="js-onCloseModal upload__cancle-btn"></button>
    ${UploadHeaderView(currStation)}
    ${UploadTagListView()}
    <textarea
    id="content"
    name="content"
    class="js-textCount upload__textarea"
    required
    placeholder="지금 지하철에서 어떤 일이 일어나고 있나요?
ex) 오늘 출근 지옥이다..."
    ></textarea>
    <span class="upload__text-count">0/100</span>
    ${UploadPhotoListView(imageList)}
    <button type="submit" class="upload__submit-btn">작성 완료</button>
</form>
    `;
};
