import React from "react";
import { Tabs } from "antd";
import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import { GrCertificate } from "react-icons/gr";
import TechStack from "./Teckstack";
import Certification from "./Certification";
import "./Skills.css";

const Skills = () => {
  const tabs = [
    {
      key: "1",
      label: "Technical Skills",
      content: <TechStack />,
      icon: <HiMiniSquare3Stack3D className="text-2xl" />,
    },
    {
      key: "2",
      label: "Certification",
      content: <Certification />,
      icon: <GrCertificate className="text-2xl" />,
    },
  ];
  return (
    <div className="flex justify-center items-start xl:px-40 px-1 xl:mt-10 py-25 min-h-screen w-full ">
      <div className="flex justify-between w-full">
        <Tabs
          theme={{
            token: {
              // Seed Token
              colorPrimary: "#00b96b",
              borderRadius: 10,

              // Alias Token
              colorBgContainer: "#f6ffed",
            },
          }}
          size="large"
          type="card"
          className="custom-tabs w-full"
          items={tabs.map((tab, i) => {
            return {
              label: (
                <span className="flex items-center gap-2">
                  {tab.icon}
                  {tab.label}
                </span>
              ),
              key: tab.key,
              children: tab.content,
            };
          })}
        />
      </div>
    </div>
  );
};

export default Skills;
