export const UploadLinkView = () => {
  return `
<button class="js-onUpload go-upload"></button>
`;
};

export const UploadCancelView = () => {
  return `
<button class="upload__cancle-btn"></button>
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

export const NearWagleView = () => {
  return `
<div class="js-nearWagle subway-line__near-btn">
  <img class="js-nearWagle near_img" alt="near_img" src="/near_img.svg"/>
  <span class="js-nearWagle near-btn__text">내 주변 와글와글</span>
</div>
`;
}
