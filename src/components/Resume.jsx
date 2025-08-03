import React from "react";
import AboutImage from "../assets/images/dp-kanch.jpg";
import { FaDev, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-light-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary mb-6 text-center">
          My Resume
        </h2>
        <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center">
          {/* Left Column */}
          <div className="w-full md:w-1/2 md:mr-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-secondary mb-4 text-center">
                Skills
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>ReactJS</li>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>Vue.js</li>
                <li>Firebase</li>
                <li>Angular</li>
                <li>Android</li>
                <li>Git</li>
              </ul>

              <h3 className="text-2xl font-semibold text-secondary mt-8 mb-4 text-center">
                Education
              </h3>
              <p className="font-medium">
                Bachelor of Science in Computer Science{" "}
              </p>
              <p>Technical University of Berlin (2016)</p>

              <h3 className="text-2xl font-semibold text-secondary mt-8 mb-4 text-center">
                Certification
              </h3>
              <p className="font-medium">
                Web Designing and Development (MERN Stack)
              </p>
              <p> Certified from Web D School in (Nov 2023)</p>

              <h3 className="text-2xl font-semibold text-secondary mt-8 mb-4 text-center">
                Projects
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <a
                    className="text-primary"
                    href="https://github.com/michael-rgb/Trailed-v2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Trailed
                  </a>{" "}
                  - A task management app built with ReactJS, Node.js, MongoDB,
                  and Express
                </li>
                <li>
                  <a
                    className="text-primary"
                    href="https://github.com/michael-rgb/Sky-Freight"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SkyFreight
                  </a>{" "}
                  - A responsive single-page website for an air cargo company
                  built with ReactJS and Bootstrap
                </li>
                <li>
                  <a
                    className="text-primary"
                    href="https://github.com/michael-rgb/ToDo-FlareLink"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Todo Flarelist
                  </a>{" "}
                  - A to-do list application built with ReactJS and Tailwind CSS
                </li>
                <li>
                  <a
                    href="https://github.com/michael-rgb/Mowli-Bakery"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary"
                  >
                    Mowli Bakery
                  </a>{" "}
                  - A bakery e-commerce app built with ReactJS and Firebase
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 text-center sm:mb-0 mb-4">
            <img
              src={AboutImage}
              alt="Michael Wagner"
              className="rounded-full object-cover w-48 h-48 mx-auto mb-6 border-4 border-primary"
            />
            <p className="text-xl font-medium">Michael Wagner</p>
            <p className="text-lg text-secondary">
              Full Stack Developer | Mobile Developer
            </p>
            <a
              href="mailto:michael.wagner@example.com"
              className="text-lg text-primary mt-4 block"
            >
              michael.wagner@gmail.com
            </a>
            {/* Social Links */}
            <div className="flex justify-center space-x-6 mt-6">
              <a
                href="https://www.linkedin.com/in/michael-wagner"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-2xl text-[#0077B5] hover:text-secondary" />
              </a>
              <a
                href="https://github.com/michael-rgb"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-2xl text-[#333] hover:text-secondary" />
              </a>
              <a
                href="https://www.instagram.com/michael_michael-wagner"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-2xl text-[#E4405F] hover:text-secondary" />
              </a>
              <a
                href="https://dev.to/michaelwagner"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDev className="text-2xl  hover:text-secondary" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
