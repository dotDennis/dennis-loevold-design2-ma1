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
  burger.dataset.collapsed = false;
  burger.src = "../img/icons/close.svg";
}

function handleClose() {
  nav.classList.remove("opened");
  burger.src = "../img/icons/open.svg";
  burger.dataset.collapsed = true;
}
