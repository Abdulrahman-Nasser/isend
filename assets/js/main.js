// smoth header
header = document.querySelector(".header")
window.addEventListener('scroll', function () {
    if (window.scrollY > 150) {
        header.classList.add("header2")
    } else {
        header.classList.remove("header2")
    }
});
// ## //

// counter
new PureCounter();
// ## //


// color the header linkes
const nav_links = document.querySelectorAll(".nav-item");
const sections = document.querySelectorAll(".sec");
function updateNavigation() {
    sections.forEach(function (section, index) {
        const sectionTop = section.offsetTop - header.offsetHeight;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (window.pageYOffset >= sectionTop && window.pageYOffset <= sectionBottom) { 
            // Add link-bg class to the current section's navlink, and remove from others
            nav_links.forEach(function(link) {
                link.classList.remove("link-bg");
            });
            nav_links[index].classList.add("link-bg");
        }
    });
}

window.addEventListener('scroll', function () {
    updateNavigation();
}); 
// ## //


