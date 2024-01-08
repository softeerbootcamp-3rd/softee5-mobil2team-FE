import createRouter from "./JS/router.js";
import createPages from "./JS/pages.js";
import { screenSizeHandler } from "./JS/controllers/screenSizeHandler.js";
import { initEventListener } from "./JS/controllers/init/initEventListener.js";
import { initUploadModal } from "./JS/controllers/init/initUploadModal.js";
import { closeDialog } from "./JS/controllers/handlers/modalHandler.js";

(function () {
  screenSizeHandler();
  initUploadModal();
  initEventListener();
})();

/**
 * will fix
 */
// const goBackHandler = () => {
//   console.log("pop");
//   closeDialog();
// };

// document.body.addEventListener("popstate", goBackHandler);

const container = document.getElementById("app");

const pages = createPages(container);

const router = createRouter();

router
  .addRoute("/", pages.home)
  .addRoute("/station/:id", pages.detail)
  .addRoute("/upload", pages.upload)
  .setNotFound(pages.notFound)
  .start();

/**
 * 브라우저 기본 이동 동작을 막고 navigate로 페이지만 바꿈 -> pushstate로 url 변경
 * data-navigate 속성을 안 주면 그냥 a태그로 이동하는 것과 같다는 것을 알 수 있다. -> 브라우저가 화면을 새로고침 함
 */
const NAV_A_SELECTOR = "a[data-navigate]";

document.body.addEventListener("click", (event) => {
  const { target } = event;

  if (target.matches(NAV_A_SELECTOR)) {
    event.preventDefault();
    router.navigate(target.href);
  }
});
