import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
    return (
        <div
            id="about"
            className="w-full md:h-screen p-2 flex items-center py-16"
        >
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <h2 className="py-4">About Me</h2>
                    <p className="py-2 text-base text-gray-600">
                    I&apos;m a <b>Full Stack Developer</b> with hands-on experience in building robust and scalable web applications. I recently completed a successful internship at <b>GeeksforGeeks</b>, where I contributed to high-impact projects used by millions of users.
                    </p>
                    <p className="py-2 text-base text-gray-600">
                        My tech stack includes <b>React, Next.js, Node.js, JavaScript</b>, and I’ve worked on implementing <b>Server-Side Rendering (SSR)</b>, optimizing performance, and enhancing user experiences.
                    </p>
                    <p className="py-2 text-base text-gray-600">
    I enjoy solving real-world problems through clean, maintainable code and always strive to learn new technologies and best practices.
</p>

                    <Link href="/#projects">
                        <p className="py-3 text-base text-gray-600 underline cursor-pointer">
                            Check out my latest projects.
                        </p>
                    </Link>
                </div>
                <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                    <Image
                        src="/assets/page/about.jpeg"
                        className="rounded-xl"
                        width={320}
                        height={320}
                        alt="About Image"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
