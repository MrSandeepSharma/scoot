const navBtn = document.getElementById("nav-btn")

navBtn.addEventListener("click", toggleNavbar)

function toggleNavbar() {
    navBtn.getAttribute("aria-expanded") === "true"
        ? navBtn.setAttribute("aria-expanded", false)
        : navBtn.setAttribute("aria-expanded", true)
}