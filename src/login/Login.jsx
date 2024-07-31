import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import spinnerWhite from "../../public/images/spinnerWhite.svg";

const Login = () => {
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });
  const [disable, setDisable] = useState(true);
  const [loading, setLoading] = useState(false);
  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInfo({
      ...info,
      [name]: value,
    });
  };
  useEffect(() => {
    if (info.email.length > 0 && info.password.length > 0) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [info]);
  const router = useRouter();
  const handlesubmit = async () => {
    setLoading(true);
    try {
      console.log("inside try");
      const response = await axios.post("/api/login", info);
      console.log(response);
      if (response.data.success) {
        console.log("signin successfully");
        router.push("/dashboard");
      } else {
        console.log(response);
      }
    } catch (error) {
      console.log(error.message, "catch part");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <div className="brand-name">
          Welcome to <span className="text">Workflow</span>!
        </div>
        <div className="lower-container">
          <div className="input">
            <Input
              className="input-email"
              type="email"
              name="email"
              placeholder="your email"
              onChange={handlechange}
            />
          </div>
          <div className="input">
            <Input
              className="input-password"
              type="password"
              name="password"
              placeholder="password"
              onChange={handlechange}
            />
          </div>
        </div>
        <div className="btn">
          <Button
            disabled={disable}
            onClick={handlesubmit}
            className="inside-btn"
          >
            {loading ? <img src={spinnerWhite.src} alt="" /> : null}
            Login
          </Button>
        </div>
        <div className="footer">
          Don't have an account? Create a{" "}
          <span className="inside-footer">
            <Link href="/signup">new account</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
