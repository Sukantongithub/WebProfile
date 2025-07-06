import React from "react";
import { Progress } from "antd";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
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
  ];
  return (
    <div className="">
      <h1 className="text-center text-3xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-pink-500">
        Tech Stack
      </h1>

      <div className="relative flex items-center justify-center p-4 h-full w-full">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow]}
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
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          pagination={{ 
            clickable: true,
            bulletClass: 'swiper-pagination-bullet-custom',
            bulletActiveClass: 'swiper-pagination-bullet-active-custom'
          }}
          scrollbar={{ draggable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
              effect: "slide",
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 25,
              effect: "slide",
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
              effect: "coverflow",
            },
          }}
          className="w-full max-w-6xl tech-stack-swiper h-full"
        >
          {techStack.map((tech) => (
            <SwiperSlide key={tech.key} className="tech-slide">
              <div className="group relative flex flex-col items-center justify-center p-8 h-80 rounded-xl transition-all duration-500 transform hover:scale-105 cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/90 via-gray-700/80 to-gray-900/90 backdrop-blur-lg rounded-xl border border-gray-600/30 group-hover:border-amber-400/50 transition-all duration-500"></div>
                
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-pink-500/0 to-amber-400/0 group-hover:from-amber-400/10 group-hover:via-pink-500/10 group-hover:to-amber-400/10 rounded-xl transition-all duration-700"></div>
                
                <div className="relative z-10 flex flex-col items-center w-full">
                  <div className="relative mb-6 p-4 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 group-hover:from-amber-400/20 group-hover:to-pink-500/20 transition-all duration-500">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400 to-pink-500 opacity-0 group-hover:opacity-20 blur-md transition-all duration-500"></div>
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="relative w-16 h-16 object-contain filter group-hover:brightness-110 transition-all duration-300"
                    />
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-center text-gray-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:to-pink-500 transition-all duration-300">
                    {tech.name}
                  </h3>

                  <div className="w-full max-w-xs">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm text-gray-300 font-medium">Proficiency</span>
                      <span className="text-sm font-bold text-amber-400">{tech.progress}%</span>
                    </div>
                    <div className="relative">
                      <Progress
                        showInfo={false}
                        percent={tech.progress}
                        strokeColor={twoColors}
                        trailColor="rgba(75, 85, 99, 0.3)"
                        strokeWidth={8}
                        className="tech-progress"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-pink-500/20 rounded-full opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500"></div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-3 right-3 w-2 h-2 bg-gradient-to-br from-amber-400 to-pink-500 rounded-full opacity-60 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gradient-to-r from-amber-400 to-pink-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 shadow-lg">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <div className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gradient-to-r from-amber-400 to-pink-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 shadow-lg">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .tech-stack-swiper {
          padding: 35px  25px !important;
        }
        
        .tech-stack-swiper .swiper-pagination {
          top: 0px !important;
          position: absolute !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
          width: auto !important;
          margin: 0 !important;
        }
        
        .swiper-pagination-bullet-custom {
          width: 12px !important;
          height: 12px !important;
          background: linear-gradient(45deg, #f59e0b, #ec4899) !important;
          opacity: 0.4 !important;
          transition: all 0.3s ease !important;
          margin: 0 6px !important;
        }
        
        .swiper-pagination-bullet-active-custom {
          opacity: 1 !important;
          transform: scale(1.3) !important;
          box-shadow: 0 0 20px rgba(245, 158, 11, 0.6) !important;
        }
        
        .tech-progress .ant-progress-bg {
          transition: all 0.3s ease !important;
        }
        
        .tech-slide:hover .tech-progress .ant-progress-bg {
          filter: drop-shadow(0 0 8px rgba(245, 158, 11, 0.4)) !important;
        }
        
        .tech-stack-swiper .swiper-scrollbar {
          background: rgba(75, 85, 99, 0.3) !important;
          height: 6px !important;
          border-radius: 3px !important;
          bottom: 0px !important;
        }
        
        .tech-stack-swiper .swiper-scrollbar-drag {
          background: linear-gradient(45deg, #f59e0b, #ec4899) !important;
          border-radius: 3px !important;
        }
      `}</style>
    </div>
  );
};

export default TechStack;
