window.addEventListener("load", function () {
  document.body.classList += " bg-light";
  document.body.innerHTML += "";

  document.querySelector("#popupWindow button").addEventListener("click", function () {
    document.body.classList.remove("popupdiv");
  })
})