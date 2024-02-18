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

//REPLACE HTML CLASS CONTENT
$(document).ready(function () {
  if ($(window).width() <= 720) {
    //REPLACE (FROM - TO)
    $(".navBar .logoNav .humburger-icon").appendTo(
      ".navBarRes .logoNavRes .humburger-icon-Res"
    );
    //REPLACE (FROM - TO)
    $(".navBar .logoNav .logo").appendTo(".navBarRes .logoNavRes .logo-Res");
    //REPLACE (FROM - TO)
    $(".navBar .navMenu").appendTo(".navBarRes .navMenuRes");
    //REPLACE (FROM - TO)
    $(".navBar .search-box").appendTo(".navBarRes .search-box-Res");

    //HIDE
    $(".blockA .block1").hide();
  }
});



// $(document).ready(function () {
//   // Function to handle responsive changes
//   function handleResponsive() {
//     if ($(window).width() < 720) {
//       // REPLACE (FROM - TO)
//       $(".navBar .logoNav .humburger-icon").appendTo(".navBarRes .logoNavRes .humburger-icon-Res");
//       // REPLACE (FROM - TO)
//       $(".navBar .logoNav .logo").appendTo(".navBarRes .logoNavRes .logo-Res");
//       // REPLACE (FROM - TO)
//       $(".navBar .navMenu").appendTo(".navBarRes .navMenuRes");
//       // REPLACE (FROM - TO)
//       $(".navBar .search-box").appendTo(".navBarRes .search-box-Res");

//     } else {
//       // HIDE
//       $(".navBar").show();
//     }
//   }

//   // Call the function initially and on window resize
//   $(window).on('resize', handleResponsive);
//   handleResponsive();
// });
