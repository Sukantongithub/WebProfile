import React from "react";
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

import CSS from "../../assets/css.png";
import SQL from "../../assets/sql.png";
import CRUD from "../../assets/CRUD.png";
import NPTEL from "../../assets/Nptel_iot.png";
import Developer from "../../assets/Developer.jpg";
import Oracle from "../../assets/Oracle.png";
import Nptel_python from "../../assets/Nptel_python.png";
const Certification = () => {
  const certs = {
    css: {
      name: "CSS basics in Hackerrank",
      image: CSS,
      link: "https://www.hackerrank.com/certificates/76f6e38d7eaa",
      issuer: "HackerRank",
    },
    sql: {
      name: "SQL basics in Hackerrank",
      image: SQL,
      link: "https://www.hackerrank.com/certificates/19a1ed4476e8",
      issuer: "HackerRank",
    },
    crud: {
      name: "CRUD Operations in MongoDB",
      image: CRUD,
      link: "https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/6eef8e14-78d0-4eba-a2df-e89cd60c18b4-sukant-r-beb61a8e-76e9-4274-9941-f63997e04689-certificate.pdf",
      issuer: "MongoDB University",
    },
    nptel: {
      name: "Introduction To Industry 4.0 And Industrial Internet Of Things",
      image: NPTEL,
      link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs43/Course/NPTEL25CS43S64900019204339860.pdf",
      issuer: "Nptel Swayam",
    },
    developer: {
      name: "MongoDB Certified Developer",
      image: Developer,
      link: "https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/6eef8e14-78d0-4eba-a2df-e89cd60c18b4-sukant-r-6c00b9de-89b0-441d-a787-faf0f2dc2d3c-certificate.pdf",
      issuer: "MongoDB University",
    },
    oracle: {
      name: "Oracle Certification",
      image: Oracle,
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=3709E87AAB369E2689746FD4B9A67C4EF2FD0EC84586ED437E09F54C91FE7A4D",
      issuer: "Oracle",
    },
    nptel_python: {
      name: "The Joy of Computing using Python",
      image: Nptel_python,
      link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs103/Course/NPTEL25CS103S96020063510909252.pdf",
      issuer: "Nptel Swayam",
    },
  };

  return (
    <div className="">
      <h1 className="text-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-pink-500">
        Certifications
      </h1>

      <div className="relative flex items-center justify-center h-full w-full">
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay, EffectCoverflow]}
          effect="Creative"
          spaceBetween={30}
          slidesPerView={3}
          centeredSlides={true}
          navigation={{
            nextEl: ".swiper-button-next-cert",
            prevEl: ".swiper-button-prev-cert",
          }}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet-cert",
            bulletActiveClass: "swiper-pagination-bullet-active-cert",
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 1,
            },
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
          className="w-full max-w-6xl cert-swiper"
        >
          {Object.values(certs).map((cert, index) => (
            <SwiperSlide key={index} className="cert-slide">
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full mt-8"
              >
                <div className="group relative flex flex-col items-center justify-center p-8 h-96 rounded-xl transition-all duration-500 transform hover:scale-105 cursor-pointer overflow-hidden">
                  {/* Background with gradient and blur effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800/90 via-gray-700/80 to-gray-900/90 backdrop-blur-lg rounded-xl border border-gray-600/30 group-hover:border-amber-400/50 transition-all duration-500"></div>

                  {/* Animated background glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-pink-500/0 to-amber-400/0 group-hover:from-amber-400/10 group-hover:via-pink-500/10 group-hover:to-amber-400/10 rounded-xl transition-all duration-700"></div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center w-full">
                    {/* Certificate Image */}
                    <div className="relative">
                      <img
                        src={cert.image}
                        alt={cert.name}
                        className="relative object-cover rounded-lg filter group-hover:brightness-110 transition-all duration-300"
                      />
                    </div>

                    {/* Certificate Details */}
                    <div className="text-center space-y-3">
                      <h3 className="text-xl font-bold text-gray-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:to-pink-500 transition-all duration-300">
                        {cert.name}
                      </h3>

                      <div className="flex items-center justify-center gap-2">
                        <span className="text-sm text-gray-400">Issued by</span>
                        <span className="text-sm font-semibold text-amber-400">
                          {cert.issuer}
                        </span>
                      </div>

                      {/* View Certificate Button */}
                      <div className="mt-4 px-4 py-2 bg-gradient-to-r from-amber-400/20 to-pink-500/20 rounded-lg border border-amber-400/30 group-hover:from-amber-400/30 group-hover:to-pink-500/30 group-hover:border-amber-400/50 transition-all duration-300">
                        <span className="text-sm font-medium text-amber-400 group-hover:text-amber-300">
                          View Certificate
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-3 right-3 w-3 h-3 bg-gradient-to-br from-amber-400 to-pink-500 rounded-full opacity-60 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300"></div>

                  {/* External link icon */}
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev-cert hidden absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gradient-to-r from-amber-400 to-pink-500 rounded-full xl:flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 shadow-lg">
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
        <div className="swiper-button-next-cert hidden absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gradient-to-r from-amber-400 to-pink-500 rounded-full xl:flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 shadow-lg">
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
        .cert-swiper .swiper-pagination {
          position: absolute !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
          width: !important;
          margin: 0 !important;
        }

        .swiper-pagination-bullet-cert {
          width: 12px !important;
          background: linear-gradient(45deg, #f59e0b, #ec4899) !important;
          opacity: 0.4 !important;
          transition: all 0.3s ease !important;
        }

        .swiper-pagination-bullet-active-cert {
          opacity: 1 !important;
          transform: scale(1.3) !important;
          box-shadow: 0 0 20px rgba(245, 158, 11, 0.6) !important;
        }

        .cert-swiper .swiper-scrollbar {
          background: rgba(75, 85, 99, 0.3) !important;
          border-radius: 3px !important;
        }

        .cert-swiper .swiper-scrollbar-drag {
          background: linear-gradient(45deg, #f59e0b, #ec4899) !important;
          border-radius: 3px !important;
        }
      `}</style>
    </div>
  );
};

export default Certification;
