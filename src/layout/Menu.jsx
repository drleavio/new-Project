"use client";
import React, { useEffect, useState } from "react";
import user from "../../public/images/user.jpg";
import bell from "../../public/images/bell.svg";
import loader from "../../public/images/loader.svg";
import rightarrow from "../../public/images/rightarrow.svg";
import { Button } from "@/components/ui/button";
import home from "../../public/images/home.svg";
import dashboard from "../../public/images/dashboard.svg";
import graph from "../../public/images/graph.svg";
import settings from "../../public/images/settings.svg";
import team from "../../public/images/team.svg";
import NavBar from "@/components/NavBar";
import plus from "../../public/images/plus.svg";
import download from "../../public/images/download.svg";
import axios from "axios";
import { useRouter } from "next/navigation";
import spinnerWhite from "../../public/images/spinnerWhite.svg";

const Menu = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get("/api/data");
        // console.log(response.data.data.name);
        setName(response.data.data.name);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);

  const logout = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/logout");
      if (response.data.success) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  const data = [
    {
      icon: home.src,
      val: "Home",
    },
    {
      icon: dashboard.src,
      val: "Boards",
    },
    {
      icon: settings.src,
      val: "Settings",
    },
    {
      icon: team.src,
      val: "Teams",
    },
    {
      icon: graph.src,
      val: "Analytics",
    },
  ];
  return (
    <div className="menu-container">
      <div className="header">
        <div className="header-upper">
          <div className="image">
            <img className="inside-image" src={user.src} alt="" />
          </div>
          <div className="name">{name}</div>
        </div>
        <div className="header-bottom">
          <div className="hb-icon">
            <div className="img">
              <img src={bell.src} alt="" />
            </div>
            <div className="img main-point">
              <img src={loader.src} alt="" />
              <div className="point"></div>
            </div>
            <div className="img">
              <img src={rightarrow.src} alt="" />
            </div>
          </div>
          <div className="btn">
            <Button disabled={loading} onClick={logout} className="inside-btn">
              {loading ? <img src={spinnerWhite.src} alt="" /> : null}Logout
            </Button>
          </div>
        </div>
      </div>
      <div className="middle-section">
        {data.map((opt, ind) => {
          return <NavBar key={ind} icon={opt.icon} val={opt.val} />;
        })}
        <div className="middle-btn">
          <Button className="inside-middle-btn">
            Create new task{" "}
            <div className="plus-icon">
              <img src={plus.src} alt="" />
            </div>{" "}
          </Button>
        </div>
      </div>
      <div className="bottom-section">
        <div className="inside-bs">
          <div className="bs-img">
            <img className="bs-icon" src={download.src} alt="" />
          </div>
          <div className="bs-text">
            <div className="upper-text">Download the App</div>
            <div className="lower-text">Get the full experience</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
