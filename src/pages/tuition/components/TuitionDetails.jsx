import React from 'react';
import { Link } from 'react-router-dom';
import { programs, fees } from '@data';
import image from "@assets/image/auth.jpg"
import image1 from "@assets/image/patterns.jpg"
import image2 from "@assets/image/sunset.jpg"
import { Button } from '@components/atoms/Button';


const TuitionDetails = () => {
  return (
    <section>
      {/* Intro Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
          Definitions of NAHPI Tuition Costs and Fees
        </h1>
        <p className="text-lg leading-relaxed">
          As an NAHPI student, you will pay tuition (the cost of taking your classes) and fees
          (a charge for the use of something like technology). Your tuition and fees will differ
          from other students based on a variety of factors.
        </p>
      </div>

      {/* Tuition Info Section */}
      <div className="bg-gray-900 py-10 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-xl p-8 sm:p-10 lg:p-12 max-w-6xl w-full mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-6 text-gray-900">
            What are the tuition and fees at NAHPI?
          </h2>

          <p className="text-lg leading-relaxed mb-6 text-gray-700">
            NAHPI tuition costs vary on a number of things, the biggest being whether you are a
            direct or nondirect student. To determine your tuition and fees, visit our{' '}
            <Link to="/tuition-estimator" className="text-red-800 hover:underline font-medium">
              Tuition Estimator
            </Link>.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            NAHPI fees also vary by student type, but there are some fees, such as the athletics fee,
            that all students are required to pay (but by paying it you get to attend all NAHPI Athletics events).{' '}
            Learn more about{' '}
            <Link to="/fees" className="text-red-800 hover:underline font-medium">
              NAHPI fees
            </Link>.
          </p>
        </div>

        {/* Types of Tuition Section */}
        <div className="bg-white shadow-xl p-8 sm:p-10 lg:p-12 max-w-6xl w-full mx-auto mt-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 text-center">
            Types of Tuition in NAHPI
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {programs.map((program) => (
              <div
                key={program.id}
                className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left"
              >
                <div className="flex-shrink-0 mb-6 sm:mb-0 sm:mr-8">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="h-36 w-36 rounded-full object-cover border-4 border-gray-100 shadow-md"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {program.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    {program.description}
                  </p>
                  <Link to={program.linkUrl} className="text-red-800 hover:underline font-medium">
                    {program.linkText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

       
       <div className="bg-white shadow-xl p-8 sm:p-10 lg:p-12 max-w-6xl w-full mx-auto mt-8">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
          Common NAHPI fees
        </h2>

        {/* Introductory Paragraphs */}
        <p className="text-lg leading-relaxed mb-4 text-gray-700">
          Colleges charge students various fees to support certain programs that in turn support students.
          These fees vary depending on the college. Read on for some examples of ASU student fees. This
          is not a complete list of ASU student fees, but is intended to give you an idea of what they are and
          what they’re for.
        </p>

        {/* Fees List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 my-8">
          {fees.map((fee) => (
            <div key={fee.id} className="flex items-start">
              <span className="text-gray-900 mr-2 text-xl leading-none">&bull;</span> {/* Bullet point */}
              <p className="text-lg text-gray-700">
                <span className="font-semibold">{fee.name}</span>
                {fee.amount && <span className="font-semibold ml-1">({fee.amount})</span>}{' '}
                {fee.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="mt-10 text-center md:text-left">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-md shadow-lg transition-colors">
            See a complete list of fees
          </button>
        </div>
      </div>
    </div>
      </div>


<div className="relative max-w-6xl mx-auto mt-8">
  {/* Background Image */}
  <div className="flex justify-end">
    <img
      src={image}
      alt="campus"
      className="w-[50rem] h-[35rem] object-cover"
    />
  </div>

  {/* Text box positioned over the image */}
  <div className="absolute top-48 left-8 bg-white bg-opacity-90 p-6 rounded-lg shadow-lg max-w-md">
    <h1 className="text-2xl font-bold mb-4 text-black">
      How can I find out how much my tuition will be?
    </h1>
    <ul className="list-disc pl-5 space-y-2 text-gray-800">
      <li>Identify which ASU degree you want to earn.</li>
      <li>
        Determine whether you are an in-state resident, or if you are out-of-state or an international student.
      </li>
      <li>
        Determine your general costs by using the tuition estimator and list of common fees.
      </li>
      <li>Explore your financial aid options.</li>
    </ul>
  </div>
</div>


 <div className="mt-8 relative w-full h-[550px] mb-8">
  {/* Background image */}
  <img src={image1} alt="" className="w-full h-full object-cover" />

  {/* Overlay image with text */}
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%]">
    <div className="relative">
      {/* image2 */}
      <img src={image2} alt="" className="w-full h-[30rem] object-cover rounded-lg" />

      {/* Text box floating on top of image2 without affecting it */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-center space-y-2 mx-96">
        <div className="bg-white bg-opacity-90 px-6 py-4 rounded-lg shadow-lg inline-block w-80">
          <h2 className="text-3xl font-bold mb-2">More questions about tuition, fees and costs?</h2>
          <div className='pt-4'>
          <Button 
          title="Tuition and Aid"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </section>
  );
};

export default TuitionDetails;

