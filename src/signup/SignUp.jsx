import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import spinnerWhite from "../../public/images/spinnerWhite.svg";
import Link from "next/link";
import axios from "axios";

const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(true);
  const [error, setError] = useState("");
  const [info, setInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInfo({
      ...info,
      [name]: value,
    });
  };
  useEffect(() => {
    if (
      info.email.length > 0 &&
      info.name.length > 0 &&
      info.password.length > 0
    ) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [info]);
  const handlesubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.post("/api/register", info);
      console.log(response.data);

      if (response.data.success) {
        toast.success("signup successfully");
        router.push("/otp", { name: info.email });
      }
    } catch (error) {
      console.log("error doing signup", error.message);
      toast.error(error.message);
      setError(error.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="form-container">
        <div className="brand-name">
          Welcome to <span className="text">Workflow</span>!
        </div>
        <div className="lower-container">
          <div className="input">
            <Input
              className="input-email"
              type="email"
              name="name"
              placeholder="Joe gardner"
              onChange={handlechange}
            />
          </div>
          <div className="input">
            <Input
              className="input-password"
              type="email"
              name="email"
              placeholder="email"
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
            {loading && <img src={spinnerWhite.src} />}
            Sign up
          </Button>
        </div>
        {error ? <div>error doing signup</div> : null}
        <div className="footer">
          Already have an account{" "}
          <span className="inside-footer">
            <Link href="/">Login</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
