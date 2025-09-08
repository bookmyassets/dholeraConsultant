import React from "react";
import Link from "next/link";

import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Linkedin, ArrowRight, Users, Building2, Trophy, CheckCircle, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <>
      {/* Trust Indicators Section */}
      <div className="bg-gradient-to-r from-blue-800 via-indigo-800 to-purple-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Why Choose Dholera Consultants?
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="flex justify-center mb-3">
                <Users className="text-yellow-400" size={36} />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">1500+</div>
              <div className="text-white/90 text-sm">Satisfied Clients</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="flex justify-center mb-3">
                <Building2 className="text-yellow-400" size={36} />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">75+</div>
              <div className="text-white/90 text-sm">Premium Projects</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="flex justify-center mb-3">
                <Trophy className="text-yellow-400" size={36} />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">7+</div>
              <div className="text-white/90 text-sm">Years Expertise</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="flex justify-center mb-3">
                <CheckCircle className="text-yellow-400" size={36} />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-white/90 text-sm">Verified Projects</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <footer id="footer" className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='m0 40l40-40h-40z'/%3E%3Cpath d='m0 0l40 40v-40z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative z-10 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              
              {/* Company Info - Spans 2 columns */}
              <div className="lg:col-span-2">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-white mb-3">
                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      Dholera Consultants
                    </span>
                  </h3>
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                    <div className="w-6 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <div className="w-3 h-0.5 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full"></div>
                  </div>
                  <p className="text-lg text-blue-200 font-medium mb-2">
                    Your Trusted Partner in Dholera Investments
                  </p>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed max-w-xl">
                  Dholera Consultants delivers verified, AUDA-approved projects in Dholera — trusted by 1500+ investors for transparent, expert-led investments in India's first planned smart city. We provide comprehensive consultation and end-to-end support for your real estate journey.
                </p>
                
                {/* Key Services */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center text-gray-300">
                    <CheckCircle size={16} className="text-blue-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">Investment Consultation</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle size={16} className="text-blue-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">Property Verification</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle size={16} className="text-blue-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">Legal Documentation</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle size={16} className="text-blue-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">Market Analysis</span>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h4 className="text-white font-semibold mb-4 flex items-center">
                    <span className="mr-2">Connect With Us</span>
                    <ArrowRight size={16} className="text-blue-400" />
                  </h4>
                  <div className="flex space-x-3">
                    <a 
                      href="https://www.youtube.com/@DholeraConsultants" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative bg-gray-800 hover:bg-red-600 p-3 rounded-xl transition-all duration-300 transform hover:scale-110 hover:rotate-3"
                    >
                      <Youtube size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                      <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-400 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-300 -z-10"></div>
                    </a>
                    <a 
                      href="https://x.com/DholeraC31285" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative bg-gray-800 hover:bg-sky-500 p-3 rounded-xl transition-all duration-300 transform hover:scale-110 hover:rotate-3"
                    >
                      <Twitter size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                      <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-sky-400 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-300 -z-10"></div>
                    </a>
                    <a 
                      href="https://www.instagram.com/dholeraconsultants/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative bg-gray-800 hover:bg-pink-600 p-3 rounded-xl transition-all duration-300 transform hover:scale-110 hover:rotate-3"
                    >
                      <Instagram size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                      <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-400 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-300 -z-10"></div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-3">Quick Navigation</h3>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                </div>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/projects"
                      className="text-gray-300 hover:text-blue-400 transition-all duration-300 flex items-center group"
                    >
                      <ArrowRight size={14} className="mr-2 text-blue-400 group-hover:translate-x-1 transition-transform" />
                      <span className="group-hover:ml-1 transition-all">Our Projects</span>
                    </Link>
                  </li>
                  
                  <li>
                    <Link
                      href="/blogs"
                      className="text-gray-300 hover:text-blue-400 transition-all duration-300 flex items-center group"
                    >
                      <ArrowRight size={14} className="mr-2 text-blue-400 group-hover:translate-x-1 transition-transform" />
                      <span className="group-hover:ml-1 transition-all">Market Insights</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-gray-300 hover:text-blue-400 transition-all duration-300 flex items-center group"
                    >
                      <ArrowRight size={14} className="mr-2 text-blue-400 group-hover:translate-x-1 transition-transform" />
                      <span className="group-hover:ml-1 transition-all">About Us</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-gray-300 hover:text-blue-400 transition-all duration-300 flex items-center group"
                    >
                      <ArrowRight size={14} className="mr-2 text-blue-400 group-hover:translate-x-1 transition-transform" />
                      <span className="group-hover:ml-1 transition-all">Contact Us</span>
                    </Link>
                  </li>
                </ul>

                {/* Legal Links */}
                <div className="mt-8">
                  <h4 className="text-white font-semibold mb-3">Legal & Policies</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/policy/privacy"
                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center group"
                      >
                        <ArrowRight size={12} className="mr-2 text-blue-400 group-hover:translate-x-1 transition-transform" />
                        <span className="group-hover:ml-1 transition-all">Privacy Policy</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/policy/terms"
                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center group"
                      >
                        <ArrowRight size={12} className="mr-2 text-blue-400 group-hover:translate-x-1 transition-transform" />
                        <span className="group-hover:ml-1 transition-all">Terms of Service</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/policy/refund-and-cancellation"
                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center group"
                      >
                        <ArrowRight size={12} className="mr-2 text-blue-400 group-hover:translate-x-1 transition-transform" />
                        <span className="group-hover:ml-1 transition-all">Refund Policy</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-3">Get In Touch</h3>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                </div>
                
                <div className="space-y-6">
                  <div className="group">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-3 rounded-xl mr-4 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                        <MapPin size={20} className="text-blue-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-2">Corporate Office</h4>
                        <span className="text-gray-300 text-sm leading-relaxed">
                          620, JMD Megapolis, Sohna Rd,<br />
                          Sector 48, Gurugram, India 122018
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-3 rounded-xl mr-4 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                        <Mail size={20} className="text-blue-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-2">Email Us</h4>
                        <a
                          href="mailto:info@dholeraconsultants.com"
                          className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                        >
                          info@dholeraconsultants.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-8">
                    <Link href="/contact">
                      <button className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 hover:from-blue-700 hover:via-purple-700 hover:to-blue-900 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl border border-blue-500/30">
                        <span className="flex items-center justify-center">
                          Schedule Consultation
                          <ArrowRight size={16} className="ml-2" />
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Copyright */}
            <div className="mt-16 pt-8 border-t border-gray-700">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0 text-center md:text-left">
                  <p className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">Dholera Consultants™</span>. All rights reserved.
                  </p>
                  <p className="text-gray-500 text-xs mt-1">
                    Leading real estate consultancy for Dholera SIR investments
                  </p>
                </div>
                
                
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;