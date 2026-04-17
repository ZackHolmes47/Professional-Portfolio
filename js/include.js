document.addEventListener("DOMContentLoaded", async () => {
  // Load Header
  const headerSpot = document.getElementById("site-header");
  if (headerSpot) {
    const headerRes = await fetch("partials/header.html");
    headerSpot.innerHTML = await headerRes.text();
  }

  // Load Footer
  const footerSpot = document.getElementById("site-footer");
  if (footerSpot) {
    const footerRes = await fetch("partials/footer.html");
    footerSpot.innerHTML = await footerRes.text();
  }

  // Set footer year if the element exists
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
