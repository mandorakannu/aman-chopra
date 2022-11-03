// This Function is used for display hamburger for sm devices. {sm === small mobile screens}

function displayHamburger() {
  let element = document.getElementById("menu");
  if (element.style.display === "flex") {
    element.style.display = "none";
  } else {
    element.style.display = "flex";
  }
}
export default displayHamburger;
