import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import ContactForm from "../components/ContactForm";


const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <div className="relative py-32 bg-gradient-to-br from-slate-900 via-cyan-900 to-teal-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-100"
          >
            Let's discuss how we can elevate your business with AI.
          </motion.p>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* 🔹 Functional Contact Form */}
            <ContactForm/>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>

              {/* Email Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 hover:bg-gradient-to-br hover:from-cyan-50 hover:to-teal-50"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
                  <p className="text-gray-600">tharun@pranexity.com</p>
                </div>
              </motion.div>

              {/* Map Section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl mt-8"
              >
                <iframe
                  title="Pranexity AI Solutions Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7345611651577!2d77.58832957499997!3d12.901620987391084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1514290d8515%3A0xaed73de2f014197!2sJ%20P%20Nagar%20Phase%205%2C%20J.%20P.%20Nagar%2C%20Bengaluru%2C%20Karnataka%20560078!5e0!3m2!1sen!2sin!4v1698839339670!5m2!1sen!2sin"
                  className="w-full h-[350px] border-0"
                  allowFullScreen
                  loading="lazy"
                ></iframe>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-black/70 via-black/40 to-transparent backdrop-blur-sm text-white text-center p-6"
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">Visit Our Office</h3>
                  <p className="text-base mb-4">
                    Pranexity AI Solutions, J P Nagar Phase 5, Bangalore
                  </p>
                  <a
                    href="https://www.google.com/maps/place/J+P+Nagar+Phase+5,+J.+P.+Nagar,+Bengaluru,+Karnataka+560078"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition-all duration-300"
                  >
                    Get Directions
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-gradient-to-br from-slate-800 via-cyan-900 to-teal-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-700/20 via-teal-700/10 to-transparent animate-pulse"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join the AI revolution. Let's build something extraordinary together.
            </p>
            <a
              href="/services"
              className="inline-flex items-center px-8 py-4 bg-white text-cyan-700 rounded-full font-semibold hover:shadow-xl hover:scale-105 hover:bg-gray-100 transition-all duration-300"
            >
              Explore Our Services
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
