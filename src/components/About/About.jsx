import React, { useState, useEffect } from "react";
import { FaEye } from "react-icons/fa";

const About = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState(0);

  const personalInfo = [
    { label: "Name", value: "Sukanton Samanta", icon: "👨‍💻" },
    { label: "Role", value: "Full Stack Developer", icon: "💻" },
    { label: "Experience", value: "2+ Years", icon: "⏰" },
    { label: "Location", value: "India", icon: "📍" },
    { label: "Education", value: "B.Tech in CSE", icon: "🎓" },
    { label: "Passion", value: "Problem Solving", icon: "🧠" },
  ];

  const visionMission = [
    {
      type: "Vision",
      icon: "👁️",
      title: "Transforming Ideas into Digital Reality",
      description:
        "To become a leading full-stack developer who creates innovative, scalable, and user-centric solutions that make a meaningful impact on businesses and communities worldwide.",
      gradient:
        "bg-gradient-to-br from-gray-800/20 via-gray-600/40 to-gray-900/20",
    },
    {
      type: "Mission",
      icon: "🎯",
      title: "Excellence Through Innovation",
      description:
        "Delivering cutting-edge web solutions with clean code, modern technologies, and exceptional user experiences while continuously learning and adapting to emerging trends.",
      gradient:
        "bg-gradient-to-br from-gray-800/20 via-gray-600/40 to-gray-900/20",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Artificial Intelligence & Data Science",
      year: "2023 - 2025",
      institution: "M Kumarasamy College of Engineering ",
      grade: "8.1 + CGPA",
      highlights: [
        "Data Structures & Algorithms",
        "Database Management",
        "Java",
        "Computer Networks",
      ],
      icon: "🎓",
    },
    {
      degree: "Higher Secondary",
      field: "Biology (PCM)",
      year: "2022 - 2023",
      institution: "Higher Secondary School",
      grade: "86.7%",
      highlights: ["Mathematics", "Physics", "Chemistry", "Biology"],
      icon: "📚",
    },
  ];

  const softSkills = [
    {
      name: "Problem Solving Ninja",
      icon: "🥷",
      level: 95,
      description: "Breaking down complex problems into manageable solutions",
    },
    {
      name: "Communication Wizard",
      icon: "🧙‍♂️",
      level: 88,
      description: "Articulating technical concepts to diverse audiences",
    },
    {
      name: "Team Collaboration Champion",
      icon: "🤝",
      level: 92,
      description: "Working effectively in cross-functional teams",
    },
    {
      name: "Time Management Master",
      icon: "⏱️",
      level: 85,
      description: "Prioritizing tasks and meeting deadlines consistently",
    },
    {
      name: "Creative Thinker",
      icon: "💡",
      level: 90,
      description: "Innovative approach to solving technical challenges",
    },
    {
      name: "Adaptability Pro",
      icon: "🔄",
      level: 93,
      description: "Quickly learning new technologies and methodologies",
    },
  ];

  const interests = [
    {
      name: "Full Stack Development",
      icon: "🌐",
      description:
        "Building end-to-end web applications with modern frameworks",
    },
    {
      name: "Algorithm Optimization",
      icon: "⚡",
      description:
        "Enhancing performance through efficient algorithms and data structures",
    },
    {
      name: "UI/UX Innovation",
      icon: "🎨",
      description: "Creating intuitive and visually appealing user interfaces",
    },
    {
      name: "Open Source Contribution",
      icon: "🤝",
      description: "Contributing to community projects and sharing knowledge",
    },
    {
      name: "Emerging Technologies",
      icon: "🚀",
      description:
        "Exploring AI, blockchain, and next-generation web technologies",
    },
    {
      name: "Tech Mentoring",
      icon: "👨‍🏫",
      description: "Guiding aspiring developers and sharing expertise",
    },
  ];

  const services = [
    {
      title: "Full Stack Web Development",
      icon: "🌐",
      description:
        "Complete web application development from frontend to backend with modern technologies",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express.js",
        "MERN",
        "Python",
      ],
      gradient: "bg-gradient-to-tl",
    },
    {
      title: "Database Design & Optimization",
      icon: "🗄️",
      description:
        "Efficient database architecture, query optimization, and data management solutions",
      technologies: ["SQL", "MongoDB", "PostgreSQL", "MySQL"],
      gradient: "bg-gradient-to-t",
    },
    {
      title: "API Development & Integration",
      icon: "🔗",
      description:
        "RESTful API creation, third-party integrations, and microservices architecture",
      technologies: ["REST", "JWT"],
      gradient: "bg-gradient-to-tr",
    },
    {
      title: "Frontend Development",
      icon: "🎨",
      description:
        "Responsive, interactive user interfaces with modern design principles",
      technologies: ["React", "Tailwind CSS", "JavaScript", "TypeScript"],
      gradient: "bg-gradient-to-bl",
    },
    {
      title: "Performance Optimization",
      icon: "⚡",
      description:
        "Code optimization, performance tuning, and scalability improvements",
      technologies: ["Webpack", "Vite", "Caching"],
      gradient: "bg-gradient-to-b",
    },
    {
      title: "Technical Consulting",
      icon: "💼",
      description:
        "Technology stack selection, architecture planning, and code reviews",
      technologies: [
        "Architecture",
        "Code Review",
        "Best Practices",
        "Mentoring",
      ],
      gradient: "bg-gradient-to-br",
    },
  ];

  return (
    <div className="min-h-screen pt-10 text-white overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div
          className={`mb-16 transform transition-all duration-1400 delay-400 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-amber-400">
            Vision & Mission
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {visionMission.map((item, index) => (
              <div
                key={index}
                className={`group p-8 rounded-3xl  ${item.gradient} bg-opacity-10 backdrop-blur-sm border border-white/20 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/20`}
              >
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-amber-400 mb-2">
                    {item.type}
                  </h3>
                  <h4 className="text-lg font-semibold text-white mb-4">
                    {item.title}
                  </h4>
                </div>
                <p className="text-gray-300 text-center leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Educational Background */}
        <div
          className={`mb-16 transform transition-all duration-1600 delay-600 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-amber-400">
            Educational Journey
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="group p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20"
              >
                <div className="flex items-start space-x-6">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {edu.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-amber-400 mb-1">
                          {edu.degree}
                        </h3>
                        <p className="text-lg text-white font-semibold">
                          {edu.field}
                        </p>
                        <p className="text-gray-400">{edu.institution}</p>
                      </div>
                      <div className="text-right mt-2 md:mt-0">
                        <div className="text-lg font-bold text-amber-400">
                          {edu.grade}
                        </div>
                        <div className="text-gray-400">{edu.year}</div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full text-sm border border-amber-500/30"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills with Catchy Titles */}
        <div
          className={`mb-16 transform transition-all duration-1800 delay-800 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-amber-400">
            Superpowers & Abilities
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-amber-400 mb-1">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-gray-400">{skill.description}</p>
                  </div>
                  <div className="text-xl font-bold text-amber-400">
                    {skill.level}%
                  </div>
                </div>
                <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full transition-all duration-2000 ease-out"
                    style={{
                      width: isVisible ? `${skill.level}%` : "0%",
                      animationDelay: `${index * 0.2}s`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ...existing skills section... */}

        {/* Enhanced Interests Section */}
        <div
          className={`mb-16 transform transition-all duration-1800 delay-1200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-amber-400">
            Passions & Interests
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20"
                onMouseEnter={() => setActiveSection(index)}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {interest.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-amber-400">
                    {interest.name}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {interest.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div
          className={`mb-16 transform transition-all duration-2000 delay-1400 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-amber-400">
            Services I Offer
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group p-6 rounded-3xl ${service.gradient} from-amber-400/50 to-pink-500/50 bg-opacity-10 backdrop-blur-sm border-3 border-white hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/20`}
              >
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-amber-400 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {service.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {service.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white/10 text-white rounded-full text-xs border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ...existing call to action... */}
      </div>
    </div>
  );
};

export default About;
