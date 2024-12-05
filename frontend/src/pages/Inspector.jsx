
import React, { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import OtpPopup from "../components/OtpPopup";

export const Inspector = () => {
  const [isOtpPopupOpen, setIsOtpPopupOpen] = useState(false);

  const handleVerifyAndSignup = () => {
    // Logic for verifying data can go here
    setIsOtpPopupOpen(true); 
  };

  const handleOtpSubmit = (otp) => {
    console.log("Submitted OTP:", otp);
    setIsOtpPopupOpen(false); 
    // Additional logic for handling OTP submission can go here
  };

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-90 text-center p-2 h-max px-4">
          <Heading label={"Inspector Details"} />
          <SubHeading label={"Enter your information to create an account"} />
          <InputBox placeholder="743298" label={"Inspector ID"} />
          <InputBox placeholder="17/04/2001" label={"Date of Birth"} />
          <InputBox placeholder="Male/Female" label={"Gender"} />
          <InputBox placeholder="123abc" label={"Government Id Number"} />
          <InputBox placeholder="342552" label={"Employee Id"} />
          <InputBox placeholder="nimratkaur123" label={"Username"} />
          <div className="pt-4">
            <Button onClick={handleVerifyAndSignup} label={"Verify & Signup"} />
          </div>
          <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
        </div>
      </div>
      {/* OTP Popup */}
      <OtpPopup
        isOpen={isOtpPopupOpen}
        onClose={() => setIsOtpPopupOpen(false)}
        onSubmit={handleOtpSubmit}
      />
    </div>
  );
};
