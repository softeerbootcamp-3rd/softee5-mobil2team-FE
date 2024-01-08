import { renderModal, renderWagle } from "../render.js";

const BASE_URL = "http://13.209.90.251";

export const fetchCardList = async (stationId) => {
  const endpoint = "/v1/post/postList";
  const pageSize = 5;
  const pageNumber = 1;
  const correctedStationId = Number(stationId) + 1;
  try {
    const response = await fetch(
      `${BASE_URL}${endpoint}?stationId=${correctedStationId}&pageSize=${pageSize}&pageNumber=${pageNumber}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    const cardList = responseData.data.posts;
    renderWagle(stationId, cardList);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};

export const fetchUploadImg = async () => {
  const endpoint = "/v1/post/images";
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    const imageList = responseData.data.images;
    renderModal(imageList);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};
