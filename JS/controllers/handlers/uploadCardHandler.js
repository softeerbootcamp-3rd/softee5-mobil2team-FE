import { showDialog } from "./modalHandler.js";
import { fetchUploadImg } from "../api/getApi.js";
import { getStationId } from "../utils/getStationId.js";
import { uploadCard } from "../api/postApi.js";

let selectedTagId = "";
let selectedImgId = "";

export const tagSelectHandler = (target) => {
  const tagElement = target.closest(".tag");
  const list = [...tagElement.parentNode.children];
  list.forEach((tag) => tag.classList.remove("selected-tag"));
  tagElement.classList.add("selected-tag");
  selectedTagId = tagElement.id;
};

export const imgSelectHandler = (target) => {
  const imgElement = target.closest(".upload__photo");
  const list = [...imgElement.parentNode.children];
  list.forEach((img) => img.classList.remove("selected-photo"));
  imgElement.classList.add("selected-photo");
  selectedImgId = imgElement.id;
};

const setFormData = (form) => {
  const newFormData = new FormData(form);
  const stationId = getStationId();
  newFormData.set("tagId", Number(selectedTagId) + 1); // DB index 보정
  newFormData.set("stationId", Number(stationId) + 1); // DB index 보정
  newFormData.set("imgId", Number(selectedImgId));
  return newFormData;
};

export const onModalSubmit = (event) => {
  event.preventDefault();
  const form = event.target;
  const newFormData = setFormData(form);

  let newCard = Object.fromEntries(newFormData);
  uploadCard(newCard);
  form.reset();
};

export const uploadCardHandler = (target) => {
  fetchUploadImg();
  showDialog();
};
