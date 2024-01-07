import { UploadPhotoView } from "./UploadPhotoView.js";

export const UploadPhotoListView = () => {
  /**
   * will fix
   * 짤 리스트 서버에서 받아와야 함
   */
  return `
<h4 class="upload__photo-label">짤 사용하기</h4>
<section class="upload__photo-list">
    ${imgList.map((img) => UploadPhotoView(img))}
</section>
    `;
};
