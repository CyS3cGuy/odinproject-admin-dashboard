sidebar.querySelector(".inner-container .back").addEventListener("click", () => {
    sidebar.classList.add("mobile-hide"); 
})

header.querySelector(".menu-icon .hamburger").addEventListener("click", () => {
    sidebar.classList.remove("mobile-hide"); 
})