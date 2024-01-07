export const HomeView = () => {
  return `
<header>
    <a data-navigate href="/upload" class="go-upload">
        <img src="assets/pencil_img.svg" />
    </a>
    <a data-navigate href="/station/1">충정로역</a>
    <a data-navigate href="/station/2">아현역</a>
    <a data-navigate href="/dummy">404</a>
</header>
    `;
};
