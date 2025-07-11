import React from "react";
import { Progress } from "antd";
import {
  Navigation,
  Pagination,
  A11y,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const TechStack = () => {
  const twoColors = {
    "0%": "#f59e0b",
    "100%": "#ec4899",
  };
  const techStack = [
    {
      key: 1,
      name: "HTML",
      progress: 80,
      icon: "https://cdn-icons-png.flaticon.com/512/1532/1532556.png",
    },
    {
      key: 2,
      name: "CSS",
      progress: 70,
      icon: "https://icon-library.com/images/css3-icon/css3-icon-28.jpg",
    },
    {
      key: 3,
      name: "JavaScript",
      progress: 30,
      icon: "https://static.vecteezy.com/system/resources/previews/027/127/560/original/javascript-logo-javascript-icon-transparent-free-png.png",
    },
    {
      key: 4,
      name: "React",
      progress: 40,
      icon: "https://icons.veryicon.com/png/o/business/vscode-program-item-icon/react-3.png",
    },
    {
      key: 5,
      name: "Tailwind CSS",
      progress: 50,
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png?20230715030042",
    },
    {
      key: 6,
      name: "Node.js",
      progress: 35,
      icon: "https://cdn.freebiesupply.com/logos/large/2x/nodejs-icon-logo-png-transparent.png",
    },
    {
      key: 7,
      name: "Express.js",
      progress: 40,
      icon: "https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png",
    },
    {
      key: 8,
      name: "MongoDB",
      progress: 75,
      icon: "https://vectorseek.com/wp-content/uploads/2023/10/Mongodb-Icon-Logo-Vector.svg-.png",
    },
    {
      key: 9,
      name: "Git",
      progress: 80,
      icon: "https://images.icon-icons.com/2107/PNG/512/file_type_git_icon_130581.png",
    },
    {
      key: 10,
      name: "Java",
      progress: 25,
      icon: "https://abrudz.github.io/logos/Java.svg",
    },
    {
      key: 11,
      name: "Power BI",
      progress: 25,
      icon: "https://1000logos.net/wp-content/uploads/2022/12/Power-BI-Logo.png",
    },
    {
      key: 12,
      name: "Python",
      progress: 35,
      icon: "https://logos-world.net/wp-content/uploads/2021/10/Python-Emblem.png",
    },
  ];
  return (
    <div className="w-full">
      <h1 className="text-center text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 lg:mb-1 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-pink-500">
        Tech Stack
      </h1>

      <div className="relative flex items-center justify-center w-full h-full ">
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay, EffectCoverflow]}
          effect="coverflow"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          spaceBetween={30}
          slidesPerView={3}
          centeredSlides={true}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet-custom",
            bulletActiveClass: "swiper-pagination-bullet-active-custom",
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
              effect: "slide",
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 15,
              effect: "slide",
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
              effect: "slide",
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
              effect: "coverflow",
              coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              },
            },
          }}
          className="w-full max-w-6xl tech-stack-swiper"
        >
          {techStack.map((tech) => (
            <SwiperSlide key={tech.key} className="tech-slide ">
              <div className="group relative flex flex-col items-center justify-center p-3 sm:p-4 lg:p-8 h-82 sm:h-60 lg:h-80 rounded-xl transition-all duration-500 transform hover:scale-105 cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/90 via-gray-700/80 to-gray-900/90 backdrop-blur-lg rounded-xl border border-gray-600/30 group-hover:border-amber-400/50 transition-all duration-500"></div>

                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-pink-500/0 to-amber-400/0 group-hover:from-amber-400/10 group-hover:via-pink-500/10 group-hover:to-amber-400/10 rounded-xl transition-all duration-700"></div>

                <div className="relative z-10 flex flex-col items-center w-full h-full justify-center">
                  <div className="relative mb-3 sm:mb-4 lg:mb-6 p-2 sm:p-3 lg:p-4 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 group-hover:from-amber-400/20 group-hover:to-pink-500/20 transition-all duration-500">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400 to-pink-500 opacity-0 group-hover:opacity-20 blur-md transition-all duration-500"></div>
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="relative w-20 h-20 sm:w-10 sm:h-10 lg:w-16 lg:h-16 object-contain filter group-hover:brightness-110 transition-all duration-300"
                    />
                  </div>

                  <h3 className="text-xl sm:text-base lg:text-xl font-bold mb-2 sm:mb-3 lg:mb-4 text-center text-gray-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:to-pink-500 transition-all duration-300 px-2">
                    {tech.name}
                  </h3>

                  <div className="w-full max-w-xs px-2">
                    <div className="flex justify-between items-center mb-2 sm:mb-3">
                      <span className="text-xs sm:text-sm text-gray-300 font-medium">
                        Proficiency
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-amber-400">
                        {tech.progress}%
                      </span>
                    </div>
                    <div className="relative">
                      <Progress
                        showInfo={false}
                        percent={tech.progress}
                        strokeColor={twoColors}
                        trailColor="rgba(75, 85, 99, 0.3)"
                        strokeWidth={4}
                        className="tech-progress"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-pink-500/20 rounded-full opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500"></div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-2 sm:top-3 right-2 sm:right-3 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-br from-amber-400 to-pink-500 rounded-full opacity-60 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons - Show on desktop */}
        <div className="swiper-button-prev-custom hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gradient-to-r from-amber-400 to-pink-500 rounded-full items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 shadow-lg">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>
        <div className="swiper-button-next-custom hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gradient-to-r from-amber-400 to-pink-500 rounded-full items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 shadow-lg">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        /* Mobile styles */
        .tech-stack-swiper {
          padding: 15px 10px 0px 0px !important;
        }

        @media (min-width: 640px) {
          .tech-stack-swiper {
            padding: 20px 15px 60px 15px !important;
          }
        }

        /* Desktop styles - preserve original */
        @media (min-width: 1024px) {
          .tech-stack-swiper {
            padding: 35px 25px 80px 25px !important;
          }
        }

        .tech-stack-swiper .swiper-pagination {
          bottom: 10px !important;
          position: absolute !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
          width: auto !important;
          margin: 0 !important;
        }

        /* Desktop pagination - preserve original */
        @media (min-width: 1024px) {
          .tech-stack-swiper .swiper-pagination {
            top: 0px !important;
            bottom: auto !important;
          }
        }

        /* Mobile pagination bullets */
        .swiper-pagination-bullet-custom {
          width: 6px !important;
          height: 6px !important;
          background: linear-gradient(45deg, #f59e0b, #ec4899) !important;
          opacity: 0.4 !important;
          transition: all 0.3s ease !important;
          margin: 0 3px !important;
        }

        @media (min-width: 640px) {
          .swiper-pagination-bullet-custom {
            width: 8px !important;
            height: 8px !important;
            margin: 0 4px !important;
          }
        }

        /* Desktop pagination bullets - preserve original */
        @media (min-width: 1024px) {
          .swiper-pagination-bullet-custom {
            width: 12px !important;
            height: 12px !important;
            margin: 0 6px !important;
          }
        }

        .swiper-pagination-bullet-active-custom {
          opacity: 1 !important;
          transform: scale(1.3) !important;
          box-shadow: 0 0 15px rgba(245, 158, 11, 0.6) !important;
        }

        /* Desktop active bullets - preserve original */
        @media (min-width: 1024px) {
          .swiper-pagination-bullet-active-custom {
            box-shadow: 0 0 20px rgba(245, 158, 11, 0.6) !important;
          }
        }

        .tech-progress .ant-progress-bg {
          transition: all 0.3s ease !important;
        }

        .tech-slide:hover .tech-progress .ant-progress-bg {
          filter: drop-shadow(0 0 8px rgba(245, 158, 11, 0.4)) !important;
        }
      `}</style>
    </div>
  );
};

export default TechStack;
