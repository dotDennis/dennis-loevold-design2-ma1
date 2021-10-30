// Making the hamburger open and close

const burger = document.querySelector("button.burger i");
const nav = document.querySelector(".nav ul");

console.log(burger);

burger.addEventListener("click", handleClick);

function handleClick(event) {
  if (burger.dataset.collapsed === "true") {
    handleOpen();
  } else {
    handleClose();
  }
}

function handleOpen() {
  nav.classList.add("opened");
  burger.dataset.collapsed = false;
  burger.className = "fas fa-times";
}

function handleClose() {
  nav.classList.remove("opened");
  burger.className = "fas fa-bars";
  burger.dataset.collapsed = true;
}
