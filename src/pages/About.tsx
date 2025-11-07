import { motion } from 'framer-motion';
import { Target, Eye, Heart, Users, Award, Lightbulb } from 'lucide-react';
import tharun from "../Assetes/tharun.jpg";
import gaurav from "../Assetes/gaurav.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Accessibility',
      description: 'Making AI technology accessible to every community, regardless of location or economic status.',
    },
    {
      icon: Users,
      title: 'Empowerment',
      description: 'Creating jobs and opportunities through AI-integrated infrastructure and education.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Delivering world-class AI solutions that exceed expectations and drive real impact.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Constantly pushing boundaries with cutting-edge technology tailored for Indian needs.',
    },
  ];

  return (
    <div className="min-h-screen">
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
            About Pranexity
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Building India's Future with AI-Powered Solutions
          </motion.p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Our Story"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl -z-10"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Pranexity was founded with a singular vision: to democratize artificial intelligence and make it
                  accessible to every corner of India. We saw the transformative potential of AI not just as a tool
                  for automation, but as a catalyst for empowerment and growth.
                </p>
                <p>
                  Born from the vibrant tech ecosystem of Bangalore, we've grown into a leading AI solutions provider
                  serving healthcare, education, finance, retail, and beyond. Our team of passionate engineers, data
                  scientists, and domain experts work tirelessly to create solutions that are not just technologically
                  advanced, but culturally relevant and socially responsible.
                </p>
                <p>
                  Today, we're proud to have impacted over 100,000 lives across 15+ cities, creating jobs, improving
                  services, and building the infrastructure for India's AI-powered future.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 ml-4">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To empower communities across India with accessible, ethical, and impactful AI technology. We strive
                to create solutions that don't just automate tasks, but elevate human potential, create meaningful
                jobs, and build infrastructure for sustainable growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 ml-4">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be India's most trusted AI partner, recognized for creating technology that respects our culture,
                serves our communities, and propels our nation into a future where AI enhances every aspect of life.
                We envision an India where AI is not a luxury, but a fundamental right accessible to all.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 via-cyan-900 to-teal-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Founders</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Director - Gaurav (Now on the left) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                    <img
                      src={gaurav}
                      alt="Gaurav - Director"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full ring-4 ring-teal-400/30 ring-offset-4 ring-offset-transparent"></div>
                </div>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                "At Pranexity, we're not just building software. We're building bridges between cutting-edge 
                technology and the people who need it most. Every solution we create is designed to elevate human 
                potential, create meaningful opportunities, and contribute to India's journey toward becoming a 
                global AI leader."
              </p>
              <div className="mt-6">
                <p className="text-2xl font-bold">Gaurav Gupta</p>
                <p className="text-lg opacity-90">Director</p>
              </div>
            </motion.div>

            {/* Managing Director - Tharun (Now on the right) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                    <img
                      src={tharun}
                      alt="Tharun - Managing Director"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full ring-4 ring-cyan-400/30 ring-offset-4 ring-offset-transparent"></div>
                </div>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                "At Pranexity, we were born from a simple belief, technology should empower people, not overpower them. 
                Inspired by the everyday struggles faced by communities across India in healthcare, education, and finance, 
                we set out to build AI with empathy, cultural awareness, and inclusivity at its core. Our mission is to 
                make innovation truly human."
              </p>
              <div className="mt-6">
                <p className="text-2xl font-bold">Tharun Benchappa</p>
                <p className="text-lg opacity-90">Managing Director</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
