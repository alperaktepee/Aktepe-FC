import React, { useState } from "react";
import FixtureItem from "./FixtureItem";
import FixtureFilterYear from "./FixtureFilterYear";
import FixtureFilterMonth from "./FixtureFilterMonth";
import "./Fixture.css";
function Fixture() {
  const fixtureData = [
    {
      team: "Lincoln City",
      homeaway: "Away",
      score: "0-6",
      result: "W",
      date: new Date(2022, 6, 30),
    },
    {
      team: "MK Dons",
      homeaway: "Home",
      score: "3-0",
      result: "W",
      date: new Date(2022, 7, 6),
    },
    {
      team: "Accrington",
      homeaway: "Home",
      score: "0-2",
      result: "L",
      date: new Date(2022, 7, 10),
    },
    {
      team: "Gillingham",
      homeaway: "Away",
      score: "4-3",
      result: "L",
      date: new Date(2022, 7, 13),
    },
    {
      team: "Plymouth",
      homeaway: "Home",
      score: "5-3",
      result: "W",
      date: new Date(2022, 7, 17),
    },
    {
      team: "Bolton",
      homeaway: "Away",
      score: "1-5",
      result: "W",
      date: new Date(2022, 7, 20),
    },
    {
      team: "Cambridge United",
      homeaway: "Home",
      score: "4-1",
      result: "W",
      date: new Date(2022, 7, 27),
    },
    {
      team: "Wycombe",
      homeaway: "Home",
      score: "1-1",
      result: "D",
      date: new Date(2022, 7, 31),
    },
    {
      team: "Peterborough",
      homeaway: "Away",
      score: "3-2",
      result: "L",
      date: new Date(2022, 8, 3),
    },
    {
      team: "Northampton",
      homeaway: "Home",
      score: "2-2",
      result: "D",
      date: new Date(2022, 8, 7),
    },
    {
      team: "Burton Albion",
      homeaway: "Home",
      score: "4-0",
      result: "W",
      date: new Date(2022, 8, 10),
    },
    {
      team: "Charlton",
      homeaway: "Home",
      score: "2-2",
      result: "D",
      date: new Date(2022, 8, 17),
    },
    {
      team: "Salford City",
      homeaway: "Away",
      score: "2-2",
      result: "D",
      date: new Date(2022, 8, 24),
    },
    {
      team: "Shrewsbury",
      homeaway: "Home",
      score: "1-1",
      result: "D",
      date: new Date(2022, 9, 1),
    },
    {
      team: "Hull City",
      homeaway: "Away",
      score: "1-4",
      result: "W",
      date: new Date(2022, 9, 8),
    },
    {
      team: "Cheltenham",
      homeaway: "Away",
      score: "4-2",
      result: "L",
      date: new Date(2022, 9, 12),
    },
    {
      team: "Doncaster",
      homeaway: "Home",
      score: "6-2",
      result: "W",
      date: new Date(2022, 9, 15),
    },
    {
      team: "Roterham",
      homeaway: "Away",
      score: "4-1",
      result: "L",
      date: new Date(2022, 9, 22),
    },
    {
      team: "Wycombe",
      homeaway: "Home",
      score: "4-0",
      result: "W",
      date: new Date(2022, 9, 29),
    },
    {
      team: "Bradford City",
      homeaway: "Away",
      score: "2-4",
      result: "W",
      date: new Date(2022, 10, 9),
    },
    {
      team: "Portsmouth",
      homeaway: "Away",
      score: "2-3",
      result: "W",
      date: new Date(2022, 10, 12),
    },
    {
      team: "Blackpool",
      homeaway: "Home",
      score: "5-0",
      result: "W",
      date: new Date(2022, 10, 19),
    },
    {
      team: "Port Vale",
      homeaway: "Away",
      score: "1-2",
      result: "W",
      date: new Date(2022, 10, 22),
    },
    {
      team: "Oxford United",
      homeaway: "Home",
      score: "3-1",
      result: "W",
      date: new Date(2022, 10, 26),
    },
    {
      team: "Portsmouth",
      homeaway: "Away",
      score: "1-3",
      result: "W",
      date: new Date(2022, 11, 3),
    },
    {
      team: "Wigan Athletic",
      homeaway: "Away",
      score: "2-3",
      result: "W",
      date: new Date(2022, 11, 6),
    },
    {
      team: "Fleetwood Town",
      homeaway: "Home",
      score: "4-2",
      result: "W",
      date: new Date(2022, 11, 10),
    },
    {
      team: "Wimbledon",
      homeaway: "Home",
      score: "5-2",
      result: "W",
      date: new Date(2022, 11, 14),
    },
    {
      team: "Northampton",
      homeaway: "Away",
      score: "2-2",
      result: "D",
      date: new Date(2022, 11, 18),
    },
    {
      team: "Peterborough",
      homeaway: "Home",
      score: "3-0",
      result: "W",
      date: new Date(2022, 11, 25),
    },
    {
      team: "Port Vale",
      homeaway: "Home",
      score: "3-1",
      result: "W",
      date: new Date(2022, 11, 28),
    },
    {
      team: "Blackpool",
      homeaway: "Away",
      score: "1-6",
      result: "W",
      date: new Date(2022, 11, 31),
    },
    {
      team: "Oxford United",
      homeaway: "Home",
      score: "5-3",
      result: "W",
      date: new Date(2023, 0, 4),
    },
    {
      team: "Millwall",
      homeaway: "Home",
      score: "1-1",
      result: "D",
      date: new Date(2023, 0, 7),
    },
    {
      team: "Milwall",
      homeaway: "Away",
      score: "2-3",
      result: "W",
      date: new Date(2023, 0, 10),
    },
    {
      team: "MK Dons",
      homeaway: "Away",
      score: "1-3",
      result: "L",
      date: new Date(2023, 0, 13),
    },
    {
      team: "Fleetwood Town",
      homeaway: "Away",
      score: "0-2",
      result: "W",
      date: new Date(2023, 0, 18),
    },
    {
      team: "Southampton",
      homeaway: "Away",
      score: "2-2",
      result: "D",
      date: new Date(2023, 0, 21),
    },
    {
      team: "Hull City",
      homeaway: "Home",
      score: "6-3",
      result: "W",
      date: new Date(2023, 0, 28),
    },
    {
      team: "Southampton",
      homeaway: "Home",
      score: "3-1",
      result: "W",
      date: new Date(2023, 0, 31),
    },
    {
      team: "Shrewsbury",
      homeaway: "Away",
      score: "5-3",
      result: "L",
      date: new Date(2023, 1, 3),
    },
    {
      team: "Blackpool",
      homeaway: "Away",
      score: "3-2",
      result: "L",
      date: new Date(2023, 1, 8),
    },
    {
      team: "Doncaster",
      homeaway: "Away",
      score: "1-5",
      result: "W",
      date: new Date(2023, 1, 12),
    },
    {
      team: "Plymouth",
      homeaway: "Away",
      score: "0-2",
      result: "W",
      date: new Date(2023, 1, 18),
    },
    {
      team: "Gillingham",
      homeaway: "Home",
      score: "2-0",
      result: "W",
      date: new Date(2023, 1, 25),
    },
    {
      team: "Arsenal",
      homeaway: "Away",
      score: "1-3",
      result: "W",
      date: new Date(2023, 1, 28),
    },
    {
      team: "Cambridge United",
      homeaway: "Away",
      score: "2-1",
      result: "L",
      date: new Date(2023, 2, 4),
    },
    {
      team: "Norwich City",
      homeaway: "Away",
      score: "3-0",
      result: "L",
      date: new Date(2023, 2, 11),
    },
    {
      team: "Charlton",
      homeaway: "Home",
      score: "3-2",
      result: "W",
      date: new Date(2023, 2, 19),
    },
    {
      team: "Bolton",
      homeaway: "Home",
      score: "3-0",
      result: "W",
      date: new Date(2023, 2, 22),
    },
    {
      team: "Burton Albion",
      homeaway: "Away",
      score: "1-2",
      result: "W",
      date: new Date(2023, 2, 25),
    },
    {
      team: "Wigan Athletic",
      homeaway: "Home",
      score: "3-0",
      result: "W",
      date: new Date(2023, 3, 1),
    },
    {
      team: "Oxford United",
      homeaway: "Away",
      score: "1-4",
      result: "W",
      date: new Date(2023, 3, 8),
    },
    {
      team: "Portsmouth",
      homeaway: "Home",
      score: "4-0",
      result: "W",
      date: new Date(2023, 3, 14),
    },
    {
      team: "Wycombe",
      homeaway: "Away",
      score: "1-6",
      result: "W",
      date: new Date(2023, 3, 17),
    },
    {
      team: "Cheltenham",
      homeaway: "Home",
      score: "2-2",
      result: "D",
      date: new Date(2023, 3, 22),
    },
    {
      team: "Salford City",
      homeaway: "Away",
      score: "2-5",
      result: "W",
      date: new Date(2023, 3, 29),
    },
    {
      team: "Lincoln City",
      homeaway: "Home",
      score: "2-0",
      result: "W",
      date: new Date(2023, 4, 6),
    },
    {
      team: "Rotherham",
      homeaway: "Home",
      score: "3-4",
      result: "L",
      date: new Date(2023, 4, 20),
    },
    {
      team: "Luton Town",
      homeaway: "Home",
      score: "3-2",
      result: "W",
      date: new Date(2023, 6, 29),
    },
    {
      team: "Barnsley",
      homeaway: "Away",
      score: "3-3",
      result: "D",
      date: new Date(2023, 7, 5),
    },
    {
      team: "Bristol Rovers",
      homeaway: "Home",
      score: "3-1",
      result: "W",
      date: new Date(2023, 7, 8),
    },
    {
      team: "Preston",
      homeaway: "Home",
      score: "1-2",
      result: "L",
      date: new Date(2023, 7, 12),
    },
    {
      team: "Milwall",
      homeaway: "Away",
      score: "2-3",
      result: "W",
      date: new Date(2023, 7, 15),
    },
    {
      team: "Bournemouth",
      homeaway: "Home",
      score: "6-2",
      result: "W",
      date: new Date(2023, 7, 19),
    },
    {
      team: "Exeter City",
      homeaway: "Away",
      score: "2-3",
      result: "W",
      date: new Date(2023, 7, 22),
    },
    {
      team: "West Bromwich",
      homeaway: "Away",
      score: "0-1",
      result: "W",
      date: new Date(2023, 7, 26),
    },
    {
      team: "Southampton",
      homeaway: "Home",
      score: "1-1",
      result: "D",
      date: new Date(2023, 8, 5),
    },
    {
      team: "Coventry City",
      homeaway: "Away",
      score: "1-4",
      result: "W",
      date: new Date(2023, 8, 9),
    },
    {
      team: "Peterborough",
      homeaway: "Home",
      score: "6-1",
      result: "W",
      date: new Date(2023, 8, 16),
    },
    {
      team: "Preston",
      homeaway: "Home",
      score: "2-1",
      result: "W",
      date: new Date(2023, 8, 20),
    },
    {
      team: "Nottingham Forest",
      homeaway: "Away",
      score: "0-1",
      result: "W",
      date: new Date(2023, 8, 23),
    },
    {
      team: "Norwich City",
      homeaway: "Home",
      score: "3-3",
      result: "D",
      date: new Date(2023, 8, 27),
    },
    {
      team: "Rotherham",
      homeaway: "Away",
      score: "2-7",
      result: "W",
      date: new Date(2023, 8, 30),
    },
    {
      team: "Derby County",
      homeaway: "Away",
      score: "0-6",
      result: "W",
      date: new Date(2023, 9, 14),
    },
    {
      team: "Stoke City",
      homeaway: "Home",
      score: "2-2",
      result: "D",
      date: new Date(2023, 9, 17),
    },
    {
      team: "Sheffield Wednesday",
      homeaway: "Home",
      score: "2-3",
      result: "L",
      date: new Date(2023, 9, 21),
    },
    {
      team: "Manchester City",
      homeaway: "Home",
      score: "3-2",
      result: "W",
      date: new Date(2023, 9, 24),
    },
    {
      team: "Bristol City",
      homeaway: "Away",
      score: "1-3",
      result: "W",
      date: new Date(2023, 9, 28),
    },
    {
      team: "Sheffield United",
      homeaway: "Home",
      score: "",
      result: "",
      date: new Date(2023, 10, 4),
    },
    {
      team: "Middlesbrough",
      homeaway: "Home",
      score: "",
      result: "",
      date: new Date(2023, 10, 8),
    },
    {
      team: "Reading FC",
      homeaway: "Away",
      score: "",
      result: "",
      date: new Date(2023, 10, 18),
    },
    {
      team: "Blackburn Rovers",
      homeaway: "Home",
      score: "",
      result: "",
      date: new Date(2023, 10, 25),
    },
    {
      team: "Cardiff City",
      homeaway: "Home",
      score: "",
      result: "",
      date: new Date(2023, 11, 2),
    },
    {
      team: "Swansea City",
      homeaway: "Away",
      score: "",
      result: "",
      date: new Date(2023, 11, 6),
    },
    {
      team: "Birmingham City",
      homeaway: "Away",
      score: "",
      result: "",
      date: new Date(2023, 11, 9),
    },
    {
      team: "Bristol City",
      homeaway: "Home",
      score: "",
      result: "",
      date: new Date(2023, 11, 13),
    },
    {
      team: "Sheffield Wednesday",
      homeaway: "Away",
      score: "",
      result: "",
      date: new Date(2023, 11, 16),
    },
    {
      team: "Wolves",
      homeaway: "Home",
      score: "",
      result: "",
      date: new Date(2023, 11, 20),
    },
    {
      team: "Nottingham Forest",
      homeaway: "Home",
      score: "",
      result: "",
      date: new Date(2023, 11, 24),
    },
    {
      team: "Peterborough",
      homeaway: "Away",
      score: "",
      result: "",
      date: new Date(2023, 11, 27),
    },
    {
      team: "Blackburn Rovers",
      homeaway: "Away",
      score: "",
      result: "",
      date: new Date(2023, 11, 30),
    },
    {
      team: "Reading FC",
      homeaway: "Home",
      score: "",
      result: "",
      date: new Date(2024, 0, 13),
    },
    {
      team: "Rotherham",
      homeaway: "Home",
      score: "",
      result: "",
      date: new Date(2024, 0, 20),
    },
    {
      team: "Norwich City",
      homeaway: "Away",
      score: "",
      result: "",
      date: new Date(2024, 0, 27),
    },
    {
      team: "Birmingham City",
      homeaway: "Home",
      score: "",
      result: "",
      date: new Date(2024, 1, 3),
    },
    {
      team: "Milwall",
      homeaway: "Home",
      score: "",
      result: "",
      date: new Date(2024, 1, 10),
    },
    {
      team: "Preston",
      homeaway: "Away",
      score: "",
      result: "",
      date: new Date(2024, 1, 17),
    },
    {
      team: "Middlesbrough",
      homeaway: "Away",
      score: "",
      result: "",
      date: new Date(2024, 1, 24),
    },
    {
      team: "Sheffield United",
      homeaway: "Away",
      score: "",
      result: "",
      date: new Date(2024, 2, 2),
    },
    {
      team: "Westbromwich",
      homeaway: "Home",
      score: "",
      result: "",
      date: new Date(2024, 2, 9),
    },
    {
      team: "Bournemouth",
      homeaway: "Away",
      score: "",
      result: "",
      date: new Date(2024, 2, 12),
    },
    {
      team: "Barnsley",
      homeaway: "Home",
      score: "",
      result: "",
      date: new Date(2024, 2, 16),
    },
    {
      team: "Luton Town",
      homeaway: "Away",
      score: "",
      result: "",
      date: new Date(2024, 2, 23),
    },
    {
      team: "Coventry City",
      homeaway: "Home",
      score: "",
      result: "",
      date: new Date(2024, 2, 31),
    },
    {
      team: "Southampton",
      homeaway: "Away",
      score: "",
      result: "",
      date: new Date(2024, 3, 6),
    },
    {
      team: "Stoke City",
      homeaway: "Away",
      score: "",
      result: "",
      date: new Date(2024, 3, 13),
    },
    {
      team: "Cardiff City",
      homeaway: "Away",
      score: "",
      result: "",
      date: new Date(2024, 3, 20),
    },
    {
      team: "Swansea City",
      homeaway: "Home",
      score: "",
      result: "",
      date: new Date(2024, 3, 28),
    },
    {
      team: "Derby County",
      homeaway: "Home",
      score: "",
      result: "",
      date: new Date(2024, 4, 11),
    },
  ];

  // const [data, setData] = useState([]);
  const [filteredMonth, setFilteredMonth] = useState(10);
  const [filteredYear, setFilteredYear] = useState(2023);

  // useEffect(() => {
  //   setData(fixtureData);
  // }, []);

  const filterChangeHandler = (e) => {
    setFilteredYear(Number(e.target.value));
  };

  const filterMonthChangeHandler = (e) => {
    setFilteredMonth(Number(e.target.value));
  };

  let content = fixtureData
    .filter((x) => x.date.getMonth() === filteredMonth)
    .filter((x) => x.date.getFullYear() === filteredYear)
    .map((e) => (
      <FixtureItem
        key={e.date}
        team={e.team}
        result={e.result}
        score={e.score}
        date={e.date}
        status={e.homeaway}
      />
    ));

  return (
    <div>
      <div className="fixture">
        <FixtureFilterYear
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <FixtureFilterMonth
          selected={filteredMonth}
          onChangeFilter={filterMonthChangeHandler}
        />
      </div>
      {content}
    </div>
  );
}
export default Fixture;
