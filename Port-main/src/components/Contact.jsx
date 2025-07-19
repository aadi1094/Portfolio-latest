import { useState } from "react";
import emailjs from '@emailjs/browser';



const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // EmailJS credentials from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Aditya", // Your name
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col md:flex-row h-full items-center justify-center py-20 px-6 md:px-10 gap-12"
    >
      {/* Contact Content */}
      <div className="w-full md:w-[40%] flex flex-col text-start items-start justify-start mb-10 md:mb-20 px-10 md:px-20">
        <h2 className="text-4xl md:text-5xl text-white font-semibold"><span className="text-red-900">Contact</span> Me</h2>
        <p className="text-white text-sm md:text-lg mt-4">
          Have a
          <span className="text-red-900"> Project in mind? <br /></span>
          I&apos;d love to hear from you! Reach out to me, and let&apos;s turn your
          <span className="text-red-900"> Ideas into Reality.</span>
        </p>
        <h3 className="text-xl md:text-2xl text-white font-semibold pt-8 pb-4">
          Alternate Contact:
        </h3>
        <p className="text-red-900 text-sm md:text-lg">
          Email: <span className="text-white">adityachawale14@gmail.com</span>
        </p>
        <p className="text-red-900 text-sm md:text-lg mt-2">
          Whatsapp: <i className="text-white">Removed</i>
        </p>
      </div>

      {/* Contact Form */}
      <div className="w-full md:w-[30%] p-6 md:p-8  rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <h2 className="text-3xl text-white font-semibold mb-6 ">Send Message</h2>

          {/* Full Name */}
          <div className="relative mb-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-b-2 bg-white/10 border-gray-400 outline-none rounded-lg px-4 text-white placeholder:text-gray-400 focus:border-pink-500 py-3"
              placeholder="Enter Full Name"
              required
            />
          </div>

          {/* Email */}
          <div className="relative mb-6">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-b-2 bg-white/10 border-gray-400 outline-none rounded-lg px-4 text-white placeholder:text-gray-400 focus:border-pink-500 py-3"
              placeholder="Enter Email"
              required
            />
          </div>

          {/* Message */}
          <div className="relative mb-6">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border-b-2 bg-white/10 border-gray-400 outline-none rounded-lg px-4 text-white placeholder:text-gray-400 focus:border-pink-500 py-3"
              placeholder="Type Your Message..."
              rows="4"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`py-3 px-8 cursor-pointer transition rounded-full w-full md:w-auto text-white ${
                isSubmitting 
                  ? 'bg-gray-600 cursor-not-allowed' 
                  : 'bg-red-900 hover:bg-red-800'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send'}
            </button>
            {submitStatus === 'success' && (
              <p className="text-green-500 mt-3 text-sm">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-500 mt-3 text-sm">Failed to send message. Please try again.</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
