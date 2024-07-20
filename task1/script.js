// script.js

document.addEventListener('scroll', function() {
    const parallaxSections = document.querySelectorAll('.section');

    parallaxSections.forEach(section => {
        let scrollPosition = window.pageYOffset;
        let sectionOffsetTop = section.offsetTop;
        let sectionHeight = section.clientHeight;
        let sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionOffsetTop - sectionHeight && scrollPosition < sectionOffsetTop + sectionHeight) {
            section.style.backgroundPositionY = (scrollPosition - sectionOffsetTop) * 0.7 + 'px'; // Adjust the factor (0.7) for different speed
        }
    });
});
