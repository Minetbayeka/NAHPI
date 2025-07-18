export function Button({ title,  lg, ...props }) {
  return (
    <button
      className={`flex items-center gap-2 px-4 py-2 text-sm text-black bg-[#FFC627] border-none rounded-md hover:bg-gray-100 ${
        lg ? "p-3 rounded-lg" : "p-[0.25rem] "
      } text-sm`}
      {...props}
    >
      {title}
    </button>
  );
}




// import React from 'react'

// const Button = () => {
//   return (
//     <div>
//     <button className="bg-yellow-500 text-black font-bold py-2 px-4 rounded-full
//      hover:bg-yellow-400 transition duration-200">
//       Tuition and Aid
//     </button>
//     </div>
//   )
// }

// export default Button
