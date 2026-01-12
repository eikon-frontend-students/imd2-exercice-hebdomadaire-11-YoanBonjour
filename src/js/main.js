var Btn = document.querySelector(".button");
var Like = document.querySelector(".like");
var LikeNbrs = document.querySelector(".like-nbrs");
var Heart = document.querySelector("i");

Btn.addEventListener("click", function () {
  Btn.classList.add("is-active");
  Like.classList.add("is-active");
  LikeNbrs.classList.add("is-active");
  Heart.classList.add("is-active");

  let currentNbr = parseInt(LikeNbrs.textContent);
  LikeNbrs.textContent = currentNbr + 1;

  console.log("clicked");
  setTimeout(function () {
    Btn.classList.remove("is-active");
    Like.classList.remove("is-active");
    LikeNbrs.classList.remove("is-active");
    Heart.classList.remove("is-active");
  }, 2000);
});
