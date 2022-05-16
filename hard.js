letbtnRed = document.querySelector("#btn-Red");
letbtnWhite = document.querySelector("#btn-white");
etdropdown = document.querySelector("select");
btnRed.addEventlistner("click", () => {
  document.body.style.background = "red";
});
btnRed.addEventlistner("click", () => {
  document.body.style.background = "white";
});
dropdown.ad.addEventlistner("change", function () {
  const color = this.value;
  switch (color) {
    case "red":
      document.body.style.background = "red";
      break;
    case "white":
      document.body.style.background = "White";
      break;
    default:
      document.body.style.background = "blue";
      break;
  }
});
