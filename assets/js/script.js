'use strict';



/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElemArr = [navOpenBtn, navCloseBtn];

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
  });
}

/**
 * toggle navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
  });
}





/**
 * header active when window scrolled down
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 50 ? header.classList.add("active")
    : header.classList.remove("active");
});


      
      function validateRegistration() {
        // Get the values of the input fields
        const Name = document.getElementById("Name").value;
        const email = document.getElementById("email").value;
        const MobileNumber = document.getElementById("MobileNumber").value;
      
        const nameRegex = /^[a-zA-Z]{6,}$/;
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
        const mobileRegex = /^[0-9]{10}$/;
        // Validation checks
        const isValid = true;
      
        if (!nameRegex.test(Name)) {
            alert("First name should contain alphabets and be at least 6 characters long.");
            isValid = false;
        }
      
      if (!emailRegex.test(email)) {
          alert("Invalid email address. Please use the format name@domain.com.");
          isValid = false;
      }
      if (!mobileRegex.test(MobileNumber)) {
        alert("Mobile number should contain exactly 10 digits.");
        isValid = false;
      }
      if (isValid) {
                      alert("Thankyou your response is submitted!");
                      
                  }
      }
          
   /**
function validateRegistration() {
  // Get the values of the input fields
  const Name = document.getElementById("Name").value;
  const email = document.getElementById("email").value;
  const mobileNumber = document.getElementById("mobileNumber").value;

  const nameRegex = /^[a-zA-Z]{6,}$/;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
  const mobileRegex = /^[0-9]{10}$/;
  // Validation checks
  const isValid = true;

  if (!nameRegex.test(Name)) {
      alert("First name should contain alphabets and be at least 6 characters long.");
      isValid = false;
  }

if (!emailRegex.test(email)) {
    alert("Invalid email address. Please use the format name@domain.com.");
    isValid = false;
}
if (!mobileRegex.test(mobileNumber)) {
  alert("Mobile number should contain exactly 10 digits.");
  isValid = false;
}
}/** */
