import Swiper, { Navigation, Pagination, Autoplay, Scrollbar } from "swiper";

Swiper.use([Navigation, Pagination, Autoplay, Scrollbar]);

function blogSwiper() {
  const swiper = new Swiper(".card__swiper", {
    spaceBetween: 0,
    slidesPerView: 3,
    breakpoints: {
      375: {
        slidesPerView: 1.4,
        centeredSlides: true,
        spaceBetween: 40,
      },
      468: {
        slidesPerView: 1.6,
        centeredSlides: true,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 50,
      },
      820: {
        slidesPerView: 2,
        centeredSlides: true,
        spaceBetween: 50,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1368: {
        slidesPerView: 3,
        spaceBetween: 7,
      },
    },
  });
}

blogSwiper();

function secondCardSwiper() {
  const swiper = new Swiper(".second-card__swiper", {
    spaceBetween: 0,
    slidesPerView: 3,
    breakpoints: {
      375: {
        slidesPerView: 1.2,
        centeredSlides: true,
        
      },
      468: {
        slidesPerView: 1.5,
        centeredSlides: true,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 2.3,
        centeredSlides: true,
        spaceBetween: 50,
      },
      820: {
        slidesPerView: 2,
        centeredSlides: true,
        spaceBetween: 50,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1368: {
        slidesPerView: 3,
        spaceBetween: 7,
      },
    },
  });
}


secondCardSwiper();


function teamSwiper() {
    const swiper = new Swiper(".team__swiper", {
      spaceBetween: 10,
      slidesPerView: 3,
      navigation: {
        nextEl: '.team__swiper-button-next',
        prevEl: '.team__swiper-button-prev',
      },
      breakpoints:{
        375: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        468: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        768:{
            slidesPerView: 2,
        },
        1368:{
            slidesPerView: 4,
        }
      }
    });
  }
  
  teamSwiper();
