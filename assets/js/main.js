header = document.querySelector(".header")
// nav_links = document.querySelectorAll(".nav-item")
window.addEventListener('scroll', function () {
    if (window.scrollY > 150) {
        header.classList.add("header2")
    } else {
        header.classList.remove("header2")
    }
});


const nav_links = document.querySelectorAll(".nav-item");
const sections = document.querySelectorAll(".sec");

function updateNavigation() {
    sections.forEach(function (section, index) {
        const sectionTop = section.offsetTop - header.offsetHeight;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (window.pageYOffset >= sectionTop && window.pageYOffset <= sectionBottom) {
            nav_links[index].classList.add("link-bg");
        } else {
            for (let i = 0; i < nav_links.length; i++) {
                nav_links[i].classList.remove("link-bg");
            }
        }
    });
}

window.addEventListener('scroll', function () {
    updateNavigation();
});

