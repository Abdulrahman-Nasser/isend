
// loading page
window.addEventListener('load', function () {
    $(window).ready(function () {
        $(".loader").fadeOut(1200, function () {
            $("body").css("overflow", "auto");
            $(".loading-spiner").fadeOut(1500);
        });
    });
})

// ## //

// back to top
// btn-top
var btn_top = document.querySelector("#top");
var whatsup = document.querySelector("#whats_logo")
console.log(btn_top);

window.onscroll = function () {
    if (scrollY >= 100) {
        btn_top.classList.add("btn-visible");
        whatsup.classList.add("whats_logo2");
        btn_top.classList.remove("to-up");
    } else {
        btn_top.classList.remove("btn-visible");
        whatsup.classList.remove("whats_logo2");
        btn_top.classList.add("to-up");
    }
};
// ## //


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
new PureCounter({
    // Setting that can't' be overriden on pre-element
    selector: ".purecounter", // HTML query selector for spesific element
    start: 0,
    end: 100,
    duration: 2, // The time in seconds for the animation to complete [seconds]
    delay: 10, // The delay between each iteration (the default of 10 will produce 100 fps) [miliseconds]
    once: true, // Counting at once or recount when the element in view [boolean]
    pulse: false, // Repeat count for certain time [boolean:false|seconds]
    decimals: 0, // How many decimal places to show. [uint]
    legacy: true, // If this is true it will use the scroll event listener on browsers
    filesizing: false, // This will enable/disable File Size format [boolean]
    currency: false, // This will enable/disable Currency format. Use it for set the symbol too [boolean|char|string]
    formater: "us-US", // Number toLocaleString locale/formater, by default is "en-US" [string|boolean:false]
    separator: false, // This will enable/disable comma separator for thousands. Use it for set the symbol too [boolean|char|string]
});// ## //


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

