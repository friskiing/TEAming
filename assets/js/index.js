document.addEventListener('DOMContentLoaded', function () {
    // ==============================
    // SCROLL TO TOP
    // ==============================

    const header = document.querySelector('.header');
    const scrollUpButton = document.getElementById('scrollUp');

    if (scrollUpButton) {
        const handleScroll = () => {
            const scrollY = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollY > 20) {
                if (header) {
                    header.classList.add('headerBc');
                }

                scrollUpButton.classList.add('visible');
            } else {
                scrollUpButton.classList.remove('visible');

                if (header) {
                    header.classList.remove('headerBc');
                }
            }
        };

        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        scrollUpButton.addEventListener('click', scrollToTop);

        handleScroll();
    }

    // ==============================
    // HAMBURGER MENU
    // ==============================

    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');
    const list = document.querySelector('.header__nav__list');
    const opacity = document.querySelector('.opacity');

    if (hamburger && menu && list) {
        hamburger.addEventListener('click', () => {
            menu.classList.toggle('activeHam');
            list.classList.toggle('listAct');

            if (opacity) {
                opacity.classList.toggle('opacityAct');
            }

            const isOpen = menu.classList.contains('activeHam');

            document.body.style.overflow = isOpen ? 'hidden' : 'auto';
        });

        if (opacity) {
            opacity.addEventListener('click', () => {
                menu.classList.remove('activeHam');
                list.classList.remove('listAct');
                opacity.classList.remove('opacityAct');

                document.body.style.overflow = 'auto';
            });
        }
    }

    // ==============================
    // SWIPER
    // ==============================

    const swiperElement = document.querySelector('.people__swiper');

    if (swiperElement && typeof Swiper !== 'undefined') {
        const swiper = new Swiper('.people__swiper', {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 20,

            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },

            breakpoints: {
                320: {
                    slidesPerView: 1,
                },

                767: {
                    slidesPerView: 2,
                },

                991: {
                    slidesPerView: 3,
                },
            },

            navigation: {
                nextEl: '.swiper__btns__next',
                prevEl: '.swiper__btns__prev',
            },
        });
    } else {
        console.warn('Swiper element yoki Swiper kutubxonasi topilmadi!');
    }

    console.log('JS работает');
    console.log('Swiper:', typeof Swiper);
});
