import { likePost } from "../api/postApi";
import { debounce } from "../utils/debounce";

let pendingLikes = []

const increaseLikeCount = (postId) => {
  const existingObject = pendingLikes.find(like => like.id == postId);
  if (existingObject) {
    existingObject.count += 1;
  } else {
    pendingLikes.push({id: Number(postId), count: 1});
  }
}

const sendLikes = () => {
  pendingLikes.forEach(postInfo => {
    likePost(postInfo);
  });
  pendingLikes = [];
}

const debouncedUpdateCount = debounce(sendLikes, 300);

export const likePostHandler = (target) => {
  const postId = target.closest(".wagle__main__card").id;
  const spanElement = document.getElementById(postId).querySelector(".card__footer__like-count");
  
  const currentCount = spanElement.textContent || spanElement.innerText;
  spanElement.textContent = Number(currentCount) + 1;

  increaseLikeCount(postId);
  debouncedUpdateCount();
}