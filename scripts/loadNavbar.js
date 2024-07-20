document.addEventListener("DOMContentLoaded", () => {
  // async function to fetch and display navbar
  async function getNavbar() {
    // error handling for handling errors
    try {
      // handling the response from the request
      const response = await fetch("navbar.html");
      // throwing a error if the response was not ok
      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
        // converting the response object to html content
        const data = await response.text();
        // calling function to display the htmlcontent (navbar)
        displayNavbar(data);
      }
    } catch (error) {
      // handling the error (if any occurs)
      console.error("Error loading navbar:", error);
    }
  }
  getNavbar();
});

// displaying the navbar
function displayNavbar(data) {
  document.querySelector(".navigate-bar").innerHTML = data;
  boldFunction();
}

function boldFunction() {
  // select the path the current page
  const path = window.location.pathname;

  // get all links
  const links = document.querySelectorAll(".focus-class");
  console.log(links);
  // iterate over the links to find our current page path
  links.forEach((link) => {
    // checking the path
    if (link.getAttribute("href") === path) {
      link.classList.add("bold-class");
    }
  });
}
