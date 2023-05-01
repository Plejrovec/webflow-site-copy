const hamburger = document.querySelector("[data-hamburger-menu-toggle]")
const navLinks  = document.querySelector("[data-navbar-links]")
const links = document.querySelectorAll("[data-navbrar-link]")

hamburger.addEventListener("click", ()=> {
    navLinks.classList.toggle("open")
    links.forEach(link => {
        link.classList.toggle("fade")
    })
})

const contactLink = document.querySelectorAll("[data-contact-link]")
contactLink.forEach(link=>{
    link.addEventListener("click", (e)=> {
        e.preventDefault()
        document.querySelector("[data-contact-section]").scrollIntoView({
            behavior: "smooth"
        })
    })
})
