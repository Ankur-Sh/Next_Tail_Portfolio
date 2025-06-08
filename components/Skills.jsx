import Image from 'next/image';
import React from 'react';
import Html from '../public/assets/skills/html.png';
import Css from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/javascript.png';
import ReactImg from '../public/assets/skills/react.png';
import Tailwind from '../public/assets/skills/tailwind.png';
import Github from '../public/assets/skills/github1.png';
import Firebase from '../public/assets/skills/firebase.png';
import NextJS from '../public/assets/skills/nextjs.png';
import AWS from '../public/assets/skills/aws.png';
import NodeJS from '../public/assets/skills/node.png'; // ✅ Node.js added
import MongoDB from "../public/assets/skills/mongo.png"

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* HTML */}
          <SkillCard img={Html} name="HTML" />
          {/* CSS */}
          <SkillCard img={Css} name="CSS" />
          {/* JavaScript */}
          <SkillCard img={Javascript} name="JavaScript" />
          {/* React */}
          <SkillCard img={ReactImg} name="React" />
          {/* Tailwind */}
          <SkillCard img={Tailwind} name="Tailwind" />
          {/* Firebase */}
          <SkillCard img={Firebase} name="Firebase" />
          {/* GitHub */}
          <SkillCard img={Github} name="Github" />
          {/* Next.js */}
          <SkillCard img={NextJS} name="Next" />
          {/* ✅ Node.js */}
          <SkillCard img={NodeJS} name="Node.js" />
          {/* MongoDB */}
          <SkillCard img={MongoDB} name="MongoDB" />
        </div>
      </div>
    </div>
  );
};

// Reusable SkillCard component
const SkillCard = ({ img, name }) => (
  <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
      <div className='m-auto'>
        <Image src={img} width='64px' height='64px' alt={name} />
      </div>
      <div className='flex flex-col items-center justify-center'>
        <h3>{name}</h3>
      </div>
    </div>
  </div>
);

export default Skills;
