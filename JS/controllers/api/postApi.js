import { getStationId } from "../utils/getStationId.js";
import { fetchCardList } from "./getApi.js";

const BASE_URL = "http://13.209.90.251";

export const uploadCard = async (cardData) => {
  const endpoint = "/v1/post/upload";
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cardData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const stationId = getStationId();
    fetchCardList(stationId);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};

export const postLikes = async (postId, count) => {
  const endpoint = "/v1/post/like";
  const postData = {
    postId: postId,
    count: count
  };
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};
