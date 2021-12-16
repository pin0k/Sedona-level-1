const searchLink = document.querySelector(".button-search");
const searchPopup = document.querySelector(".modal-search");
const appointmentForm = searchPopup.querySelector(".appointment-form");
const inputArrivalDate = searchPopup.querySelector("input[name=arrival_date]");
const inputDepartureDate = searchPopup.querySelector("input[name=date_of_departure]");

searchLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  searchPopup.classList.toggle("modal-show");
  inputArrivalDate.focus();
});

appointmentForm.addEventListener("submit", function (evt) {
  if (!inputArrivalDate.value || !inputDepartureDate.value) {
    evt.preventDefault();
  }
});
