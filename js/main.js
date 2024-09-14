// Toggle content function
function toggleContent(element) {
    const content = element.nextElementSibling;
    const icon = element.querySelector('.ski-icon');
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        icon.textContent = "-";
    } else {
        content.style.display = "none";
        icon.textContent = "+";
    }
}

// Close mobile menu when a nav link is clicked
$(document).ready(function() {
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
});

// Custom smooth scrolling function
function customSmoothScroll(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    const targetPosition = targetId === 'Home' ? 0 : targetElement.offsetTop - navbarHeight;

    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let startTime = null;

    function animationScroll(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animationScroll);
    }

    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animationScroll);
}

// Initialize custom smooth scrolling
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a.nav-link');
    links.forEach(link => link.addEventListener('click', customSmoothScroll));
});

// Profile picture hover effect
document.addEventListener('DOMContentLoaded', function() {
    const profilePic = document.querySelector('.profile-picture img');
    const originalSrc = profilePic.src;
    const hoverSrc = profilePic.getAttribute('data-hover');

    profilePic.addEventListener('mouseover', function() {
        this.src = hoverSrc;
    });

    profilePic.addEventListener('mouseout', function() {
        this.src = originalSrc;
    });
});