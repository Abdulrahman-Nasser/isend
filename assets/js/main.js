
// loading page
$(window).ready(function () {
    $(".loader").fadeOut(1200, function () {
        $("body").css("overflow", "auto");
        $(".loading-spiner").fadeOut(1500);
    });
});

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
            nav_links.forEach(function (link) {
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

// slider

$(document).ready(function () {
    var owl = $('.owl-carousel'); owl.owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 3500,
        autoplayHoverPause: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
                nav: true,
                loop: true
            }
        }
    });
});

