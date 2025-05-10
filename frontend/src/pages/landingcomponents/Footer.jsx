import React from 'react';
import { BookOpen, Github, Twitter, Linkedin, Mail, Phone, MapPin, Code } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <BookOpen className="h-6 w-6 mr-2 text-blue-400" />
              <span className="text-xl font-bold">CampusLinker</span>
            </div>
            <p className="text-gray-300 mb-6">Connecting your campus life in one seamless platform.</p>
            <div className="flex space-x-4">
              <a href="https://leetcode.com/quantumciphersphere" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Code className="h-5 w-5" title="LeetCode" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" title="Twitter" />
              </a>
              <a href="https://github.com/cipher-sphere" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Github className="h-5 w-5" title="GitHub" />
              </a>
              <a href="https://www.linkedin.com/in/shivam-sharma-638617245/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" title="LinkedIn" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Product</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-300 hover:text-blue-400 transition-colors">Features</a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-300 hover:text-blue-400 transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-blue-400 transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-blue-400 transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Help Center</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 text-blue-400 mt-0.5" />
                <span className="text-gray-300">oldmonklovesme@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 text-blue-400 mt-0.5" />
                <span className="text-gray-300">+91 936854XXXX</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-blue-400 mt-0.5" />
                <span className="text-gray-300">ABES Engineering College, Ghaziabad 201001</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-6 border-t border-gray-700 text-center flex justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} CampusLinker. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm">Terms</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;