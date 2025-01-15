import React from 'react';
import { 
  GraduationCap, 
  Lightbulb, 
  Brain, 
  Rocket, 
  Users, 
  BarChart, 
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  Twitter
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-purple-50 to-indigo-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <GraduationCap className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">Mapleverse Labs</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-indigo-600 transition-colors">Features</a>
              <a href="#solutions" className="text-gray-600 hover:text-indigo-600 transition-colors">Solutions</a>
              <a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors">Contact</a>
            </div>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors">
              Get Started
            </button>
          </div>
        </nav>

        <div className="container mx-auto px-6 py-24">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Revolutionizing Education Through Technology
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Empowering educators and students with AI-driven learning solutions for a brighter future in education.
              </p>
              <div className="flex space-x-4">
                <button className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-colors flex items-center">
                  Get Demo <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-full hover:bg-indigo-50 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                alt="Educational Technology"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Our Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Brain className="h-12 w-12 text-indigo-600" />,
                title: "AI-Powered Learning",
                description: "Personalized learning paths adapted to each student's unique needs and pace."
              },
              {
                icon: <BarChart className="h-12 w-12 text-indigo-600" />,
                title: "Real-time Analytics",
                description: "Comprehensive insights into student performance and learning patterns."
              },
              {
                icon: <Users className="h-12 w-12 text-indigo-600" />,
                title: "Collaborative Platform",
                description: "Foster engagement through interactive tools and group learning features."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-gradient-to-b from-indigo-50 to-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Solutions for Every Need</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Lightbulb className="h-12 w-12 text-indigo-600 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">For Educators</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-indigo-600 rounded-full mr-3"></div>
                  Automated grading systems
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-indigo-600 rounded-full mr-3"></div>
                  Curriculum management tools
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-indigo-600 rounded-full mr-3"></div>
                  Progress tracking dashboard
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Rocket className="h-12 w-12 text-indigo-600 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">For Students</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-indigo-600 rounded-full mr-3"></div>
                  Interactive learning modules
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-indigo-600 rounded-full mr-3"></div>
                  Personalized study plans
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-indigo-600 rounded-full mr-3"></div>
                  Real-time feedback system
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
            <p className="text-gray-600 mb-12">
              Ready to transform your educational experience? Contact us to learn more about how Mapleverse Labs can help you achieve your goals.
            </p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                />
              </div>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              ></textarea>
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <GraduationCap className="h-8 w-8 text-indigo-400" />
                <span className="ml-2 text-xl font-bold">Mapleverse Labs</span>
              </div>
              <p className="text-gray-400">
                Transforming education through innovative technology solutions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#solutions" className="text-gray-400 hover:text-white transition-colors">Solutions</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">Toronto, ON, Canada</li>
                <li className="text-gray-400">contact@mapleverse.com</li>
                <li className="text-gray-400">+1 (555) 123-4567</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Mapleverse Labs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;