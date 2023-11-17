window.addEventListener("load", function () {
  document.body.classList += " bg-light";
  document.body.innerHTML += "";

  document.querySelectorAll("#popupWindow button").forEach((el, idx) => {
    el.addEventListener("click", function () {
      document.body.classList.remove("popupdiv");
    })
  })

})