function showPage(pageId) {
  const pages = ["about-page", "portfolio-page", "contact-page"];
  pages.forEach(id => {
    document.getElementById(id).classList.add("hidden");
  });
  document.getElementById(pageId).classList.remove("hidden");
  window.scrollTo(0, 0);
}