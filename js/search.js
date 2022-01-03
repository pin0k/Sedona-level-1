const searchLink = document.querySelector(".button-search");
const searchPopup = document.querySelector(".modal-search");
const appointmentForm = searchPopup.querySelector(".appointment-form");
const inputArrivalDate = searchPopup.querySelector("input[name=arrival-date]");
const inputDepartureDate = searchPopup.querySelector("input[name=date-of-departure]");
const inputAdults = searchPopup.querySelector("input[name=adults]");
const inputChildren = searchPopup.querySelector("input[name=children]");

let isStorageSupport = true;
let storageAdults = "";
let storageChildren = "";

try {
  storageAdults = localStorage.getItem("adults");
  storageChildren = localStorage.getItem("children");
} catch (err) {
  isStorageSupport = false;
}

if (storageAdults) {
  inputAdults.value = storageAdults;
}

if (storageChildren) {
  inputChildren.value = storageChildren;
}

searchLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  searchPopup.classList.toggle("modal-show");

  inputArrivalDate.focus();
});

appointmentForm.addEventListener("submit", function (evt) {
  if (!inputArrivalDate.value || !inputDepartureDate.value) {
    evt.preventDefault();
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adults", inputAdults.value);
      localStorage.setItem("children", inputChildren.value);
    }
  }
});
