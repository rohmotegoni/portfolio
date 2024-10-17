"use client";
import { useState } from "react";
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");

  const projects = [
    {
      name: "Full-Stack Web Application",
      description: "A full-stack web application for task management",
      tech: "React, Node.js, MongoDB",
      link: "#",
    },
    {
      name: "E-Commerce Platform",
      description: "An e-commerce platform with secure payment integration",
      tech: "Next.js, Express, PostgreSQL",
      link: "#",
    },
    {
      name: "Real-Time Chat Application",
      description: "A real-time chat application using WebSocket technology",
      tech: "Socket.io, React, Express",
      link: "#",
    },
  ];

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Git",
    "Docker",
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 right-0 bg-black bg-opacity-90 z-50">
        <ul className="flex justify-center space-x-8 p-6">
          {["home", "about", "projects", "skills", "resume", "contact"].map(
            (section) => (
              <li key={section}>
                <button
                  onClick={() => {
                    setActiveSection(section);
                    document
                      .getElementById(section)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`text-lg capitalize ${
                    activeSection === section
                      ? "text-blue-400 font-bold"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {section}
                </button>
              </li>
            )
          )}
        </ul>
      </nav>

      <main className="container mx-auto px-4 py-24 space-y-32 text-center">
        <section
          id="home"
          className="min-h-screen flex flex-col justify-center items-center text-center"
        >
          <img
            src="https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-1/449108101_972192707712872_2096048893628026102_n.jpg?stp=c0.0.600.600a_dst-jpg_s200x200&_nc_cat=110&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=e2E6LKIP13gQ7kNvgEDsGbG&_nc_zt=24&_nc_ht=scontent.fdac5-1.fna&_nc_gid=AEM8NM2J1qlZCUBwLsAXkuz&oh=00_AYDjAI2qdUm3ohPfHD0RGO4j_3i_iHwGjuMAl07UkWXFTw&oe=67173071"
            alt="Rohmote Goni"
            className="rounded-full mb-8"
          />
          <h1 className="text-6xl font-bold mb-4">Rohmote Goni</h1>
          <p className="text-3xl mb-8 text-blue-400">
            Full Stack Web Developer
          </p>
          <button
            onClick={() => setActiveSection("projects")}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded text-xl transition duration-300"
          >
            View My Work
          </button>
        </section>

        <section
          id="about"
          className="min-h-screen flex flex-col justify-center"
        >
          <h2 className="text-5xl font-bold mb-8">About Me</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            I'm a passionate full-stack developer from Sylhet, Bangladesh. With
            a strong foundation in both front-end and back-end technologies, I
            love creating robust and user-friendly web applications that solve
            real-world problems.
          </p>
          <h3 className="text-3xl font-bold mb-4">Education</h3>
          <p className="text-xl mb-8">HSC 2025 Batch</p>
          <h3 className="text-3xl font-bold mb-4">Certifications</h3>
          <p className="text-xl">Udemy Full Stack Developer Certificate</p>
        </section>

        <section
          id="projects"
          className="min-h-screen flex flex-col justify-center"
        >
          <h2 className="text-5xl font-bold mb-8">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.name}
                className="bg-gray-900 p-6 rounded-lg shadow-lg shadow-blue-500/20"
              >
                <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
                <p className="text-lg mb-4">{project.description}</p>
                <p className="text-lg mb-4">Tech: {project.tech}</p>
                <a
                  href={project.link}
                  className="text-blue-400 hover:underline text-lg flex items-center"
                >
                  View Project <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </div>
            ))}
          </div>
        </section>

        <section
          id="skills"
          className="min-h-screen flex flex-col justify-center"
        >
          <h2 className="text-5xl font-bold mb-8">Skills</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-blue-900 text-blue-200 px-6 py-3 rounded-full text-xl"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section
          id="resume"
          className="min-h-screen flex flex-col justify-center"
        >
          <h2 className="text-5xl font-bold mb-8">Resume</h2>
          <a
            href="/My Resume.pdf"
            download="My_Resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded text-xl transition duration-300 mb-8 mx-auto flex items-center">
              <Download className="mr-2 h-6 w-6" /> Download Resume
            </button>
          </a>

          <div className="bg-gray-900 p-8 rounded-lg text-xl shadow-lg shadow-blue-500/20">
            <h3 className="text-3xl font-bold mb-4">Work Experience</h3>
            <p className="mb-6">
              Full Stack Developer - Freelance Projects (2021-Present)
            </p>
            <h3 className="text-3xl font-bold mb-4">Education</h3>
            <p>HSC 2025 Batch</p>
          </div>
        </section>

        <section
          id="contact"
          className="min-h-screen flex flex-col justify-center"
        >
          <h2 className="text-5xl font-bold mb-8">Contact Me</h2>
          <form className="space-y-6 max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-gray-800 text-white border border-gray-700 rounded-md py-4 px-4 text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-gray-800 text-white border border-gray-700 rounded-md py-4 px-4 text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              className="w-full bg-gray-800 text-white border border-gray-700 rounded-md py-4 px-4 text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={6}
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded text-xl transition duration-300"
            >
              Send Message
            </button>
          </form>
          <div className="mt-16 flex justify-center space-x-8">
            <a
              href="https://github.com/rohmotegoni"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <Github className="h-12 w-12" />
            </a>
            <a
              href="https://linkedin.com/in/rohmotegoni"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <Linkedin className="h-12 w-12" />
            </a>
            <a
              href="mailto:rohmotegoni@gmail.com"
              className="text-gray-400 hover:text-white"
            >
              <Mail className="h-12 w-12" />
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-center p-8 mt-32">
        <div className="flex justify-center space-x-8 mb-4">
          {["home", "about", "projects", "skills", "resume", "contact"].map(
            (section) => (
              <button
                key={section}
                onClick={() => {
                  setActiveSection(section);
                  document
                    .getElementById(section)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-gray-400 hover:text-white capitalize"
              >
                {section}
              </button>
            )
          )}
        </div>
        <div className="flex justify-center space-x-8 mb-4">
          <a
            href="https://github.com/rohmotegoni"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com/in/rohmotegoni"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:rohmotegoni@gmail.com"
            className="text-gray-400 hover:text-white"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
        <p className="text-gray-400 mt-8">
          &copy; {new Date().getFullYear()} Rohmote Goni
        </p>
      </footer>
    </div>
  );
}
