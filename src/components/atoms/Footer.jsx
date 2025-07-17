import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Academic Calendar", href: "/calendar" },
    { name: "Campus Maps", href: "/maps" },
    { name: "Directory", href: "/directory" },
    { name: "Jobs", href: "/jobs" },
    { name: "My ASU", href: "/myasu" },
    { name: "Student Services", href: "/services" },
  ];

  const academicLinks = [
    { name: "Undergraduate Programs", href: "/academics/undergraduate" },
    { name: "Graduate Programs", href: "/academics/graduate" },
    { name: "Online Programs", href: "/academics/online" },
    { name: "Course Catalog", href: "/academics/catalog" },
    { name: "Academic Support", href: "/academics/support" },
  ];

  const researchLinks = [
    { name: "Research Areas", href: "/research/areas" },
    { name: "Labs & Centers", href: "/research/labs" },
    { name: "Faculty Research", href: "/research/faculty" },
    { name: "Industry Partnerships", href: "/research/partnerships" },
    { name: "Research News", href: "/research/news" },
  ];

  const studentLinks = [
    { name: "Student Organizations", href: "/student-life/organizations" },
    { name: "Career Services", href: "/student-life/careers" },
    { name: "Campus Resources", href: "/student-life/resources" },
    { name: "Events & News", href: "/student-life/events" },
    { name: "Student Success", href: "/student-life/success" },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://facebook.com/asuengineering",
      label: "Facebook",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/asuengineering",
      label: "Twitter",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/asuengineering",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/school/asuengineering",
      label: "LinkedIn",
    },
    {
      icon: Youtube,
      href: "https://youtube.com/asuengineering",
      label: "YouTube",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">ASU</span>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-white">
                  Ira A. Fulton Schools of Engineering
                </h3>
                <p className="text-sm text-gray-300">
                  Arizona State University
                </p>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              The largest and most comprehensive engineering school in the
              nation, offering 27 undergraduate degree programs and more than 50
              graduate degree programs. Experience the Fulton Difference!
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-3 text-yellow-400" />
                <span className="text-sm">
                  699 S Mill Avenue, Tempe, AZ 85281
                </span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-3 text-yellow-400" />
                <span className="text-sm">(480) 965-3199</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-3 text-yellow-400" />
                <span className="text-sm">fulton.engineering@asu.edu</span>
              </div>
            </div>

            {/* Support button */}
            <div className="mt-6">
              <a
                href="/support"
                className="inline-flex items-center px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-md transition-colors"
              >
                Support Fulton Schools
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Academics */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">
              Academics
            </h4>
            <ul className="space-y-2">
              {academicLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-yellow-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Research */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">
              Research
            </h4>
            <ul className="space-y-2">
              {researchLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-yellow-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Student Life */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">
              Student Life
            </h4>
            <ul className="space-y-2">
              {studentLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-yellow-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Quick links section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <h4 className="text-lg font-semibold mb-4 text-yellow-400">
            Quick Links
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-300 hover:text-yellow-400 transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Social media */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <h4 className="text-lg font-semibold mb-4 text-yellow-400">
            Connect With Us
          </h4>
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-gray-400 hover:text-yellow-400 transition-colors p-2 rounded-full hover:bg-gray-800"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-300 text-sm">
                © 2025 Arizona State University
              </p>
              <div className="flex space-x-4 text-sm">
                <a
                  href="/privacy"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Terms of Use
                </a>
                <a
                  href="/accessibility"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Accessibility
                </a>
                <a
                  href="/jobs"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Jobs
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <a
                href="https://www.asu.edu"
                className="text-gray-300 hover:text-yellow-400 transition-colors text-sm"
              >
                Arizona State University
              </a>
              <div className="text-gray-500">|</div>
              <a
                href="/contact"
                className="text-gray-300 hover:text-yellow-400 transition-colors text-sm"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
