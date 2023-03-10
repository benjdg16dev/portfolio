import React, {
  forwardRef,
  RefObject,
  useState,
  useRef,
  useImperativeHandle,
} from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase, FaSchool, FaStar } from "react-icons/fa";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleLeft,
  faAngleRight,
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "../../styles/swiper-custom.css";
// import "swiper/css/scrollbar";

import { TOOLS } from "../../constants";
import { ICard } from "../../components/Card/Card";

import SwiperCore, {
  A11y,
  Autoplay,
  Mousewheel,
  Pagination,
  Scrollbar,
  EffectFade,
  FreeMode,
  Navigation,
} from "swiper";

import Card from "../../components/Card";
import { cardData } from "../../data";

import "./Experience.css";

type TProps = {
  isExpTLVisible: boolean;
};
export type TExperienceHandler = {
  experienceRef: RefObject<HTMLElement>;
};

const cardArray: ICard[] = [
  {
    application: "X",
    company: "X",
    date: "X",
    // duration: "1 year",
    titles: ["Front end developer / Designer"],
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Duis volutpat leo vitae nisl euismod tincidunt.",
      "Fusce tempor mauris sit amet mi convallis, a bibendum libero egestas.",
      "Integer pharetra pellentesque risus, non porttitor eros commodo at.",
    ],
    chips: [TOOLS.AZURE, TOOLS.REACT],
  },
];

const Experience = forwardRef<TExperienceHandler, TProps>((props, ref) => {
  const { isExpTLVisible } = props;

  const experienceRef = useRef<HTMLElement>(null);
  const experienceCardContainerRef = useRef<HTMLElement>(null);

  useImperativeHandle(ref, () => ({
    experienceRef,
  }));

  // React.useEffect(() => {
  //   // SwiperCore.use([EffectCoverflow, Pagination]);

  //   console.log(isExpTLVisible);
  // }, [isExpTLVisible]);

  return (
    <section id="experience" ref={experienceRef}>
      {/* <Card /> */}
      <div className="experience-container">
        <div className="experience-text">
          <div className="experience-title">
            <h1>experience</h1>
          </div>
          <div className="experience-subtitle">
            <p>
              My work and experience are done in-house and therefore cannot be
              shared publicly.
            </p>
            <p>However, I provided descriptions on some of them.</p>
          </div>
        </div>
        {/* <Card /> */}
        <div className="swiper-flex-container">
          <div className="swiper-container">
            <Swiper
              className="experience-swiper"
              // modules={[EffectCoverflow]}
              modules={[
                A11y,
                Autoplay,
                // EffectCoverflow,
                Mousewheel,
                Pagination,
                // Scrollbar,
                // EffectFade,
                FreeMode,
                Navigation,
              ]}
              // effect="fade"
              // effect="fade"
              // freeMode={true}
              pagination={{
                clickable: true,
              }}
              // scrollbar={{ draggable: true }}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={1}
              spaceBetween={0}
              autoplay={{
                delay: 3000,
                pauseOnMouseEnter: true,
              }}
              // coverflowEffect={{
              //   depth: 10,
              //   modifier: 1,
              //   rotate: 50,
              //   scale: 1,
              //   stretch: 0,
              // }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              loop={true}
              // autoHeight={true}
              // onSlideChange={() => console.log("slide change")}
              // onSwiper={(swiper) => console.log(swiper)}
              // autoHeight={true}
              breakpoints={{
                // when window width is >= 320px
                320: {
                  slidesPerView: 1,
                  // spaceBetween: 20,
                },
                // when window width is >= 480px
                480: {
                  slidesPerView: 2,
                  // spaceBetween: 30,
                },
                // when window width is >= 640px
                640: {
                  slidesPerView: 3,
                  // spaceBetween: 40,
                },
              }}
            >
              {cardData.map((data, index) => {
                return (
                  <SwiperSlide key={`swiper-slide-${index}`}>
                    <Card {...data} />
                  </SwiperSlide>
                );
              })}
              <div className="slider-buttons">
                <button className="swiper-button-prev">
                  <FontAwesomeIcon icon={faCircleChevronLeft} />
                </button>
                <button className="swiper-button-next">
                  <FontAwesomeIcon icon={faCircleChevronRight} />
                </button>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Experience;
