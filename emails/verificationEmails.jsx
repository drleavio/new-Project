import React from "react";

const verificationEmails = ({ username, otp }) => {
  return (
    <div>
      <h1>hello, {username}</h1>
      <p>your verification otp is {otp}</p>
    </div>
  );
};

export default verificationEmails;
