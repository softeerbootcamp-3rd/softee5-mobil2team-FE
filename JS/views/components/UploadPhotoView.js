export const UploadPhotoView = ({ imageId, imageURL }) => {
  return `
<article class="upload__photo" id="${imageId}">
    <img src="${imageURL}" alt="jjal" />
</article>
    `;
};
