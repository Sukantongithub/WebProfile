import React, { useState } from "react";
import { Timeline, ConfigProvider } from "antd";
import Modal from "./Modal";
import "./Project.css";

const Projects = () => {
  const [mode, setMode] = useState("alternate");
  const [modal, setModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Project data with detailed information
  const projectsData = {
    portfolio: {
      title: "Portfolio Website",
      description:
        "Modern and responsive personal portfolio website built with React, Vite, Tailwind CSS, and Ant Design. Features interactive components, timeline projects showcase, and seamless navigation.",
      technologies: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Ant Design",
        "JavaScript",
      ],
      features: [
        "Responsive design for all devices",
        "Interactive timeline component",
        "Smooth animations and transitions",
        "Modern glassmorphism UI design",
        "Project showcase with modal details",
      ],
      year: "2025",
      links: {
        github: "https://github.com/yourusername/portfolio",
        demo: "https://yourportfolio.com",
      },
    },
    examManagement: {
      title: "MERN School Exam Management System",
      description:
        "Comprehensive school examination management platform using MongoDB, Express.js, React, and Node.js. Features student registration, exam scheduling, grade management, and automated report generation.",
      technologies: [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
        "JWT",
        "Mongoose",
      ],
      features: [
        "Student registration and management",
        "Exam scheduling and management",
        "Automated grade calculation",
        "Report generation and export",
        "Role-based access control",
        "Real-time notifications",
      ],
      year: "2024",
      links: {
        github: "https://github.com/yourusername/exam-management",
      },
    },
    ecommerce: {
      title: "Basic MERN E-commerce Platform",
      description:
        "Full-stack e-commerce application with product catalog, shopping cart functionality, user authentication, and order management system built using the MERN stack.",
      technologies: [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
        "Stripe",
        "Redux",
      ],
      features: [
        "Product catalog with search and filters",
        "Shopping cart functionality",
        "User authentication and profiles",
        "Payment integration with Stripe",
        "Order tracking and management",
        "Admin dashboard for inventory",
      ],
      year: "2024",
      links: {
        github: "https://github.com/yourusername/ecommerce",
      },
    },
    stockAnalysis: {
      title: "Stock Market Analysis Tool",
      description:
        "Data-driven stock analysis application that processes financial data, generates trend insights, and provides visualization of market patterns and performance metrics.",
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Yahoo Finance API",
      ],
      features: [
        "Real-time stock data fetching",
        "Technical indicator calculations",
        "Interactive charts and graphs",
        "Portfolio performance tracking",
        "Risk analysis and metrics",
        "Automated report generation",
      ],
      year: "2024",
      links: {
        github: "https://github.com/yourusername/stock-analysis",
      },
    },
    cityAnalysis: {
      title: "City Circumference Analysis System",
      description:
        "Geographic analysis tool for calculating and visualizing city boundaries, population density mapping, and urban planning metrics using spatial data processing algorithms.",
      technologies: [
        "Python",
        "GeoPandas",
        "Folium",
        "PostGIS",
        "OpenStreetMap API",
      ],
      features: [
        "City boundary calculation",
        "Population density mapping",
        "Geographic data visualization",
        "Spatial analysis algorithms",
        "Interactive map interface",
        "Export capabilities for planning",
      ],
      year: "2023",
      links: {
        github: "https://github.com/yourusername/city-analysis",
      },
    },
    taskScheduler: {
      title: "DSA Task Scheduler Implementation",
      description:
        "Advanced Data Structures and Algorithms project implementing multiple CPU scheduling algorithms including Round Robin, Priority Scheduling, and Shortest Job First (SJF) with performance comparison and visualization.",
      technologies: [
        "C++",
        "Python",
        "Matplotlib",
        "Data Structures",
        "Algorithms",
      ],
      features: [
        "Round Robin scheduling algorithm",
        "Priority-based scheduling",
        "Shortest Job First (SJF) implementation",
        "Performance comparison metrics",
        "Visualization of scheduling results",
        "Time complexity analysis",
      ],
      year: "2023",
      links: {
        github: "https://github.com/yourusername/task-scheduler",
      },
    },
  };

  const openModal = (projectKey) => {
    setSelectedProject(projectsData[projectKey]);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
    setSelectedProject(null);
  };
  return (
    <div className="min-h-screen w-full py-25">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-amber-500">
          Projects
        </h1>

        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "rgba(245, 158, 11, 0.8)",
              borderRadius: 10,
              colorBgContainer: "rgba(245, 158, 11, 0.1)",
              colorText: "rgba(245, 158, 11, 0.8)",
              colorTextHeading: "rgba(245, 158, 11, 0.8)",
              tailColor: "rgb(255, 255, 255)",
              size: "large",
            },
          }}
        >
          <Timeline
            className="timeline"
            mode={mode}
            items={[
              {
                label: "2025",
                children: (
                  <div className=" ml-2 pb-8 animefirst">
                    <article className="border py-1 rounded-lg bg-white/10 backdrop-blur-lg shadow-xl shadow-white/10">
                      <h3 className="text-lg font-semibold text-amber-500 mb-2 ml-2">
                        Portfolio Website
                      </h3>
                      <p className="text-gray-300 ml-8 text-justify mr-5">
                        Modern and responsive personal portfolio website built
                        with React, Vite, Tailwind CSS, and Ant Design. Features
                        interactive components, timeline projects showcase, and
                        seamless navigation.
                      </p>
                      <button
                        onClick={() => openModal("portfolio")}
                        className="text-white border px-4 py-2 rounded-lg mt-2 mb-2 ml-8 hover:bg-white/50 hover:text-gray-900 font-semibold active:scale-95 transition-all duration-300"
                      >
                        More info
                      </button>
                    </article>
                  </div>
                ),
              },
              {
                label: "2024",
                children: (
                  <div className=" ml-2 pb-8 animesecond">
                    <article className="border py-1 rounded-lg bg-white/10 backdrop-blur-lg shadow-xl shadow-white/10">
                      <h3 className="text-lg font-semibold text-amber-500 mb-2 mr-2">
                        MERN School Exam Management System
                      </h3>
                      <p className="text-gray-300 mr-8 text-justify ml-5">
                        Comprehensive school examination management platform
                        using MongoDB, Express.js, React, and Node.js. Features
                        student registration, exam scheduling, grade management,
                        and automated report generation.
                      </p>
                      <button
                        onClick={() => openModal("examManagement")}
                        className="text-white border px-4 py-2 rounded-lg mt-2 mb-2 mr-8 hover:bg-white/50 hover:text-gray-900 font-semibold active:scale-95 transition-all duration-300"
                      >
                        More info
                      </button>
                    </article>
                  </div>
                ),
              },
              {
                label: "2024",
                children: (
                  <div className=" ml-2 pb-8 animeright ">
                    <article className="border py-1 rounded-lg bg-white/10 backdrop-blur-lg shadow-xl shadow-white/10">
                      <h3 className="text-lg font-semibold text-amber-500 mb-2 ml-2">
                        Basic MERN E-commerce Platform
                      </h3>
                      <p className="text-gray-300 ml-8 text-justify mr-5">
                        Full-stack e-commerce application with product catalog,
                        shopping cart functionality, user authentication, and
                        order management system built using the MERN stack.
                      </p>
                      <button
                        onClick={() => openModal("ecommerce")}
                        className="text-white border px-4 py-2 rounded-lg mt-2 mb-2 ml-8 hover:bg-white/50 hover:text-gray-900 font-semibold active:scale-95 transition-all duration-300"
                      >
                        More info
                      </button>
                    </article>
                  </div>
                ),
              },
              {
                label: "2024",
                children: (
                  <div className=" ml-2 pb-8 animeleft ">
                    <article className="border py-1 rounded-lg bg-white/10 backdrop-blur-lg shadow-xl shadow-white/10">
                      <h3 className="text-lg font-semibold text-amber-500 mb-2 mr-2">
                        Stock Market Analysis Tool
                      </h3>
                      <p className="text-gray-300 mr-8 text-justify ml-5">
                        Data-driven stock analysis application that processes
                        financial data, generates trend insights, and provides
                        visualization of market patterns and performance
                        metrics.
                      </p>
                      <button
                        onClick={() => openModal("stockAnalysis")}
                        className="text-white border px-4 py-2 rounded-lg mt-2 mb-2 mr-8 hover:bg-white/50 hover:text-gray-900 font-semibold active:scale-95 transition-all duration-300"
                      >
                        More info
                      </button>
                    </article>
                  </div>
                ),
              },
              {
                label: "2023",
                children: (
                  <div className=" ml-2 pb-8 animeright ">
                    <article className="border py-1 rounded-lg bg-white/10 backdrop-blur-lg shadow-xl shadow-white/10">
                      <h3 className="text-lg font-semibold text-amber-500 mb-2 ml-2">
                        City Circumference Analysis System
                      </h3>
                      <p className="text-gray-300 ml-8 text-justify mr-5">
                        Geographic analysis tool for calculating and visualizing
                        city boundaries, population density mapping, and urban
                        planning metrics using spatial data processing
                        algorithms.
                      </p>
                      <button
                        onClick={() => openModal("cityAnalysis")}
                        className="text-white border px-4 py-2 rounded-lg mt-2 mb-2 ml-8 hover:bg-white/50 hover:text-gray-900 font-semibold active:scale-95 transition-all duration-300"
                      >
                        More info
                      </button>
                    </article>
                  </div>
                ),
              },
              {
                label: "2023",
                children: (
                  <div className=" ml-2 pb-8 animeleft   ">
                    <article className="border py-1 rounded-lg bg-white/10 backdrop-blur-lg shadow-xl shadow-white/10">
                      <h3 className="text-lg font-semibold text-amber-500 mb-2 mr-2">
                        DSA Task Scheduler Implementation
                      </h3>
                      <p className="text-gray-300 mr-8 text-justify ml-5">
                        Advanced Data Structures and Algorithms project
                        implementing multiple CPU scheduling algorithms
                        including Round Robin, Priority Scheduling, and Shortest
                        Job First (SJF) with performance comparison and
                        visualization.
                      </p>
                      <button
                        onClick={() => openModal("taskScheduler")}
                        className="text-white border px-4 py-2 rounded-lg mt-2 mb-2 mr-8 hover:bg-white/50 hover:text-gray-900 font-semibold active:scale-95 transition-all duration-300"
                      >
                        More info
                      </button>
                    </article>
                  </div>
                ),
              },
            ]}
          />
        </ConfigProvider>
      </div>

      <Modal isOpen={modal} onClose={closeModal} project={selectedProject} />
    </div>
  );
};

export default Projects;
