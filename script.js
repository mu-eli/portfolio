// Automatically set the current year in the footer
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

const btnNavEl = document.querySelector(".btn-mobile--nav");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

function showSection(sectionId, buttonElement) {
  // Hides all the sections
  let sections = document.querySelectorAll(".section");
  sections.forEach(function (section) {
    section.classList.remove("active");
  });

  // Shows the selected section as active
  document.getElementById(sectionId).classList.add("active");

  // Removes active class from all buttons
  let buttons = document.querySelectorAll("nav button");
  buttons.forEach(function (button) {
    button.classList.remove("active");
  });

  // Add active class to the clicked button
  buttonElement.classList.add("active");
}

function setActive(section) {
  document.getElementById("about").classList.remove("active");
  document.getElementById("experience").classList.remove("active");
  document.getElementById("work").classList.remove("active");
  document.getElementById("contact").classList.remove("active");

  if (section === "about") {
    document.getElementById("about").classList.add("active");
  }
  if (section === "experience") {
    document.getElementById("experience").classList.add("active");
  } else if (section === "work") {
    document.getElementById("work").classList.add("active");
  } else if (section === "contact") {
    document.getElementById("contact").classList.add("active");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (window.location.pathname.includes("index.html")) {
    setActive("about");
  } else if (window.location.pathname.includes("experience.html")) {
    setActive("experience");
  } else if (window.location.pathname.includes("work.html")) {
    setActive("work");
  } else if (window.location.hash.includes("#contact")) {
    setActive("contact");
  }
});

function showSection(sectionId, buttonElement) {
  // Hide all sections
  let sections = document.querySelectorAll(".section");
  sections.forEach(function (section) {
    section.classList.remove("active");
  });

  // Show the selected section
  document.getElementById(sectionId).classList.add("active");

  // Remove active class from all buttons
  let buttons = document.querySelectorAll("nav button");
  buttons.forEach(function (button) {
    button.classList.remove("active");
  });

  // Add active class to the clicked button
  if (buttonElement) {
    buttonElement.classList.add("active");
  }
}

// Function to check URL fragment and activate the correct section
function checkFragment() {
  // Get the fragment from the URL (e.g., #dashboards)
  let fragment = window.location.hash.substring(1); // remove the '#' character

  if (fragment) {
    // Show the section and activate the button based on the fragment
    let button = document.querySelector(`button[data-section="${fragment}"]`);
    if (button) {
      showSection(fragment, button);
    }
  } else {
    // Default to landing section if no fragment is present
    showSection(
      "landing",
      document.querySelector('button[data-section="landing"]')
    );
  }
}

// Run the function when the page loads
// window.onload = checkFragment;

// Smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");

    // Allow external links and full-page navigation (like index.html)
    if (href.startsWith("http") || href.includes(".html")) {
      return; // Do nothing, let the browser navigate
    }

    // Prevent default behavior for internal navigation
    e.preventDefault();

    // Scrolls to the top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // Smooth scroll to sections
    if (href.startsWith("#") && href.length > 1) {
      const sectionEl = document.querySelector(href);
      if (sectionEl) {
        sectionEl.scrollIntoView({ behavior: "smooth" });
      }
    }

    // Close mobile navigation if a main nav link is clicked
    if (link.classList.contains("main-nav--link")) {
      document.querySelector(".header").classList.toggle("nav-open");
    }
  });
});

window.onload = function () {
  // Scroll to the top of the page
  window.scrollTo(0, 0);

  // Run the checkFragment function to handle the URL fragment
  checkFragment();
};
