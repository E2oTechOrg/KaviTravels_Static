fetch("navbar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar-container").innerHTML = data;
  });
fetch("footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer-container").innerHTML = data;
  });

fetch("topheader.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("topheader-container").innerHTML = data;
  });
fetch("spinner.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("spinner-container").innerHTML = data;
  });

// Load the navbar dynamically
fetch("navbar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar-container").innerHTML = data;

    // Call function to set active class after navbar is loaded
    setActiveNav();
  });

function setActiveNav() {
  // Get the current page filename
  const currentPage = window.location.pathname.split("/").pop() || "index.html"; // Default to index.html if empty

  // Select all nav links
  const navLinks = document.querySelectorAll(".nav-item.nav-link");

  // Loop through links and set active class dynamically
  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}
