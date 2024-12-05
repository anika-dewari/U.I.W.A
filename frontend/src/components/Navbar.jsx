import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="flex sticky top-0 z-10 justify-between items-center h-24 max-w-full mx-0 bg-blue-900 text-white p-4">
      <h1 className="w-full text-3xl font-bold text-grey-800">U.I.W.A</h1>

      <div className='flex flex-row items-center justify-center '>
        <div className='uppercase p-2'>
        <Link to="/inshome" className="hover:underline"> HOME </Link>
          </div>    
        <div className='uppercase p-2'>
        <Link to="/insights" className="hover:underline"> INSIGHTS </Link>
          </div> 
          <div className='uppercase p-2'>
        <Link to="/" className="hover:underline"> Logout </Link>
          </div>   
      </div> 
      </div>
    );
  };
  export default Navbar; 