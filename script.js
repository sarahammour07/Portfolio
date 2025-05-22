document.addEventListener('DOMContentLoaded', function() {
    // Carrousel compétences (défilement par 3)
    const group = document.querySelector('.skills-group');
    const items = Array.from(group.querySelectorAll('.skill-item'));
    const leftArrow = document.querySelector('.carousel-arrow.left');
    const rightArrow = document.querySelector('.carousel-arrow.right');
    const visibleCount = window.innerWidth <= 600 ? 2 : 3;
    let currentIndex = 0;

    function updateCarousel() {
        const width = group.querySelector('.skill-item').offsetWidth + 20; // 20px margin
        group.style.transform = `translateX(-${currentIndex * width}px)`;
    }

    function goLeft() {
        if (currentIndex - visibleCount >= 0) {
            currentIndex -= visibleCount;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    }

    function goRight() {
        if (currentIndex + visibleCount < items.length) {
            currentIndex += visibleCount;
        } else {
            currentIndex = items.length - visibleCount;
            if (currentIndex < 0) currentIndex = 0;
        }
        updateCarousel();
    }

    leftArrow.addEventListener('click', goLeft);
    rightArrow.addEventListener('click', goRight);

    // Responsive : recalcule le nombre d'items visibles
    window.addEventListener('resize', () => {
        updateCarousel();
    });

    // Initialisation
    updateCarousel();
});

// Swiper compétences
if (document.querySelector('.skills-swiper')) {
    new Swiper('.skills-swiper', {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 32,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: false,
        breakpoints: {
            0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
            },
            600: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
            900: {
                slidesPerView: 3,
                slidesPerGroup: 3,
            }
        }
    });
} 
