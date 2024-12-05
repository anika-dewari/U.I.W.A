import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex justify-between items-center h-24 max-w-full bg-blue-900 text-white p-4">
      <h1 className="w-full text-3xl font-bold text-grey-800">U.I.W.A</h1>
      <div className="flex flex-row items-center justify-center">
        <div className="uppercase p-2">
          <Link
            to="http://naac.gov.in/index.php/en/assessment-accreditation"
            className="hover:underline"
          >
            Terms and Conditions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
