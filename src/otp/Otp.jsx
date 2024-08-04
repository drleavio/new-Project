"use client";
import React, { useState } from "react";
import spinnerWhite from "../../public/images/spinnerWhite.svg";
import axios from "axios";
import { useRouter } from "next/navigation";

const Otp = ({ name }) => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const submitotp = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/verify-otp", {
        email: name,
        otp,
      });
      if (response.data.success) {
        router.push("/dashboard");
      }
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  console.log(otp);
  return (
    <div className="otp-main">
      <div className="otp-container">
        <div className="header">verify Otp</div>
        <div className="otp-box">
          <div className="inside-box">
            <input
              type="number"
              className="otp-input"
              onChange={(e) => {
                setOtp(e.target.value);
              }}
            />
          </div>
          <div className="btn">
            <button className="inside-btn" onClick={submitotp}>
              {loading ? <img src={spinnerWhite.src} alt="" /> : null}
              submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;
