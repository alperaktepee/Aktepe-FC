import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="logohome">
        <img src={require("./aktepefc.png")} className="symbol" alt="Logo" />
      </div>
      <div className="homeImages">
      <img src={require("./stadium.jpg")} className="stadium" alt="Logo" />
       
      
    
        <div className="teaminfos">
       
          <div>
            <span className="teamlabel">FULL NAME :</span> Aktepe Football Club{" "}
          </div>
          <div>
            <span className="teamlabel">CITY :</span> Manchester
          </div>
          <div>
            <span className="teamlabel">FOUNDED YEAR :</span> 2013
          </div>
          <div>
            <span className="teamlabel">STADIUM :</span> Aktepe Stadium
          </div>
          <div>
            <span className="teamlabel">CAPACITY :</span> 42.000
          </div>
          <div>
            <span className="teamlabel">HEAD COACH :</span> Alper Aktepe
          </div>
          <div>
            <span className="teamlabel">LEAGUE :</span> England Football League
            One
          </div>
          <div>
            <span className="teamlabel">COLORS :</span> Red🔴 & White⚪
          </div>
          <div className="description">
          Founded by the Aktepe family in Manchester in 2013, Aktepe FC
          currently competes in EFL League One. In order to show the power of
          the Turks in football in England, the club uses the colors of the
          Turkish flag, red and white. Due to the admiration and sympathy of the
          club managers for Galatasaray, the club uses lions as its mascot and
          is called as lions. Our club plays its matches in Aktepe Stadium with
          a capacity of 42.000 people. In addition, our club is the first and
          only club of Turkish origin to compete in professional leagues in
          England.
        </div>
        </div>
        <img src={require("./fan.jpg")} className="fan" alt="Logo" />
        </div>
        
        
        <div className="kits">
          <h1>2023/2024 Season Kits</h1>
          <h2>Home & Away Kits </h2>
          <img src={require("./home.png")} className="img-kits" alt="Fans" />
          <img src={require("./away.png")} className="img-kits" alt="Fans" />
        </div>
      </div>
  
  );
}

export default Home;
