
console.log("JavaScript is connected successfully!");

// Select the menu button and navigation links
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Open and close the mobile menu
menuToggle.addEventListener("click", function() {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

});

// Close the menu when a navigation link is clicked
const navItems = document.querySelectorAll("#nav-links a");

navItems.forEach(function(item) {

    item.addEventListener("click", function() {

        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");

    });

});
