import React, { useState } from "react";
import { Menu, X, ChevronDown, Search, User } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navigationItems = [
    {
      title: "Academics",
      link: "/academics",
      dropdown: [
        { name: "Undergraduate Programs", link: "/academics#undergraduate" },
        { name: "Graduate Programs", link: "/academics#graduate" },
        { name: "Online Programs", link: "/academics#online" },
        { name: "Professional Development", link: "/academics#professional" },
        { name: "Course Catalog", link: "/academics#catalog" },
      ],
    },
    {
      title: "Admissions",
      link: "/admissions",
      dropdown: [
        { name: "Undergraduate Admissions", link: "/admissions#undergraduate" },
        { name: "Graduate Admissions", link: "/admissions#graduate" },
        { name: "International Students", link: "/admissions#international" },
        { name: "Transfer Students", link: "/admissions#transfer" },
        { name: "Application Requirements", link: "/admissions#requirements" },
      ],
    },
    {
      title: "Research",
      link: "/research",
      dropdown: [
        { name: "Research Areas", link: "/research#areas" },
        { name: "Labs & Centers", link: "/research#labs" },
        { name: "Faculty Research", link: "/research#faculty" },
        { name: "Student Research", link: "/research#student" },
        { name: "Industry Partnerships", link: "/research#partnerships" },
      ],
    },
    {
      title: "Student Life",
      link: "/student-life",
      dropdown: [
        { name: "Student Organizations", link: "/student-life#organizations" },
        { name: "Career Services", link: "/student-life#careers" },
        { name: "Academic Support", link: "/student-life#support" },
        { name: "Campus Resources", link: "/student-life#resources" },
        { name: "Events & News", link: "/student-life#events" },
      ],
    },
    {
      title: "About",
      link: "/about",
      dropdown: [
        { name: "Mission & Vision", link: "/about#mission" },
        { name: "Leadership", link: "/about#leadership" },
        { name: "Faculty & Staff", link: "/about#faculty" },
        { name: "Accreditation", link: "/about#accreditation" },
        { name: "Contact Us", link: "/about#contact" },
      ],
    },
  ];

  return (
    <div className="bg-white shadow-lg">
      {/* Top utility bar */}
      <div className="bg-gray-900 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2">
            <div className="flex space-x-6">
              <a href="#" className="hover:text-yellow-400 transition-colors">
                Arizona State University
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors">
                My ASU
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors">
                Directory
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Search className="h-4 w-4 hover:text-yellow-400 cursor-pointer transition-colors" />
              <User className="h-4 w-4 hover:text-yellow-400 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo and brand */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">ASU</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h1 className="text-2xl font-bold text-gray-900">
                    Ira A. Fulton Schools of Engineering
                  </h1>
                  <p className="text-sm text-gray-600">
                    Arizona State University
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigationItems.map((item, index) => (
              <div key={index} className="relative group">
                <button
                  className="flex items-center text-gray-700 hover:text-red-600 font-medium transition-colors"
                  onClick={() => toggleDropdown(item.title)}
                >
                  {item.title}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                {/* Dropdown menu */}
                {activeDropdown === item.title && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                    <div className="py-2">
                      {item.dropdown.map((dropdownItem, dropdownIndex) => (
                        <a
                          key={dropdownIndex}
                          href={dropdownItem.link}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600 transition-colors"
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-gray-700 hover:text-red-600 transition-colors"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200">
            <div className="py-4 space-y-4">
              {navigationItems.map((item, index) => (
                <div key={index} className="space-y-2">
                  <button
                    className="flex items-center justify-between w-full text-left text-gray-700 hover:text-red-600 font-medium transition-colors"
                    onClick={() => toggleDropdown(item.title)}
                  >
                    {item.title}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        activeDropdown === item.title ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {activeDropdown === item.title && (
                    <div className="pl-4 space-y-2">
                      {item.dropdown.map((dropdownItem, dropdownIndex) => (
                        <a
                          key={dropdownIndex}
                          href={dropdownItem.link}
                          className="block text-sm text-gray-600 hover:text-red-600 transition-colors"
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
