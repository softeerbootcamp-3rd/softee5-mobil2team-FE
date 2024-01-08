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

export const WagleLinkView = (stationId) => {
  return `
<a data-navigate href="station/${stationId}"  class="subway-line__station" id="${stationId}"></a>
  `;
};
