"use strict";
const btnToggleBg = document.querySelector(".btn__toggle-bg");
const btnTurnOffToggleBg = document.querySelector(".btn__turn-off");

const msg = document.querySelector(".chat__msg");
const btnSendMsg = document.querySelector(".btn__send");

const footContainer = document.querySelector(".football__field");
const footPlayer = document.querySelector(".football__player");
const btnTurnOffMoving = document.querySelector(".btn__stop-moving");

const marioContainer = document.querySelector(".mario__container");
const mario = document.querySelector(".mario__img");
const marioRun = document.querySelector(".mario__img--running");

const galleryContainer = document.querySelector(".gallery__container");

// 1
const toggleBg = () =>
  document.querySelector("body").classList.toggle("dark-bg");

btnToggleBg.addEventListener("click", toggleBg);

btnTurnOffToggleBg.addEventListener("click", function () {
  btnToggleBg.removeEventListener("click", toggleBg);
});

// 2
btnSendMsg.addEventListener("click", function () {
  let message = msg.value;
  if (!message) return;
  const html = `
    <p>${message}</p>
  `;
  document
    .querySelector(".chat__display")
    .insertAdjacentHTML("beforeend", html);
  msg.value = "";
});

// 3
let movePlayer;

footContainer.addEventListener(
  "click",
  (movePlayer = function (e) {
    const rect = e.currentTarget.getBoundingClientRect();
    footPlayer.style.left = e.clientX - rect.left - 30 + "px";
    footPlayer.style.top = e.clientY - rect.top - 30 + "px";
  })
);

btnTurnOffMoving.addEventListener("click", function () {
  footContainer.removeEventListener("click", movePlayer);
});

// 4
window.addEventListener("keydown", function (e) {
  if (e.code === "ArrowRight") {
    marioContainer.style.backgroundPositionX = "10%";
    marioRun.classList.remove("hidden");
    mario.classList.add("hidden");
  }
});

window.addEventListener("keyup", function (e) {
  if (e.code === "ArrowRight") {
    marioRun.classList.add("hidden");
    mario.classList.remove("hidden");
  }
});

// 4
galleryContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("gallery__item--large")) {
    // stop propagation
    e.stopPropagation();
  }
  if (e.target.classList.contains("gallery__item")) {
    [...e.target.closest(".gallery__container").children].forEach(el =>
      el.classList.remove("border")
    );
    e.target.classList.add("border");
  }
});
document.addEventListener("click", function (e) {
  console.log(e.target);
});
