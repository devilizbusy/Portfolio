import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <ContactInfo />
        <ContactForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}

function ContactInfo() {
  const contactDetails = [
    { icon: <MapPin size={24} />, text: 'Lucknow, Uttar Pradesh, India' },
    { 
      icon: <Phone size={24} />,
      text: '+91 7081660941',
      href: 'tel:7081660941',
    },
    {
      icon: <Mail size={24} />,
      text: 'abhishektiwari6827@gmail.com',
      href: 'mailto:abhishektiwari6827@gmail.com',
    },
  ];

  return (
    <div className="space-y-6">
      {contactDetails.map((detail, index) => (
        <motion.div
          key={index}
          className="flex items-center space-x-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="bg-blue-500 p-3 rounded-full">{detail.icon}</div>
          <div>
            {detail.href ? (
              <a href={detail.href} className="text-gray-300 hover:text-white transition-colors">
                {detail.text}
              </a>
            ) : (
              <span className="text-gray-300">{detail.text}</span>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function ContactForm({ formData, handleChange, handleSubmit }) {
  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-md transition-colors duration-300 flex items-center justify-center"
      >
        <Send size={20} className="mr-2" />
        Send Message
      </button>
    </motion.form>
  );
}