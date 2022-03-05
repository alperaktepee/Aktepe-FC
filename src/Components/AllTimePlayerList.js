import React from "react";
import Records from "./Records";
import Rankin from "./Squad/Images/rankin.png";
import Abdullahi from "./Squad/Images/abdullahi.png";
import Ali from "./Squad/Images/ali.png";
import Arias from "./Squad/Images/arias.png";
import Artean from "./Squad/Images/artean.png";
import Asamoah from "./Squad/Images/asamoah.png";
import Aslan from "./Squad/Images/aslan.png";
import Castro from "./Squad/Images/castro.png";
import Cook from "./Squad/Images/cook.png";
import Dawson from "./Squad/Images/dawson.png";
import Eren from "./Squad/Images/eren.png";
import Ferrari from "./Squad/Images/ferrari.png";
import Ferretti from "./Squad/Images/ferretti.png";
import Gwyn from "./Squad/Images/gwyn.png";
import Halliday from "./Squad/Images/halliday.png";
import Hammond from "./Squad/Images/hammond.png";
import Jarvela from "./Squad/Images/jarvela.png";
import Kalua from "./Squad/Images/kalua.png";
import Kolovetsios from "./Squad/Images/kolovetsios.png";
import Lawton from "./Squad/Images/lawton.png";
import Lecomte from "./Squad/Images/lecomte.png";
import Legros from "./Squad/Images/legros.png";
import Mosquera from "./Squad/Images/mosquera.png";
import Moya from "./Squad/Images/moya.png";
import Niilo from "./Squad/Images/niilo.png";
import Pospisil from "./Squad/Images/pospisil.png";
import Stief from "./Squad/Images/stief.png";
import Tijanovich from "./Squad/Images/tijanovich.png";
import Tine from "./Squad/Images/tine.png";
import Vernam from "./Squad/Images/vernam.png";
import Volkan from "./Squad/Images/volkan.png";
import Winkler from "./Squad/Images/winkler.png";
import Bulentdemir from "./Squad/Images/bulentdemir.png";
import Scally from "./Squad/Images/scally.png";
import Tanerbaykurt from "./Squad/Images/tanerbaykurt.png";
import Kovac from "./Squad/Images/kovac.png";
import Schmidt from "./Squad/Images/schmidt.png";
import Morutan from "./Squad/Images/morutan.png";
import Caseres from "./Squad/Images/caseres.png";
import Caldara from "./Squad/Images/caldara.png";
import Dembele from "./Squad/Images/dembele.png";
import Mayoral from "./Squad/Images/mayoral.png";
import Barkley from "./Squad/Images/barkley.png";
import McGuinness from "./Squad/Images/mcguinness.png";
import Ramazan from "./Squad/Images/ramazan.png";

export default function AllTimePlayerList() {
  const alltimeplayers = [
    {
      img: <img src={Rankin} className="rankin1" alt="Rankin" />,
      name: "Oliver Rankin",
      played: 63,
      goal: 0,
      assist: 0,
    },
    {
      img: <img src={Ramazan} className="rankin1" alt="Ramazan" />,
      name: "Ramazan Yılmaz",
      played: 1,
      goal: 0,
      assist: 0,
    },
    {
      img: <img src={McGuinness} className="rankin1" alt="McGuinness" />,
      name: "Tommy McGuinness",
      played: 0,
      goal: 0,
      assist: 0,
    },
    {
      img: <img src={Hammond} className="rankin1" alt="Hammond" />,
      name: "Ellis Hammond",
      played: 82,
      goal: 2,
      assist: 0,
    },
    {
      img: <img src={Kalua} className="rankin1" alt="Kalua" />,
      name: "Kelvin Kalua",
      played: 36,
      goal: 1,
      assist: 5,
    },
    {
      img: <img src={Vernam} className="rankin1" alt="Vernam" />,
      name: "Charles Vernam",
      played: 98,
      goal: 21,
      assist: 27,
    },
    {
      img: <img src={Lecomte} className="rankin1" alt="Lecomte" />,
      name: "Matthieu Lecomte",
      played: 15,
      goal: 4,
      assist: 5,
    },
    {
      img: <img src={Pospisil} className="rankin1" alt="Pospisil" />,
      name: "Daniel Pospisil",
      played: 52,
      goal: 27,
      assist: 11,
    },
    {
      img: <img src={Mayoral} className="rankin1" alt="Mayoral" />,
      name: "Borja Mayoral",
      played: 14,
      goal: 15,
      assist: 3,
    },
    {
      img: <img src={Barkley} className="rankin1" alt="Barkley" />,
      name: "Ross Barkley",
      played: 12,
      goal: 12,
      assist: 6,
    },
    {
      img: <img src={Volkan} className="rankin1" alt="Volkan" />,
      name: "Volkan Küçük",
      played: 9,
      goal: 0,
      assist: 0,
    },
    {
      img: <img src={Ferretti} className="rankin1" alt="Ferretti" />,
      name: "Daniel Ferretti",
      played: 67,
      goal: 0,
      assist: 0,
    },
    {
      img: <img src={Stief} className="rankin1" alt="Stief" />,
      name: "Ronny Stief",
      played: 63,
      goal: 0,
      assist: 4,
    },
    {
      img: <img src={Winkler} className="rankin1" alt="Winkler" />,
      name: "Niklas Winkler",
      played: 0,
      goal: 0,
      assist: 0,
    },
    {
      img: <img src={Cook} className="rankin1" alt="Cook" />,
      name: "Cian Cook",
      played: 2,
      goal: 0,
      assist: 0,
    },
    {
      img: <img src={Ferrari} className="rankin1" alt="Ferrari" />,
      name: "Roberto Ferrari",
      played: 60,
      goal: 1,
      assist: 0,
    },
    {
      img: <img src={Caldara} className="rankin1" alt="Caldara" />,
      name: "Mattia Caldara",
      played: 15,
      goal: 0,
      assist: 0,
    },
    {
      img: <img src={Tine} className="rankin1" alt="Tine" />,
      name: "Idrissa Tine",
      played: 26,
      goal: 0,
      assist: 0,
    },
    {
      img: <img src={Kolovetsios} className="rankin1" alt="Kolovetsios" />,
      name: "Dimitrisos Kolovetsios",
      played: 23,
      goal: 0,
      assist: 0,
    },
    {
      img: <img src={Legros} className="rankin1" alt="Legros" />,
      name: "Maxence Legros",
      played: 48,
      goal: 0,
      assist: 5,
    },
    {
      img: <img src={Niilo} className="rankin1" alt="Niilo" />,
      name: "Oliver Niilo",
      played: 3,
      goal: 0,
      assist: 0,
    },
    {
      img: <img src={Caseres} className="rankin1" alt="Caseres" />,
      name: "Santiago Cáseres",
      played: 17,
      goal: 1,
      assist: 0,
    },
    {
      img: <img src={Castro} className="rankin1" alt="Castro" />,
      name: "Cléber Castro",
      played: 36,
      goal: 1,
      assist: 0,
    },
    {
      img: <img src={Asamoah} className="rankin1" alt="Asamoah" />,
      name: "Samuel Asamoah",
      played: 59,
      goal: 10,
      assist: 15,
    },
    {
      img: <img src={Ali} className="rankin1" alt="Ali" />,
      name: "Ali Binici",
      played: 4,
      goal: 1,
      assist: 1,
    },
    {
      img: <img src={Aslan} className="rankin1" alt="Aslan" />,
      name: "Yasin Aslan",
      played: 32,
      goal: 3,
      assist: 12,
    },
    {
      img: <img src={Arias} className="rankin1" alt="Arias" />,
      name: "Unai Arias",
      played: 11,
      goal: 5,
      assist: 2,
    },
    {
      img: <img src={Dembele} className="rankin1" alt="Dembele" />,
      name: "Karamoko Dembélé",
      played: 15,
      goal: 4,
      assist: 5,
    },
    {
      img: <img src={Morutan} className="rankin1" alt="Morutan" />,
      name: "Olimpiu Moruţan",
      played: 18,
      goal: 7,
      assist: 9,
    },
    {
      img: <img src={Abdullahi} className="rankin1" alt="Abdullahi" />,
      name: "Suleiman Abdullahi",
      played: 59,
      goal: 49,
      assist: 12,
    },
    {
      img: <img src={Bulentdemir} className="rankin1" alt="BulentDemir" />,
      name: "Bülent Demir",
      played: 4,
      goal: 0,
      assist: 0,
    },
    {
      img: <img src={Scally} className="rankin1" alt="Scally" />,
      name: "Joe Scally",
      played: 15,
      goal: 0,
      assist: 1,
    },
    {
      img: <img src={Tanerbaykurt} className="rankin1" alt="Taner" />,
      name: "Taner Baykurt",
      played: 2,
      goal: 0,
      assist: 0,
    },
    {
      img: <img src={Kovac} className="rankin1" alt="Kovac" />,
      name: "Damjan Kovač",
      played: 18,
      goal: 3,
      assist: 10,
    },
    {
      img: <img src={Schmidt} className="rankin1" alt="Schmidt" />,
      name: "Andreas Schmidt",
      played: 2,
      goal: 0,
      assist: 2,
    },
    {
      name: "Jude Peacock",
      played: 38,
      goal: 0,
      assist: 3,
    },
    {
      name: "Nikko Boxall",
      played: 21,
      goal: 0,
      assist: 0,
    },
    {
      name: "Roman Marsden",
      played: 37,
      goal: 0,
      assist: 1,
    },
    {
      name: "Dylan Kennedy",
      played: 6,
      goal: 0,
      assist: 0,
    },

    {
      name: "Luke Fox",
      played: 23,
      goal: 0,
      assist: 1,
    },

    {
      img: <img src={Halliday} className="rankin" alt="Halliday" />,
      name: "Jack Halliday",
      played: 63,
      goal: 13,
      assist: 11,
    },

    {
      name: "Dereck Burke",
      played: 33,
      goal: 0,
      assist: 1,
    },
    {
      name: "Matthew Garbett",
      played: 87,
      goal: 33,
      assist: 39,
    },
    {
      name: "Kristaps Kaufmanis",
      played: 14,
      goal: 1,
      assist: 1,
    },
    {
      name: "Andre de Jong",
      played: 31,
      goal: 7,
      assist: 6,
    },
    {
      img: <img src={Artean} className="rankin1" alt="Artean" />,
      name: "Andrei Artean",
      played: 48,
      goal: 10,
      assist: 6,
    },
    {
      img: <img src={Moya} className="rankin1" alt="Moya" />,
      name: "Iker Moya",
      played: 37,
      goal: 1,
      assist: 3,
    },
    {
      img: <img src={Gwyn} className="rankin1" alt="Gwyn" />,
      name: "Cian Gwyn",
      played: 82,
      goal: 6,
      assist: 8,
    },
    {
      img: <img src={Tijanovich} className="rankin1" alt="Tijanovich" />,
      name: "Horacio Tijanovich",
      played: 47,
      goal: 15,
      assist: 18,
    },
    {
      img: <img src={Eren} className="rankin1" alt="Eren" />,
      name: "Eren Dinkçi",
      played: 51,
      goal: 19,
      assist: 14,
    },
    {
      img: <img src={Dawson} className="rankin1" alt="Dawson" />,
      name: "Jordan Dawson",
      played: 81,
      goal: 23,
      assist: 15,
    },
    {
      img: <img src={Jarvela} className="rankin1" alt="Jarvela" />,
      name: "Tarvo Jarvela",
      played: 11,
      goal: 0,
      assist: 0,
    },
    {
      img: <img src={Mosquera} className="rankin1" alt="Mosquera" />,
      name: "Evaristo Mosquera",
      played: 57,
      goal: 25,
      assist: 44,
    },
    {
      img: <img src={Lawton} className="rankin1" alt="Lawton" />,
      name: "Lucas Lawton",
      played: 111,
      goal: 67,
      assist: 44,
    },
  ];

  let gamePlayed = Math.max.apply(
    Math,
    alltimeplayers.map(function (player) {
      return player.played;
    })
  );

  let objPlayer = alltimeplayers.find(function (player) {
    return player.played === gamePlayed;
  });

  let playedPlayerName = objPlayer.name;
  let playedPlayerImg = objPlayer.img;
  let maxPlayed = [playedPlayerImg, playedPlayerName, gamePlayed];

  let maxGoal = Math.max.apply(
    Math,
    alltimeplayers.map(function (player) {
      return player.goal;
    })
  );

  let objGoalPlayer = alltimeplayers.find(function (player) {
    return player.goal === maxGoal;
  });

  let goalPlayerName = objGoalPlayer.name;
  let goalPlayerImg = objGoalPlayer.img;
  let goalMax = [goalPlayerImg, goalPlayerName, maxGoal];

  let maxAssist = Math.max.apply(
    Math,
    alltimeplayers.map(function (player) {
      return player.assist;
    })
  );

  let objAssistPlayer = alltimeplayers.find(function (player) {
    return player.assist === maxAssist;
  });

  let assistPlayerName = objAssistPlayer.name;
  let assistPlayerImg = objAssistPlayer.img;
  let assistMax = [assistPlayerImg, assistPlayerName, maxAssist];

  const records = (
    <Records
      playedimg={maxPlayed[0]}
      name={maxPlayed[1]}
      played={maxPlayed[2]}
      goalimg={goalMax[0]}
      goalname={goalMax[1]}
      goalcount={goalMax[2]}
      assistimg={assistMax[0]}
      assistname={assistMax[1]}
      assistcount={assistMax[2]}
    />
  );

  return <div>{records}</div>;
}
