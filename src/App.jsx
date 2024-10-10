import React, { useState, useEffect } from 'react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const sections = ['home', 'projects', 'skills', 'about', 'contact'];

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with React and Node.js.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
    },
    {
      id: 2,
      title: "Silog",
      description: "A responsive blog writing and reading application with real-time updates.",
      technologies: ["React", "Firebase", "ShadcnUI"],
    },
    {
      id: 3,
      title: "Weather Forecast Dashboard",
      description: "An interactive weather dashboard using OpenWeatherMap API.",
      technologies: ["JavaScript", "HTML5", "CSS3", "API Integration"],
    }
  ];

  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Python', level: 75 },
    { name: 'SQL', level: 70 },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const offset = windowHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top - offset && scrollPosition < top + height - offset) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-cyan-500 transition-all duration-300 ease-in-out hover:scale-105">
            Utkarsh
          </h1>
          <nav className="hidden md:flex space-x-4">
            {sections.map((section) => (
              <button
                key={section}
                className={`capitalize ${
                  activeSection === section ? 'text-orange-400' : 'text-white'
                } hover:text-cyan-500 transition-colors duration-200`}
                onClick={() => scrollToSection(section)}
              >
                {section}
              </button>
            ))}
          </nav>
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
        {isMenuOpen && (
          <nav
            className="md:hidden bg-black bg-opacity-90 backdrop-blur-md transition-all duration-300 ease-in-out"
          >
            {sections.map((section) => (
              <button
                key={section}
                className={`block w-full py-2 capitalize ${
                  activeSection === section ? 'text-orange-400' : 'text-white'
                } hover:text-cyan-500 transition-colors duration-200`}
                onClick={() => scrollToSection(section)}
              >
                {section}
              </button>
            ))}
          </nav>
        )}
      </header>

      <main className="pt-16">
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div
              className="w-full h-full bg-gradient-to-br from-cyan-500 to-orange-500 opacity-20 animate-gradient"
            />
          </div>
          <div className="container mx-auto px-4 z-10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn">
                  Hi, I'm <span className="text-cyan-500">Utkarsh</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 animate-fadeIn animation-delay-300">
                  A passionate <span className="text-orange-400">Frontend Developer</span> with expertise in
                  React and JavaScript-based solutions.
                </p>
                <button
                  className="bg-cyan-500 text-white px-6 py-3 rounded-full font-bold text-lg hover:bg-orange-500 transition-colors duration-300 animate-fadeIn animation-delay-600"
                  onClick={() => scrollToSection('projects')}
                >
                  View My Work
                </button>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0 animate-fadeIn animation-delay-900">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Utkarsh"
                  className="rounded-full mx-auto"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="min-h-screen py-20 px-4">
          <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white bg-opacity-10 rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => setSelectedProject(project)}
              >
                {/* <img src={project.image} alt={project.title} className="w-full h-48 object-cover" /> */}
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          {selectedProject && (
            <div
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedProject(null)}
            >
              <div
                className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-8 max-w-2xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
                <p className="mb-4">{selectedProject.description}</p>
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} className="bg-cyan-500 text-white px-2 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {/* <div className="flex justify-between">
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors duration-300"
                  >
                    Live Demo
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors duration-300"
                  >
                    GitHub Repo
                  </a>
                </div> */}
                <button
                  className="absolute top-4 right-4 text-white hover:text-cyan-500 transition-colors duration-300"
                  onClick={() => setSelectedProject(null)}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </section>

        {/* <section id="skills" className="min-h-screen py-20 px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Skills & Experience</h2>
          <div className="max-w-3xl mx-auto">
            {skills.map((skill, index) => (
              <div key={skill.name} className="mb-8">
                <div className="flex justify-between mb-2">
                  <span className="text-lg font-semibold">{skill.name}</span>
                  <span className="text-cyan-500">{skill.level}%</span>
                </div>
                <div className="bg-white bg-opacity-20 rounded-full h-4 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-orange-500 animate-fillBar"
                    style={{ width: `${skill.level}%`, animationDelay: `${index * 0.2}s` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6">Professional Experience</h3>
            <div
              className="bg-white bg-opacity-10 rounded-lg p-6 animate-fadeIn"
            >
              <h4 className="text-xl font-semibold mb-2">Frontend Developer</h4>
              <p className="text-gray-300 mb-4">TechCorp Inc. | 2019 - Present</p>
              <ul className="list-disc list-inside text-gray-300">
                <li>Developed and maintained responsive web applications using React and JavaScript</li>
                <li>Collaborated with backend developers to integrate RESTful APIs</li>
                <li>Implemented state management solutions using Redux and Context API</li>
                <li>Optimized application performance and improved load times by 40%</li>
              </ul>
            </div>
          </div>
        </section> */}

        <section id="about" className="min-h-screen py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0 animate-fadeIn">
                <img
                  src="./assets/react.svg"
                  alt="About Me"
                  className="rounded-lg shadow-lg"
                  width={500}
                  height={500}
                />
              </div>
              <div className="md:w-1/2 md:pl-12 animate-fadeIn animation-delay-300">
                <h3 className="text-2xl font-bold mb-4">Hello, I'm Utkarsh</h3>
                <p className="text-gray-300 mb-6">
                  I'm a passionate frontend developer with expertise in React and JavaScript-based solutions. With a
                  strong foundation in creating responsive and intuitive user interfaces, I strive to build web applications
                  that not only look great but also provide an exceptional user experience.
                </p>
                <p className="text-gray-300 mb-6">
                  My journey in web development began 5 years ago, and since then, I've had the opportunity to work on a
                  wide range of projects, from small business websites to large-scale enterprise applications. I'm
                  constantly learning and staying up-to-date with the latest technologies and best practices in the
                  ever-evolving world of web development.
                </p>
                <p className="text-gray-300 mb-6">
                  When I'm not coding, you can find me exploring new hiking trails, experimenting with new recipes in the
                  kitchen, or contributing to open-source projects. I'm always excited to take on new challenges and
                  collaborate with like-minded individuals to create innovative solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="min-h-screen py-20 px-4">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
            <form
              className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-8 animate-fadeIn"
            >
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-white bg-opacity-20 rounded-md py-2 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email"   className="block text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-white bg-opacity-20 rounded-md py-2 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-white bg-opacity-20 rounded-md py-2 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-cyan-500 text-white py-3 rounded-md font-bold text-lg hover:bg-orange-500 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-black bg-opacity-80 backdrop-blur-md py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p
              className="text-gray-400 text-sm mb-4 md:mb-0 animate-fadeIn"
            >
              © {new Date().getFullYear()} UTKARSHWX. All rights reserved.
            </p>
            <div
              className="flex space-x-4 animate-fadeIn animation-delay-300"
            >
              <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors duration-300">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors duration-300">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors duration-300">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}