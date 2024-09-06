// Get elements by ID
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

// Add click event listener to the menu icon
menuBtn.addEventListener("click", (e) => {
    // Toggle the 'open' class on the nav menu
    navLinks.classList.toggle("open");

    // Change the icon based on the menu state
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.querySelector("i").setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-3-line");
});






const ScrollRevealOption = {
    distance: "50px",
    origin: "button",
    duration: 1000,
};
//about header container
ScrollReveal().reveal(".header_container h1",{
    ...ScrollRevealOption,
});

ScrollReveal().reveal(".header_container .btn",{
    ...ScrollRevealOption,
    delay: 500,
});

//about container
ScrollReveal().reveal(".about_item",{
    ...ScrollRevealOption,
    interval: 500,
});

//stat container
ScrollReveal().reveal(".stat",{
    ...ScrollRevealOption,
    interval: 500,
});

ScrollReveal().reveal(".stat_image img",{
    ...ScrollRevealOption,
    interval: 500,
    origin: "right",
});

ScrollReveal().reveal(".stat_card",{
    ...ScrollRevealOption,
    interval: 500,
    duration: 500,
    delay: 1000,
});

//blog container

ScrollReveal().reveal(".blog",{
    ...ScrollRevealOption,
    interval: 500,
});

ScrollReveal().reveal(".blog_card",{
    ...ScrollRevealOption,
    interval: 500,
});








