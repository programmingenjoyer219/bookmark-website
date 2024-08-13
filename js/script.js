const hamburgerButton = document.getElementById("hamburger");
const hamburgerButtonIcon = hamburgerButton.querySelector("img");
const logo = document.querySelector("img#logo");
const mobileMenu = document.getElementById("mobile-menu");
const buttonFeature1 = document.querySelector("button#feature-1");
const buttonFeature2 = document.querySelector("button#feature-2");
const buttonFeature3 = document.querySelector("button#feature-3");
const feature1 = document.querySelector("#feature-content-1");
const feature2 = document.querySelector("#feature-content-2");
const feature3 = document.querySelector("#feature-content-3");

hamburgerButton.addEventListener("click", () => {
  hamburgerButton.classList.toggle("mobile-menu-active");
  toggleMobileMenu();
});

function toggleMobileMenu() {
  if (hamburgerButton.classList.contains("mobile-menu-active")) {
    hamburgerButtonIcon.setAttribute("src", "./images/icon-close.svg");
    logo.setAttribute("src", "./images/logo-bookmark-footer.svg");
    mobileMenu.style.display = "flex";
  } else {
    hamburgerButtonIcon.setAttribute("src", "./images/icon-hamburger.svg");
    logo.setAttribute("src", "./images/logo-bookmark.svg");
    mobileMenu.style.display = "none";
  }
}

buttonFeature1.addEventListener("click", () => {
  if (!buttonFeature1.classList.contains("feature-active")) {
    buttonFeature1.classList.add("feature-active");
    buttonFeature2.classList.remove("feature-active");
    buttonFeature3.classList.remove("feature-active");

    feature1.style.display = "grid";
    feature2.style.display = "none";
    feature3.style.display = "none";
  }
});

buttonFeature2.addEventListener("click", () => {
  if (!buttonFeature2.classList.contains("feature-active")) {
    buttonFeature1.classList.remove("feature-active");
    buttonFeature2.classList.add("feature-active");
    buttonFeature3.classList.remove("feature-active");

    feature1.style.display = "none";
    feature2.style.display = "grid";
    feature3.style.display = "none";
  }
});

buttonFeature3.addEventListener("click", () => {
  if (!buttonFeature1.classList.contains("feature-active")) {
    buttonFeature1.classList.remove("feature-active");
    buttonFeature2.classList.remove("feature-active");
    buttonFeature3.classList.add("feature-active");

    feature1.style.display = "none";
    feature2.style.display = "none";
    feature3.style.display = "grid";
  }
});