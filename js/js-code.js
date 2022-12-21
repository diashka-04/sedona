var link = document.querySelector(".button");

var popup = document.querySelector(".hotel-search-box");

var form = popup.querySelector("form");
var datein = popup.querySelector("[name=date-in]");
var dateout = popup.querySelector("[name=date-out]");

var storage = localStorage.getItem("login");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("hotel-search-box-show");

  if (storage) {
    datein.value = storage;
    dateout.focus();
  } else {
    datein.focus();
  }

});

form.addEventListener("submit", function(event) {
  if (!datein.value || !dateout.value) {
    event.preventDefault();
    popup.classList.remove("hotel-search-box-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("hotel-search-box-error");
  } else {
    localStorage.setItem("button", datein.value);
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("hotel-search-box-show")) {
      popup.classList.remove("hotel-search-box-show");
      popup.classList.remove("hotel-search-box-error");
    }
  }
});
