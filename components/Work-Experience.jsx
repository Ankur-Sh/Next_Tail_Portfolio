import React from "react";

const Work_Experience = () => {
    return (
        <div
            id="work-experience"
            className="w-full h-screen flex items-center justify-center px-4"
        >
            <div className="max-w-3xl w-full text-center">
                <h2 className="text-3xl font-bold py-4">Work Experience</h2>
                <h3 className="text-xl font-semibold py-2">SDE Intern — GeeksforGeeks</h3>
                <p className="text-base text-gray-700 py-3">
                    As a <b>SDE Intern at GeeksforGeeks</b>, I contribute to building scalable, user-friendly, and high-performance web interfaces.
                </p>

                <ul className="list-disc list-inside text-left text-base text-gray-700 space-y-2 mt-4 mx-auto max-w-2xl">
                    <li>
                        Built reusable UI components using <b>React</b>, <b>Next.js</b>, and <b>JavaScript</b>.
                    </li>
                    <li>
                        Implemented <b>Server-Side Rendering (SSR)</b> to enhance SEO and performance.
                    </li>
                    <li>
                        Improved UX across platforms by working on the <b>chatbot</b> and <b>quiz modules</b>.
                    </li>
                    <li>
                        Focused on responsive design and cross-browser compatibility.
                    </li>
                    <li>
                        Practiced clean coding and collaborated within an agile team.
                    </li>
                </ul>

                <a
                    href="https://media.geeksforgeeks.org/certificates/1744612017/af1bb59a41a943e004329e74e4f9aecc.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 text-blue-600 underline hover:text-blue-800 transition"
                >
                    View Internship Certificate
                </a>
            </div>
        </div>
    );
};

export default Work_Experience;
