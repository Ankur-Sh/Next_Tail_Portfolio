import React from "react";
import { Briefcase } from "lucide-react"; // Optional: lucide-react icons

const WorkExperience = () => {
    return (
        <section
            id="work-experience"
            className="w-full min-h-screen bg-[#f9fafb] py-20 px-6 flex items-center justify-center"
        >
            <div className="max-w-5xl w-full space-y-12">
                {/* Heading */}
                <div className="text-center">
                    <h2 className="text-4xl font-extrabold text-gray-800 mb-2">
                        <Briefcase className="inline-block w-8 h-8 mr-2 text-indigo-600" />
                        Work Experience
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Companies and roles where I sharpened my craft.
                    </p>
                </div>

                {/* Experience Card */}
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
                        <div>
                            <h3 className="text-2xl font-bold text-indigo-700">
                                SDE Intern — GeeksforGeeks
                            </h3>
                            <p className="text-gray-500">Sep 2024 – April 2025 · Noida</p>
                        </div>
                        <a
                            href="https://media.geeksforgeeks.org/certificates/1744612017/af1bb59a41a943e004329e74e4f9aecc.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 md:mt-0 inline-block px-5 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition"
                        >
                            🎓 View Certificate
                        </a>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-gray-800 text-base list-disc list-inside">
  <li>
    Redesigned and optimized chatbot functionality by adding login prompts, query limits for non-premium users, and subscription prompts.
  </li>
  <li>
    Engineered Server-Side Rendering (SSR) utilizing Next.js, resulting in a 30% enhancement in organic traffic through improved SEO, and decreased average page load times by 2 seconds for users.
  </li>
  <li>
    Developed a responsive Courses Roadmap frontend using Next.js, enhancing performance by 25%, optimizing client-side routing, and achieving improvement in cross-device user experience.
  </li>
  <li>
    Refined quiz page responsiveness across all devices, leading to a 15% increase in user retention and a 20% rise in quiz completion rates.
  </li>
  <li>
    Compressed event promotion file size by 66%, reducing storage usage and improving page load times.
  </li>
  <li>
    Optimized website SEO by reducing Cumulative Layout Shift (CLS), enhancing Core Web Vitals, and increasing visual stability—driving higher search rankings and greater user trust.
  </li>
  <li>
    Implemented input throttling and result caching in the article search functionality, significantly reducing redundant API calls and enhancing overall application responsiveness and user experience.
  </li>
</ul>

                </div>
            </div>
        </section>
    );
};

export default WorkExperience;
