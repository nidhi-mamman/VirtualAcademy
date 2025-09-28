import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

const caseData = [
  { img: "assets/img/case/case_1_1.jpg", title: "Web & Mobile Development", subtitle: "Development" },
  { img: "assets/img/case/case_1_2.jpg", title: "Ui/Ux Design", subtitle: "Ui/Ux Design" },
  { img: "assets/img/case/case_1_3.jpg", title: "Backend Development", subtitle: "Python" },
  { img: "assets/img/case/case_1_4.jpg", title: "Python Development", subtitle: "JavaScript" },
  { img: "assets/img/case/case_1_5.jpg", title: "Apps Development", subtitle: "Java" },
];

const CaseSwiper = () => {
  return (
    <Swiper
      modules={[EffectCoverflow, Autoplay]}
      loop={true}
      effect="coverflow"
      centeredSlides={true}
      initialSlide={3}
      slidesPerView={3}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: 0,
        stretch: 95,
        depth: 212,
        modifier: 1,
      }}
      breakpoints={{
        0: { slidesPerView: 1 },
        576: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
        1200: { slidesPerView: 3 },
      }}
      className="th-slider case-slider"
    >
     
      {caseData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="case-box">
            <div className="case-img">
              <img
                src={item.img}
                alt="case image"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div className="case-content">
                <div className="media-left">
                  <h4 className="box-title">
                    <a href="case-study-details.html">{item.title}</a>
                  </h4>
                  <span className="case-subtitle">{item.subtitle}</span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CaseSwiper;
