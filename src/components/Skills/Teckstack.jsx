import React from "react";
import { Flex, Progress } from "antd";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const TechStack = () => {
  const twoColors = {
    "0%": "#108ee9",
    "100%": "#87d068",
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
    <>
      <h1 className="text-center text-2xl h-full">Tech Stack</h1>

      <div className="flex items-center justify-center gap-4 p-4 h-full w-full">
        {techStack.map((tech) => (
          <div key={tech.key}>
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-10 h-10 inline-block mr-2"
              />
              <h1>{tech.name}</h1>
              <h1>{tech.progress}%</h1>
              <Progress
                showInfo={false}
                percent={tech.progress}
                strokeColor={twoColors}
              />
            </Swiper>
          </div>
        ))}
      </div>
    </>
  );
};

export default TechStack;
