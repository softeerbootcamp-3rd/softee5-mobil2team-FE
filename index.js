import createRouter from "./JS/router.js";
import createPages from "./JS/pages.js";

const container = document.getElementById("app");

const pages = createPages(container);

const router = createRouter();

router
  .addRoute("/", pages.home)
  .addRoute("/station/:id", pages.detail)
  .addRoute("/upload", pages.upload)
  .setNotFound(pages.notFound)
  .start();

const NAV_BTN_SELECTOR = "button[data-navigate]";

document.body.addEventListener("click", (e) => {
  const { target } = e;
  if (target.matches(NAV_BTN_SELECTOR)) {
    const { navigate } = target.dataset;
    router.navigate(navigate);
  }
});
