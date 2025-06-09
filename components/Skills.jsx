import Image from "next/image";
import React from "react";
import Html from "../public/assets/skills/html.png";
import Css from "../public/assets/skills/css.png";
import Javascript from "../public/assets/skills/javascript.png";
import ReactImg from "../public/assets/skills/react.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import Github from "../public/assets/skills/github1.png";
import Firebase from "../public/assets/skills/firebase.png";
import NextJS from "../public/assets/skills/nextjs.png";
// import AWS from "../public/assets/skills/aws.png";
import NodeJS from "../public/assets/skills/node.png";
import MongoDB from "../public/assets/skills/mongo.png";

const skills = [
  { img: Html, name: "HTML" },
  { img: Css, name: "CSS" },
  { img: Javascript, name: "JavaScript" },
  { img: ReactImg, name: "React" },
  { img: Tailwind, name: "Tailwind CSS" },
  { img: Firebase, name: "Firebase" },
  { img: Github, name: "GitHub" },
  { img: NextJS, name: "Next.js" },
  { img: NodeJS, name: "Node.js" },
  { img: MongoDB, name: "MongoDB" },
  // { img: AWS, name: "AWS" },
];

const Skills = () => {
  return (
    <div
      id="skills"
      className="w-full min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-50 p-6 lg:p-16"
    >
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-indigo-600 font-semibold text-center">
          Skills
        </p>
        <h2 className="py-4 text-4xl font-bold text-center text-gray-800">
          What I Can Do
        </h2>
        <p className="text-center text-gray-600 max-w-xl mx-auto mb-10">
          Here are some of the technologies and tools I’ve worked with to build
          performant, scalable, and modern web applications.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map(({ img, name }, index) => (
            <SkillCard key={index} img={img} name={name} />
          ))}
        </div>
      </div>
    </div>
  );
};

const SkillCard = ({ img, name }) => (
  <div
    className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-default"
    title={name} // simple tooltip
  >
    <div className="flex flex-col items-center justify-center space-y-3">
      <Image src={img} alt={name} width={64} height={64} />
      <h3 className="text-lg font-semibold text-indigo-700">{name}</h3>
    </div>
  </div>
);

export default Skills;
