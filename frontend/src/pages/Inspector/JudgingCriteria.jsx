import React from 'react'

const JudgingCriteria = () => {
  const rules = [
    { heading: "Student population", desc: "Total number of students enrolled at the university.", image: "/src/assets/react.svg" },
    { heading: "Student-Staff Ratio", desc: "Ratio of students to academic and support staff.", image: "/src/assets/react.svg" },
    { heading: "Teaching Quality", desc: "Rating of the overall teaching quality at the university.", image: "/src/assets/react.svg" },
    { heading: "Industry Impact", desc: "Degree of engagement and influence within industries.", image: "/src/assets/react.svg" },
    { heading: "international. Outlook", desc: "Percentage of international students at the university.", image: "/src/assets/react.svg" },
    { heading: "Lab Facilities", desc: "Resources and spaces for practical, hands-on learning.", image: "/src/assets/react.svg" },
    { heading: "Building Age", desc: "Number of years since the university was established.", image: "/src/assets/react.svg" },
    { heading: "Infrastructure", desc: "Physical and technological resources supporting the university.", image: "/src/assets/react.svg" },
  ]
  
  return (
    <div className='drop-shadow-md rounded-md p-4 flex flex-col bg-[#0f4b8a] items-center justify-center text-2xl text-white'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {
          rules.map(({ heading, desc, image }) => (
            <div key={heading} className='p-4 rounded-md flex flex-col items-center'>
              <img src={image} alt={heading} className='rounded-md w-[150px] mb-4 h-[150px] p-2 bg-white object-contain' />
              <h2 className='font-bold text-2xl capitalize text-center'>{heading}</h2>
              <p className='text-lg text-center text-gray-300'>{desc}</p>
            </div>
          ))
        }
      </div>
    </div>

  )
}

export default JudgingCriteria