// SEARCH BUTTON
document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.getElementById("search-button");
  const searchInput = document.getElementById("search-box");

  searchButton.addEventListener("click", function () {
    if (!searchInput.classList.contains("active")) {
      expandInput(searchInput);
      searchInput.style.width = "70vw";
      searchButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
      collapseInput(searchInput);
      searchButton.innerHTML = '<i class="fa-solid fa-magnifying-glass"></i>';
    }
  });
});

function expandInput(input) {
  input.classList.add("active");
  input.style.width = "0";
  input.style.display = "block";
  const maxWidth = input.offsetWidth;
}

function collapseInput(input) {
  input.style.width = "0";
  input.style.display = "none";
  input.classList.remove("active");
}

// RES NAV TOGGLE
function toggleResNav() {
  var resNav = document.querySelector(".resNav");
  resNav.classList.toggle("show");
}

document
  .getElementById("hamburger-icon")
  .addEventListener("click", toggleResNav);




  // gallery js 

  // grab all panel classes
const panels = document.querySelectorAll(".panel");

// loop through the node list
panels.forEach((panel) => {
  // listen for a click
  panel.addEventListener("click", () => {
    removeActive();
    // if clicked -> add a class of active (so also flex = 5)
    panel.classList.add("active");
  });
});

// function to remove active class from elements
function removeActive() {
  // loop through panels
  panels.forEach((panel) => {
    // remove active classes from panel objects
    panel.classList.remove("active");
  });
}
