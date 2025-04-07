"use client";

import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { CardHeader } from "@/components/Cardheader";
import { ToolboxItems } from "@/components/ToolboxIcons"; // Correct import
import { motion } from 'framer-motion';
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GitHubIcon from "@/assets/icons/github.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcoon from "@/assets/icons/css3.svg";
import TypeScriptIcon from "@/assets/icons/typescript-16-svgrepo-com.svg";
import NodeJsIcon from "@/assets/icons/node-js-svgrepo-com.svg";
import ExpressIcon from "@/assets/icons/express-svgrepo-com.svg";
import MongoDBIcon from "@/assets/icons/mongoDb.svg";
import PostgreSQLIcon from "@/assets/icons/postgresql-svgrepo-com.svg";
import JavaIcon from "@/assets/icons/java-svgrepo-com.svg";
import SpringIcon from "@/assets/icons/spring-icon-svgrepo-com.svg";
import DockerIcon from "@/assets/icons/docker-svgrepo-com.svg";
import PythonIcon from "@/assets/icons/Python.svg";
import MySqlIcon from "@/assets/icons/mysql-logo-svgrepo-com.svg";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import react from "react";
const toolboxItems = [
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "GitHub",
    iconType: GitHubIcon,
  },
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML",
    iconType: HtmlIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcoon,
  },
  {
    title: "TypeScript",
    iconType: TypeScriptIcon,
  },
  {
    title: "Node.js",
    iconType: NodeJsIcon,
  },
  {
    title: "Express",
    iconType: ExpressIcon,
  },
  {
    title: "MongoDB",
    iconType: MongoDBIcon,
  },
  {
    title: "PostgreSQL",
    iconType: PostgreSQLIcon,
  },
  {
    title: "java",
    iconType: JavaIcon,
  },
  {
    title: "Spring",
    iconType: SpringIcon,
  },
  {
    title: "Docker",
    iconType: DockerIcon,
  },
  {
    title: "Python",
    iconType: PythonIcon,
  },
  {
    title: "MySql",
    iconType: MySqlIcon,
  },
];

const hobbies = [
  {
    title: 'painting',
    emoji: '🎨🖌️🖼️',
    left: '10%',
    top: '10%',
  },
  {
    title: 'star gazing',
    emoji: '🌕⭐🌠',
    left: '50%',
    top: '10%',
  },
  {
    title: 'chess',
    emoji: '♟️',
    left: '10%',
    top: '50%',
  },
  {
    title: 'writing',
    emoji: '📖🧾',
    left: '50%',
    top: '50%',
  }
];

export const AboutSection = () => {
  const constraintsRef = react.useRef(null);
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader eyebrow="About me" title="I'm a frontend developer" description="I specialize in building fast, responsive, and accessible websites." />
        <div className="mt-20 flex flex-col gap-8">
          {/* First Row */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
            {/* My Reads Card */}
            <Card className="h-[320px] md:col-span-2">
              <CardHeader
                title="My reads"
                description="Explore the book that allows my perspective"
                className="px-6 pt-6"
              />
              <div className="w-40 mx-auto md:mt-0">
                <Image src={bookImage} alt="Book cover" />
              </div>
            </Card>

            {/* My Tech Stack Card */}
            <Card className="h-[320px] md:col-span-3">
              <CardHeader title="My Tech Stack" description="Explore for more" className="" />
              <ToolboxItems items={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:60s]" />
              <ToolboxItems items={toolboxItems} className="mt-6" itemsWrapperClassName="animate-move-right [animation-duration:60s]" />
            </Card>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
            {/* Beyond the Code Card */}
            <Card className="h-[320px] flex flex-col gap-8 md:col-span-3">
              <CardHeader className="px-6 py-6" title="Beyond the code" description="Explore my hobbies beyond the digital world" />
              <div className="relative flex-1" ref={constraintsRef}>
                <motion.div drag dragConstraints={constraintsRef}>
                  {hobbies.map((hobby) => (
                    <motion.div
                      key={hobby.title}
                      className="font-serif inline-flex text-gray-900 items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                      style={{
                        left: hobby.left,
                        top: hobby.top,
                      }}
                      drag
                      dragConstraints={constraintsRef}
                    >
                      <span className="font-medium text-gray-950">{hobby.emoji}</span>
                      <span>{hobby.title}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </Card>

            {/* Map Card */}
            <Card className="h-[320px] flex flex-col gap-8 md:col-span-2">
              <Image src={mapImage} alt="Map" className="h-full w-full object-cover object-left-top" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Image src={smileMemoji} alt="smile" className="size-24 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full after:content-['']  after:absolute after-inset-0 after:outline after-outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};