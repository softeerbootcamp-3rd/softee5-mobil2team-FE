import pencil from "../../../assets/pencil_img.svg";

export const UploadLinkView = () => {
  return `
<button class="go-upload">
    <img src="${pencil}" />
</button>
`;
};

export const UploadCancelView = () => {
  return `
<button class="upload__cancle-btn">
    <img src="assets/cancle_img.svg" alt="cancle" />
</button>
  `;
};

export const UploadSubmitView = () => {
  return `
<button class="upload__submit-btn">작성 완료</button>
  `;
};

export const WagleLinkView = (stationId) => {
  return `
<a data-navigate href="station/${stationId}"  class="subway-line__station" id="${stationId}"></a>
  `;
};
