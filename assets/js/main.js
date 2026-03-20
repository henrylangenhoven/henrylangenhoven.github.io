const startDate = new Date("2015-01-12T00:00:00");

function fullYearsSince(date) {
  const now = new Date();
  let years = now.getFullYear() - date.getFullYear();
  const hasNotReachedAnniversary =
    now.getMonth() < date.getMonth() ||
    (now.getMonth() === date.getMonth() && now.getDate() < date.getDate());

  if (hasNotReachedAnniversary) {
    years -= 1;
  }

  return years;
}

document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

document.querySelectorAll("[data-experience-years]").forEach((element) => {
  element.textContent = `${fullYearsSince(startDate)}+`;
});

const header = document.querySelector(".site-header");
const toggle = document.querySelector(".nav-toggle");

if (header && toggle) {
  toggle.addEventListener("click", () => {
    const isOpen = header.getAttribute("data-open") === "true";
    header.setAttribute("data-open", String(!isOpen));
    toggle.setAttribute("aria-expanded", String(!isOpen));
  });

  document.querySelectorAll(".site-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      header.setAttribute("data-open", "false");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}
