import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import "swiper/css/navigation";

const BenefitSection = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const imagesMain = [
    "assets/img/gallery/gallery3.jpeg",
    "assets/img/gallery/gallery2.png",
    "assets/img/gallery/gallery3.png",
    "assets/img/gallery/gallery4.png",
    "assets/img/gallery/gallery5.png"
  ];
  const imagesThumb = [
    "assets/img/gallery/gallery3.jpeg",
    "assets/img/gallery/gallery2.png",
    "assets/img/gallery/gallery3.png",
    "assets/img/gallery/gallery4.png",
    "assets/img/gallery/gallery5.png"
  ];


  return (
    <section
      className="benefit-area position-relative overflow-hidden bg-smoke"
      id="benefit-sec"
    >
      {/* === Background/Main Swiper === */}
      <div className="swiper th-slider benefitSlide" id="benefitSlideMain">
        <Swiper
          modules={[EffectFade, Thumbs, Autoplay, Navigation]}
          effect="fade"
          speed={2000}
          spaceBetween={20}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          className="swiper-wrapper"
          loop={true}
        >
          {imagesMain.map((src, idx) => (
            <SwiperSlide key={`main-${idx}`}>
              <div className="benefit-img">
                <img src={src} alt={`Main ${idx}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* === Foreground Content and Thumbnail Swiper === */}
      <div className="benefit-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-4">
              <div className="title-area">
                <span className="sub-title text-white text-anime-style-2">
                  Our Gallery
                </span>
              </div>
              <div className="title-area benefit-titlebox pe-xl-5">
                <h2 className="sec-title text-white text-anime-style-2">
                  Virtual Academy
                </h2>
                <p className="text-white wow fadeInUp">
                  Explore our latest student projects, classroom activities, and hands-on training sessions at TechCadd Jalandhar. See how we empower learners with real-world IT skills and industry exposure.
                </p>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="slider-area benefit-slider-thumb-wrap">
                <Swiper
                  modules={[Thumbs, Autoplay]}
                  onSwiper={setThumbsSwiper}
                  watchSlidesProgress={true}
                  slideToClickedSlide={true}
                  autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                  }}
                  speed={2000}
                  breakpoints={{
                    0: { slidesPerView: 1 },
                    575: { slidesPerView: 2 },
                    768: { slidesPerView: 2 },
                    992: { slidesPerView: 3 },
                    1200: { slidesPerView: 3 },
                    1300: { slidesPerView: 4 },
                  }}
                  spaceBetween={20}
                  className="swiper th-slider benefit-grid-thumb"
                  id="benefitSlideThumb"
                  loop={true}
                >
                  {imagesThumb.map((src, idx) => (
                    <SwiperSlide key={`thumb-${idx}`}>
                      <div className="box-img">
                        <img src={src} alt={`Thumb ${idx}`} />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
