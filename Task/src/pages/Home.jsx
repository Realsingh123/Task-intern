import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="main">
      <div className="card">
        <div className="image-sec"></div>

        <div className="content">
    <h2 className="heading">Welcome to PopX</h2>
    <p className="para">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </div>
        <div className="btns">
          <button className="btn-1" onClick={() => navigate("/signup")}>
            Create Account
          </button>
          <button className="btn-2" onClick={() => navigate("/sigin")}>Already Registered? Login</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
