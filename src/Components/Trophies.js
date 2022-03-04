import React from "react";
import Papajohns from "./papajohns.png";
import Efl2 from "./efl2.jpg";
import Trophy from "./Trophy";
import leagueone from "./leagueonee.webp";
import "./Trophies.css";

function Trophies() {
  const trophy = [
    {
      id: 2,
      year: "2022-2023",
      title: "English Football League One",
      status: "Winner",
      image: <img src={leagueone} className="cup" alt="Efl2" />,
    },
    {
      id: 1,
      year: "2021-2022",
      title: "English Football League Two",
      status: "Winner",
      image: <img src={Efl2} className="cup" alt="Efl2" />,
    },
    {
      id: 0,
      year: "2021-2022",
      title: "Papa John's Trophy Cup",
      status: "Winner",
      image: <img src={Papajohns} className="cup" alt="PapaJohns" />,
    },
  ];

  let trophies = trophy.map((trophy) => (
    <Trophy
      key={trophy.id}
      img={trophy.image}
      year={trophy.year}
      title={trophy.title}
      status={trophy.status}
    />
  ));
  let papaCounter = 0;
  for (let i = 0; i < trophy.length; i++) {
    if (trophy[i].title === "Papa John's Trophy Cup") {
      papaCounter++;
    }
  }
  let efltwoCounter = 0;
  for (let i = 0; i < trophy.length; i++) {
    if (trophy[i].title === "English Football League Two") {
      efltwoCounter++;
    }
  }
  let efloneCounter = 0;
  for (let i = 0; i < trophy.length; i++) {
    if (trophy[i].title === "English Football League One") {
      efloneCounter++;
    }
  }

  let x = 0x1f3c6;
  return (
    <div className="trophies">
      <div className="trophies-header">
        <h1>
          Papa John's Trophy Cup : X{papaCounter}{" "}
          {String.fromCodePoint(x).repeat(papaCounter)}
        </h1>
        <h1>
          English Football League Two : X{efltwoCounter}{" "}
          {String.fromCodePoint(x).repeat(efltwoCounter)}
        </h1>
        <h1>
          English Football League One : X{efloneCounter}{" "}
          {String.fromCodePoint(x).repeat(efloneCounter)}
        </h1>
      </div>
      {trophies}
    </div>
  );
}

export default Trophies;
