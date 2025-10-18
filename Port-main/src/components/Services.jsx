import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaUserCheck, FaComments, FaDumbbell } from 'react-icons/fa';
import PropTypes from 'prop-types';

const ProjectCard = ({ project, index }) => (
  <motion.div
    className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden shadow-2xl hover:shadow-red-900/20 transition-all duration-300 hover:border-red-900/50"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: index * 0.2 }}
    whileHover={{ y: -10 }}
  >
    {/* Project Icon */}
    <div className="relative overflow-hidden h-32 md:h-40 bg-gradient-to-br from-red-900/20 to-gray-900/40 flex items-center justify-center">
      <div className="text-red-400 text-6xl md:text-7xl">
        {project.icon}
      </div>
      <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-900 text-white p-3 rounded-full hover:bg-red-800 transition-colors"
        >
          <FaGithub className="w-5 h-5" />
        </a>
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-900 text-white p-3 rounded-full hover:bg-red-800 transition-colors"
          >
            <FaExternalLinkAlt className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>

    {/* Project Content */}
    <div className="p-4">
      <h3 className="text-lg md:text-xl font-bold text-white mb-2">{project.title}</h3>
      <p className="text-gray-400 text-xs md:text-sm mb-3 leading-relaxed">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="mb-3">
        <h4 className="text-red-900 font-semibold mb-1 text-xs">Tech Stack:</h4>
        <div className="flex flex-wrap gap-1">
          {project.techStack.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="bg-red-900/20 text-red-300 px-2 py-1 rounded-full text-xs border border-red-900/30"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="flex space-x-2">
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-1 bg-gray-700 hover:bg-red-900 text-white px-3 py-2 rounded-lg transition-colors text-xs"
        >
          <FaGithub className="w-3 h-3" />
          <span>GitHub</span>
        </a>
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 bg-red-900 hover:bg-red-800 text-white px-3 py-2 rounded-lg transition-colors text-xs"
          >
            <FaExternalLinkAlt className="w-3 h-3" />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    githubLink: PropTypes.string.isRequired,
    liveLink: PropTypes.string,
    techStack: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired,
  index: PropTypes.number.isRequired
};

export default function Services() {
  // Your project data - Update this with your actual projects
  const projects = [
    {
      id: 1,
      title: "Eleweight",
      description: "A personalized fitness web platform offering tailored workout splits for major muscle groups with AI-driven diet recommendations and Google Maps integration for nearby gyms.",
      icon: <FaDumbbell />,
      githubLink: "https://github.com/aadi1094/ELEWEIGHT-Frontend",
      liveLink: "https://eleweight-frontend-gold.vercel.app/",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Google Maps API", "AI Integration"]
    },
    {
      id: 2,
      title: "Realtime Chat App",
      description: "A real-time chat application that allows users to communicate instantly with each other, featuring user authentication and message notifications.",
      icon: <FaComments />,
      githubLink: "https://github.com/aadi1094/Realtime_Chat-App",
      liveLink: "https://realtime-chat-app-1-clzj.onrender.com/",
      techStack: ["React", "TypeScript", "MongoDB", "Tailwind CSS", "Socket.io"]
    },
    
    {
      id: 3,
      title: "Face Recognition Attendance System",
      description: "A face recognition attendance system that automates the process of marking attendance using facial recognition technology.",
      icon: <FaUserCheck />,
      githubLink: "https://github.com/aadi1094/Attendance-Management-System-using-Face-Recognition",
      liveLink: "",
      techStack: ["Flask","OpenCV","SQLite","Tkinter","Numpy","Python"]
    },
  ];

  return (
    <div id="services" className="min-h-screen py-6 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Animated Heading */}
        <motion.h2
          className="text-4xl lg:text-7xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          My <span className="text-red-900">Projects</span>
        </motion.h2>

        <motion.p
          className="text-gray-400 text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Here are some of the projects I&apos;ve worked on. Each project represents my passion for creating 
          innovative solutions and learning new technologies.
        </motion.p>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

