// Making the hamburger open and close

const burger = document.querySelector("button.burger img");
const nav = document.querySelector(".nav ul");

burger.addEventListener("click", handleClick);

function handleClick() {
  if (burger.dataset.collapsed === "true") {
    handleOpen();
  } else {
    handleClose();
  }
}

function handleOpen() {
  nav.classList.add("opened");
  burger.src = "../img/icons/close.svg";
  document.querySelector("button.burger").classList.add("open");
  burger.dataset.collapsed = false;
}

function handleClose() {
  nav.classList.remove("opened");
  burger.src = "../img/icons/open.svg";
  document.querySelector("button.burger").classList.remove("open");
  burger.dataset.collapsed = true;
}
