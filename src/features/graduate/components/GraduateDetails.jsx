import React from 'react'
import image from '@assets/image/patterns.jpg'
import image1 from '@assets/image/girls.jpeg'

const GraduateDetails = () => {
  const menuItems = [
    "Graduate Programs Home",
    "Graduate Admission",
    "Master's Degree Programs",
    "Doctoral Degree Programs",
    "Events",
    "Informational Webinars",
    "Contacts"
  ]

  return (
    <section>
      {/* Intro Section */}
      <div className='max-w-6xl mx-auto mt-8'>
        <h2 className="text-3xl font-bold mb-6">
          Advance your <span className="text-yellow-500">mind</span>, advance your <span className="text-yellow-500">career</span>
        </h2>

        <div className='flex flex-col md:flex-row gap-12 mb-16'>
          {/* Sidebar Menu */}
          <div className="w-full md:w-64">
            <ul className="bg-white shadow-md p-6 space-y-2">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="text-gray-700 hover:text-yellow-500 cursor-pointer transition duration-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Content */}
          <div className='flex-1 leading-relaxed text-gray-800'>
            <p className="mb-4">
              By earning a Fulton Schools graduate degree, you can <span className="font-bold">expand your technical skill set</span> and open doors to <span className="font-bold">advanced, higher-paying career opportunities</span> that only a master's or doctoral degree can provide.
            </p>
            <p className="mb-4">
              Research is always an option for Fulton Schools graduate students. One of our values is to <span className="font-bold">deliver innovation that matters</span>. That’s why we offer master’s degrees and doctoral programs that focus on solving real-world problems, often in collaboration with industry partners who seek research partnerships with our students.
            </p>
            <p>
              With more than 50 graduate degree programs in person and online, the Fulton Schools has a degree to suit your interests, your goals, and your needs.
            </p>
          </div>
        </div>
      </div>

      {/* Yellow bar + top triangle */}
      <div className="relative w-full h-2 bg-yellow-400">
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 
          border-l-8 border-r-8 border-t-[8px] border-l-transparent border-r-transparent border-t-yellow-400">
        </div>
      </div>

      {/* Pattern Background Section with Overlay */}
      <div className="relative w-full h-[100rem]">
        <img src={image} alt="pattern" className="w-full h-full object-cover" />

        {/* Top-centered overlay content */}
        <div className="absolute top-0 left-0 w-full flex flex-col items-center pt-10 px-4">
          <div className="max-w-4xl text-center text-black mb-8">
            <h1 className="text-3xl font-bold mb-2">Master’s degree or doctoral degree?</h1>
            <p className="text-lg">
              As the most comprehensive engineering school in the nation, ASU provides the range of degree 
              program choices you need. Whether you wish to study online or in person, pursue a master’s 
              degree or a PhD, we have the degree program that is right for you.
            </p>
          </div>

          {/* Cards */}
          <div className=" p-8 flex flex-col md:flex-row gap-6 rounded-lg shadow-lg w-full max-w-7xl">
            {/* Master’s Degree Card */}
            <div className="bg-white shadow-md border rounded-md w-full md:w-1/2">
              <img src={image1} alt="Master's program" className="w-full h-48 object-cover rounded-t-md" />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">
                  <span className="bg-yellow-400 px-1">Master’s degrees</span>
                </h2>
                <p className="text-gray-800 mb-2">
                  A master’s degree is a versatile, advanced graduate degree that typically takes 1–3 years to complete after your bachelor’s degree.
                </p>
                <p className="text-gray-800 mb-4">
                  With most programs offering the flexibility of a thesis or non-thesis option, you will be prepared for a more advanced level of professional work or further academic research.
                </p>
                <button className="mt-2 bg-[#811C3A] text-white px-5 py-2 rounded-full font-semibold hover:bg-[#6b162f] transition">
                  Master’s degree options
                </button>
              </div>
            </div>

            {/* Doctoral Degree Card */}
            <div className="bg-white shadow-md border rounded-md w-full md:w-1/2">
              <img src={image1} alt="Doctoral program" className="w-full h-48 object-cover rounded-t-md" />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">
                  <span className="bg-yellow-400 px-1">Doctoral degrees</span>
                </h2>
                <p className="text-gray-800 mb-2">
                  A doctoral or PhD degree is the highest academic degree you can earn. During your doctoral degree, you will conduct original research and contribute new knowledge to your field.
                </p>
                <p className="text-gray-800 mb-4">
                  Doctoral degree programs vary in length, and can be started after completing your bachelor’s degree or master’s degree.
                </p>
                <button className="mt-2 bg-[#811C3A] text-white px-5 py-2 rounded-full font-semibold hover:bg-[#6b162f] transition">
                  Doctoral program options
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom yellow bar + triangle */}
      <div className="relative w-full h-2 bg-yellow-400">
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 
          border-l-8 border-r-8 border-t-[8px] border-l-transparent border-r-transparent border-t-yellow-400">
        </div>
      </div>
    </section>
  )
}

export default GraduateDetails
