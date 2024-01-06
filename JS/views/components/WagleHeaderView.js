import { WagleTagListView } from "./WagleTagListView.js";

export const WagleHeaderView = (prevStation, currStation, nextStation) => {
  return `
<header class="wagle__header">
  <menu class="wagle__header__station">
    <button class="wagle__header__station__btn">${prevStation}</button>
    <div class="station__title">
      <svg
        class="circle"
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
      >
        <circle cx="6" cy="6" r="6" fill="#00DFA9" />
      </svg>
      <h3 class="station__title__text">${currStation}</h3>
    </div>
    <button class="wagle__header__station__btn">${nextStation}</button>
  </menu>
  ${WagleTagListView()}
</header>
    `;
};
