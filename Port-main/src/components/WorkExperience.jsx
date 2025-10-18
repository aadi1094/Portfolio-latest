import { motion } from 'framer-motion';
import { FaBriefcase, FaLaptopCode } from 'react-icons/fa';
import PropTypes from 'prop-types';

const ExperienceCard = ({ experience, index }) => (
  <motion.div
    className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden shadow-2xl hover:shadow-red-900/20 transition-all duration-300 hover:border-red-900/50"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: index * 0.2 }}
    whileHover={{ y: -10 }}
  >
    {/* Experience Icon */}
    <div className="relative overflow-hidden h-32 md:h-40 bg-gradient-to-br from-red-900/20 to-gray-900/40 flex items-center justify-center">
      <div className="text-red-400 text-6xl md:text-7xl">
        {experience.icon}
      </div>
    </div>

    {/* Experience Content */}
    <div className="p-4">
      <h3 className="text-lg md:text-xl font-bold text-white mb-2">{experience.title}</h3>
      <h4 className="text-red-400 font-semibold mb-1 text-sm">{experience.company}</h4>
      <p className="text-gray-500 text-xs mb-2">{experience.location}</p>
      <p className="text-gray-500 text-xs mb-3">{experience.duration}</p>
      
      {/* Responsibilities */}
      <div className="mb-3">
        <ul className="text-gray-400 text-xs md:text-sm space-y-1">
          {experience.responsibilities.map((responsibility, respIndex) => (
            <li key={respIndex} className="leading-relaxed">
              • {responsibility}
            </li>
          ))}
        </ul>
      </div>

      {/* Tech Stack */}
      {experience.techStack && (
        <div className="mb-3">
          <h4 className="text-red-900 font-semibold mb-1 text-xs">Technologies:</h4>
          <div className="flex flex-wrap gap-1">
            {experience.techStack.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="bg-red-900/20 text-red-300 px-2 py-1 rounded-full text-xs border border-red-900/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  </motion.div>
);

ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    responsibilities: PropTypes.arrayOf(PropTypes.string).isRequired,
    techStack: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  index: PropTypes.number.isRequired
};

export default function WorkExperience() {
  const experiences = [
    {
      id: 1,
      title: "Software Development Engineer Intern",
      company: "VX Software Solutions",
      location: "Hyderabad, Telangana, India · Remote",
      duration: "Jul 2025 – Present",
      icon: <FaBriefcase />,
      responsibilities: [
        "Contributing to the development of a school ERP system, building both web and mobile applications.",
        "Working on end-to-end product development using modern full stack technologies.",
        "Collaborating in an agile environment to deliver scalable, user-friendly solutions."
      ],
      techStack: ["React", "Node.js", "MongoDB", "Mobile Dev", "Full Stack"]
    },
    {
      id: 2,
      title: "Freelance Web Developer",
      company: "Self-Employed",
      location: "Remote",
      duration: "Sep 2024 – Jul 2025",
      icon: <FaLaptopCode />,
      responsibilities: [
        "Delivered 3 client projects, developing robust and scalable web applications tailored to specific business needs.",
        "Specialized in full-stack development using Next.js, TypeScript, and Express.js to build responsive, high-performance solutions.",
        "Collaborated with clients across diverse industries, ensuring timely delivery, clean code practices, and adherence to project requirements."
      ],
      techStack: ["Next.js", "TypeScript", "Express.js", "Full Stack", "Client Management"]
    }
  ];

  return (
    <div id="work-experience" className="min-h-screen py-6 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Animated Heading */}
        <motion.h2
          className="text-4xl lg:text-7xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Work <span className="text-red-900">Experience</span>
        </motion.h2>

        <motion.p
          className="text-gray-400 text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          My professional journey in software development, from freelance projects to corporate experience.
        </motion.p>

        {/* Experience Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.id} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
