import { closeDialog } from "../handlers/modalHandler.js";
import { renderHotStations, renderModal, renderWagle } from "../render.js";

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
    closeDialog();
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

export const getHotStations = async () => {
  const endpoint = "/v1/station/hot";
  try {
    const response = await fetch(
      `${BASE_URL}${endpoint}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const responseData = await response.json();
    const stationList = responseData.data.stations;
    renderHotStations(stationList);
  } catch (error) {
    console.error("Error fetching data: ", error.message);
  }
}

export const getNearStation = async (lat, lng) => {
  const endpoint = "/v1/station/near";
  try {
    const response = await fetch(
      `${BASE_URL}${endpoint}?x=${lat}&y=${lng}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const responseData = await response.json();

    /**
     * will fix : id 받아와서 해당 위치로 화면 이동하기
     */
    console.log("result: ", responseData.data.stationId);
  } catch (error) {
    console.error("Error fetching data: ", error.message);
  }
}
