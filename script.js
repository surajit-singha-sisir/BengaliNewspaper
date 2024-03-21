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

// GALLERY SCECTION

// Active span change Event
$(document).ready(function () {
  $(".gallery-item span").on("click", function () {
    $(".gallery-item span").removeClass("active");
    $(this).addClass("active");
  });
});

// 3 Second scroll
$(document).ready(function () {
  function toggleActive() {
    var $active = $(".mobile-gallery-item .active");
    var $next = $active.next().length
      ? $active.next()
      : $(".mobile-gallery-item span").first();
    $active.removeClass("active");
    $next.addClass("active");
  }

  // Set interval to change active span every 3 seconds
  var interval = setInterval(toggleActive, 3000);

  // Pause on mouse hover
  $(".mobile-gallery-item").hover(
    function () {
      clearInterval(interval);
    },
    function () {
      interval = setInterval(toggleActive, 3000);
    }
  );
});

// ARTICLE PROGRESS BAR
$(document).ready(function () {
  $(window).on("scroll", function () {
    var windowHeight = $(window).height();
    var documentHeight = $(document).height();
    var scrollTop = $(window).scrollTop();

    var scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

    $(".progress-bar__mask").width(scrollPercent + "%");
  });
});


// HAMBURGER REVEAL
function toggleMenu() {
  $('.hamburger').toggleClass('fa-bars fa-x');
  $('.fullResNav').toggleClass('show');
}

//TAB TOGGLE
$(document).ready(function () {
      $(".tab-btn").click(function () {
          $(".tab-btn").removeClass('active');

      });
  });



$(document).ready(function () {
  $('#searchIcon').click(function () {
    $('.search-input').toggleClass('active'); // Toggle the 'active' class to show/hide input
    $(this).toggleClass('fa-search fa-x'); // Toggle the search icon to cross
  });

  $('#closeIcon').click(function () {
    $('.search-input').removeClass('active'); // Hide the input when close icon is clicked
    $('#searchIcon').removeClass('fa-x').addClass('fa-search'); // Change the cross back to search icon
  });
});

$(document).ready(function() {
  // Smooth scrolling for all anchor links
  $('a[href^="#"]').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if (target.length) {
          event.preventDefault();
          $('html, body').stop().animate({
              scrollTop: target.offset().top
          }, 6000); // Adjust the duration for slower or faster scrolling
      }
  });
});

// GALLERY SCECTION

// Active span change Event
$(document).ready(function () {
$(".gallery-item span").on("click", function () {
  $(".gallery-item span").removeClass("active");
  $(this).addClass("active");
});

// 3 Second scroll
function toggleActive() {
  var $active = $(".gallery-item .active");
  var $next = $active.next().length
    ? $active.next()
    : $(".gallery-item span").first();

  // Check if viewport width is 768px or less
  if ($(window).width() <= 768) {
    // Fade out the current active span
    $active.fadeOut("slow", function() {
      $active.removeClass("active");
      // Fade in the next span and add the active class
      $next.fadeIn("slow").addClass("active");
    });
  } 
  else {
    // No transition for larger devices, simply change the active class
    $active.removeClass("active");
    $next.addClass("active");
  }
}

// Set interval to change active span every 3 seconds
var interval = setInterval(toggleActive, 3000);

// Pause on mouse hover
$(".gallery-item").hover(
  function () {
    clearInterval(interval);
  },
  function () {
    interval = setInterval(toggleActive, 3000);
  }
);
});