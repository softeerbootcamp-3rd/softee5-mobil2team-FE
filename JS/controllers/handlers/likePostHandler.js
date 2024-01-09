export const likePostHandler = (target) => {
  const postId = target.closest(".wagle__main__card").id;
  const spanElement = document.getElementById(postId).querySelector(".card__footer__like-count");
  
  const currentCount = spanElement.textContent || spanElement.innerText;
  spanElement.textContent = Number(currentCount) + 1;
}