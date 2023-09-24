const welcomeElement = document.getElementById("welcome");
const aboutElement = document.getElementById("about");
const servicesElement = document.getElementById("services");
const resumeElement = document.getElementById("resume");
const worksElement = document.getElementById("works");
const testimonialsElement = document.getElementById("testimonials");
const contactElement = document.getElementById("contact");

// Attaching the click event listener for WELCOME
welcomeElement.addEventListener("click", function() {
  // Your code here that will be executed when the element is clicked
  // Redirect the user to a specific URL
  window.location.href = "./welcomePg/welcome.html" // Replace "https://example.com" with your desired URL
});

// Attach the click event listener for ABOUT US
aboutElement.addEventListener("click", function() {
  window.location.href = "./aboutPg/about.html";
});

// Attach the click event listener for OUR SERVICES
servicesElement.addEventListener("click", function() {
  window.location.href = "./servicesPg/services.html";
});

// Attach the click event listener for RESUME
resumeElement.addEventListener("click", function() {
  window.location.href = "#"; 
});

// Attach the click event listener for WORKS
worksElement.addEventListener("click", function() {
  window.location.href = "./worksPg/works.html";
});

// Attach the click event listener for TESTIMONIALS
testimonialsElement.addEventListener("click", function() {
  window.location.href = "#";
});

// Attach the click event listener for CONTACT US
contactElement.addEventListener("click", function() {
  window.location.href = "./contactPg/contact.html"; 
});