import React from 'react'
const Insights = () => {
  const rules = [
    { heading: "Student population", value: Math.floor(Math.random() * 501), image: "/src/assets/react.svg" },
    { heading: "Student-Staff Ratio", value: Math.floor(Math.random() * 50)+" : "+Math.floor(Math.random() * 50), image: "/src/assets/react.svg" },
    { heading: "Teaching Quality", value: Math.floor(Math.random() * 501), image: "/src/assets/react.svg" },
    { heading: "Industry Impact", value: Math.floor(Math.random() * 501), image: "/src/assets/react.svg" },
    { heading: "International Outlook", value: Math.floor(Math.random() * 501), image: "/src/assets/react.svg" },
    { heading: "Female-Male Ratio", value: Math.floor(Math.random() * 50)+" : "+Math.floor(Math.random() * 50) , image: "/src/assets/react.svg" },
    // { heading: "Lab Facilities", value: Math.floor(Math.random() * 501), image: "/src/assets/react.svg" },
    // { heading: "Building Age", value: Math.floor(Math.random() * 501), image: "/src/assets/react.svg" },
    // { heading: "Infrastructure", value: Math.floor(Math.random() * 501), image: "/src/assets/react.svg" },
  ]
  
  return (
    <div className='drop-shadow-md rounded-md p-4 flex flex-col bg-[#00bbf1] items-center justify-center text-2xl text-white'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 md:grid-rows-2 lg:grid-rows-1 gap-4'>
        {
          rules.map(({ heading, value, image }) => (
            <div key={heading} className='p-4 rounded-md flex flex-col items-center'>
              <img src={image} alt={heading} className='rounded-full w-[150px] mb-4 h-[150px] p-2 bg-white object-contain' />
              <h2 className='font-bold text-2xl text-center text-[#0f4b8a] capitalize'>{heading}</h2>
              <p className='text-lg text-center text-gray-white font-extrabold'>{value}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Insights