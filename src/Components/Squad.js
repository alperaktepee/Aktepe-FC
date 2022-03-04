import React from "react";
import SquadItem from "./SquadItem";
import Rankin from "./Squad/Images/rankin.png";
import Abdullahi from "./Squad/Images/abdullahi.png";
// import Ali from "./Squad/Images/ali.png";
import Arias from "./Squad/Images/arias.png";
// import Artean from "./Squad/Images/artean.png";
import Asamoah from "./Squad/Images/asamoah.png";
import Aslan from "./Squad/Images/aslan.png";
import Castro from "./Squad/Images/castro.png";
import Cook from "./Squad/Images/cook.png";
// import Dawson from "./Squad/Images/dawson.png";
// import Eren from "./Squad/Images/eren.png";
import Ferrari from "./Squad/Images/ferrari.png";
import Ferretti from "./Squad/Images/ferretti.png";
// import Gwyn from "./Squad/Images/gwyn.png";
// import Halliday from "./Squad/Images/halliday.png";
import Hammond from "./Squad/Images/hammond.png";
// import Jarvela from "./Squad/Images/jarvela.png";
import Kalua from "./Squad/Images/kalua.png";
import Kolovetsios from "./Squad/Images/kolovetsios.png";
// import Lawton from "./Squad/Images/lawton.png";
import Lecomte from "./Squad/Images/lecomte.png";
import Legros from "./Squad/Images/legros.png";
// import Mosquera from "./Squad/Images/mosquera.png";
// import Moya from "./Squad/Images/moya.png";
// import Niilo from "./Squad/Images/niilo.png";
import Pospisil from "./Squad/Images/pospisil.png";
import Stief from "./Squad/Images/stief.png";
// import Tijanovich from "./Squad/Images/tijanovich.png";
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
import McGuinness from "./Squad/Images/mcguinness.png"
import Ramazan from "./Squad/Images/ramazan.png"
function Squad() {
  const squad = [
    {
      img: <img src={Ferretti} className="rankin" alt="Ferretti" />,
      shirtNumber: 12,
      name: "Daniel Ferretti",
      position: "GK",
      nationality: "Italy",
    },
    {
      img: <img src={Rankin} className="rankin" alt="Rankin" />,
      shirtNumber: 1,
      name: "Oliver Rankin",
      position: "GK",
      nationality: "Scotland",
    },
    {
      img: <img src={Volkan} className="rankin" alt="Volkan" />,
      shirtNumber: 15,
      name: "Volkan Küçük",
      position: "GK",
      nationality: "Turkey",
    },
    {
      img: <img src={Bulentdemir} className="rankin" alt=" BulentDemir" />,
      shirtNumber: 30,
      name: "Bülent Demir",
      position: "LB",
      nationality: "Turkey",
    },
    {
      img: <img src={Stief} className="rankin" alt=" Stief" />,
      shirtNumber: 2,
      name: "Ronny Stief",
      position: "LB",
      nationality: "Germany",
    },
    {
      img: <img src={Cook} className="rankin" alt="Cook" />,
      shirtNumber: 19,
      name: "Cian Cook",
      position: "LB",
      nationality: "Wales",
    },
    {
      img: <img src={Winkler} className="rankin" alt="Winkler" />,
      shirtNumber: 24,
      name: "Niklas Winkler",
      position: "LB",
      nationality: "Austria",
    },
    {
      img: <img src={Ferrari} className="rankin" alt="Ferrari" />,
      shirtNumber: 5,
      name: "Roberto Ferrari",
      position: "CB",
      nationality: "Italy",
    },
    {
      img: <img src={Caldara} className="rankin" alt="Caldara" />,
      shirtNumber: 26,
      name: "Mattia Caldara",
      position: "CB",
      nationality: "Italy",
    },
    {
      img: <img src={Kolovetsios} className="rankin" alt="Kolovetsios" />,
      shirtNumber: 4,
      name: "Dimitrios Kolovetsios",
      position: "CB",
      nationality: "Greece",
    },
    {
      img: <img src={Tine} className="rankin" alt="Tine" />,
      shirtNumber: 14,
      name: "Idrissa Tine",
      position: "CB",
      nationality: "Gabon",
    },
    {
      img: <img src={Hammond} className="rankin" alt="Hammond" />,
      shirtNumber: 3,
      name: "Ellis Hammond",
      position: "CB",
      nationality: "England",
    },
    {
      img: <img src={Kalua} className="rankin" alt=" Kalua" />,
      shirtNumber: 16,
      name: "Kelvin Kalua",
      position: "RB",
      nationality: "New Zeland",
    },
    {
      img: <img src={Legros} className="rankin" alt=" Legros" />,
      shirtNumber: 6,
      name: "Maxence Legros",
      position: "RB",
      nationality: "France",
    },
    {
      img: <img src={Scally} className="rankin" alt="Scally" />,
      shirtNumber: 32,
      name: "Joe Scally",
      position: "RB",
      nationality: "USA",
    },
    // {
    //   img: <img src={Niilo} className="rankin" alt="Niilo" />,
    //   shirtNumber: 28,
    //   name: "Oliver Niilo",
    //   position: "RB",
    //   nationality: "Finland",
    // },
    {
      img: <img src={Castro} className="rankin" alt="Castro" />,
      shirtNumber: 13,
      name: "Cléber Castro",
      position: "CDM",
      nationality: "Brazil",
    },

    {
      img: <img src={Tanerbaykurt} className="rankin" alt="TanerBaykurt" />,
      shirtNumber: 29,
      name: "Taner Baykurt",
      position: "CDM",
      nationality: "Turkey",
    },
    {
      img: <img src={McGuinness} className="rankin" alt="McGuinness" />,
      shirtNumber: 33,
      name: "Tommy McGuinness",
      position: "CDM",
      nationality: "Northern Ireland",
    },
    {
      img: <img src={Caseres} className="rankin" alt="Caseres" />,
      shirtNumber: 18,
      name: "Santiago Cáseres",
      position: "CDM",
      nationality: "Argentina",
    },
    {
      img: <img src={Vernam} className="rankin" alt="Vernam" />,
      shirtNumber: 17,
      name: "Charles Vernam",
      position: "LMF",
      nationality: "England",
    },
    {
      img: <img src={Ramazan} className="rankin" alt="Ramazan" />,
      shirtNumber: 35,
      name: "Ramazan Yılmaz",
      position: "LMF",
      nationality: "Turkey",
    },
    {
      img: <img src={Asamoah} className="rankin" alt="Asamoah" />,
      shirtNumber: 8,
      name: "Samuel Asamoah",
      position: "CM",
      nationality: "Ghana",
    },

    // {
    //   img: <img src={Ali} className="rankin" alt="Ali" />,
    //   shirtNumber: 30,
    //   name: "Ali Binici",
    //   position: "CM",
    //   nationality: "Turkey",
    // },
    {
      img: <img src={Kovac} className="rankin" alt="Kovac" />,
      shirtNumber: 7,
      name: "Damjan Kovač",
      position: "CM",
      nationality: "Scotland",
    },
    {
      img: <img src={Aslan} className="rankin" alt=" Aslan" />,
      shirtNumber: 23,
      name: "Yasin Aslan",
      position: "CAM",
      nationality: "Turkey",
    },
    {
      img: <img src={Barkley} className="rankin" alt="Barkley" />,
      shirtNumber: 20,
      name: "Ross Barkley",
      position: "CAM",
      nationality: "England",
    },
    {
      img: <img src={Arias} className="rankin" alt="Arias" />,
      shirtNumber: 21,
      name: "Unai Arias",
      position: "LWF",
      nationality: "Equador",
    },
    {
      img: <img src={Dembele} className="rankin" alt="Dembélé" />,
      shirtNumber: 34,
      name: "Karamoko Dembélé",
      position: "RWF",
      nationality: "England",
    },
    {
      img: <img src={Morutan} className="rankin" alt="Morutan" />,
      shirtNumber: 21,
      name: "Olimpiu Moruţan",
      position: "RWF",
      nationality: "Romania",
    },
    {
      img: <img src={Lecomte} className="rankin" alt="Lecomte" />,
      shirtNumber: 25,
      name: "Matthieu Lecomte",
      position: "CF",
      nationality: "France",
    },
    {
      img: <img src={Abdullahi} className="rankin" alt="Abdullahi" />,
      shirtNumber: 39,
      name: "Suleiman Abdullahi",
      position: "ST",
      nationality: "Nigeria",
    },
    {
      img: <img src={Mayoral} className="rankin" alt="Mayoral" />,
      shirtNumber: 10,
      name: "Borja Mayoral",
      position: "ST",
      nationality: "Spain",
    },
    {
      img: <img src={Pospisil} className="rankin" alt="Pospišil" />,
      shirtNumber: 22,
      name: "Daniel Pospišil",
      position: "ST",
      nationality: "Czech",
    },
    {
      img: <img src={Schmidt} className="rankin" alt="Schmidt" />,
      shirtNumber: 28,
      name: "Andreas Schmidt",
      position: "ST",
      nationality: "Austria",
    },
  ];

  let squadcontent = squad.map((squad) => (
    <SquadItem
      key={squad.name}
      img={squad.img}
      shirtNumber={squad.shirtNumber}
      name={squad.name}
      position={squad.position}
      nationality={squad.nationality}
    />
  ));

  return <div>{squadcontent}</div>;
}

export default Squad;
