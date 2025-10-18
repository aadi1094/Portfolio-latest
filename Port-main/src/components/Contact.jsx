import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const SocialCard = ({ icon, title, handle, link, color, index }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className={`bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-red-900/50 transition-all duration-300 hover:shadow-xl hover:shadow-${color}-500/20 group cursor-pointer`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{ y: -10, scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="flex flex-col items-center text-center">
      <div className={`text-4xl mb-4 text-gray-400 group-hover:text-${color}-500 transition-colors duration-300`}>
        {icon}
      </div>
      <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
      <p className={`text-gray-400 group-hover:text-${color}-400 transition-colors duration-300`}>
        {handle}
      </p>
    </div>
  </motion.a>
);

const Contact = () => {
  const socialLinks = [
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      handle: "Aditya Chawale",
      link: "https://www.linkedin.com/in/aditya-chawale-722838296/",
      color: "blue"
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      handle: "@aadi1094",
      link: "https://github.com/aadi1094",
      color: "gray"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      handle: "adityachawale14@gmail.com",
      link: "mailto:adityachawale14@gmail.com",
      color: "red"
    },
    {
      icon: <FaTwitter />,
      title: "Twitter",
      handle: "@aditya_chawale",
      link: "https://x.com/aditya_chawale",
      color: "blue"
    },
    {
      icon: <FaInstagram />,
      title: "Instagram",
      handle: "@aadi_1094",
      link: "https://instagram.com/aadi_1094",
      color: "pink"
    },
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      handle: "Chat with me",
      link: "https://wa.me/9579050152", // Replace with your WhatsApp number
      color: "green"
    }
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Animated Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-7xl font-bold mb-6">
            Let's <span className="text-red-900">Connect</span>
          </h2>
          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to bring your ideas to life? Let's collaborate and create something amazing together!
          </motion.p>
          
          {/* Animated CTA */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-gradient-to-r from-red-900/20 to-red-700/20 border border-red-900/30 rounded-full px-8 py-3">
              <span className="text-red-400 font-semibold">Available for freelance work</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Social Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {socialLinks.map((social, index) => (
            <SocialCard key={social.title} {...social} index={index} />
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default Contact;
