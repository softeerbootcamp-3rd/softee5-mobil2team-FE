export default (container) => {
  const home = () => {
    container.textContent = "This is Home page";
  };

  const detail = (params) => {
    const { id } = params;
    container.textContent = `This is Detail Page with Id ${id}`;
  };

  const notFound = () => {
    container.textContent = "Page Not Found!";
  };

  return {
    home,
    detail,
    notFound,
  };
};
