import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Squad from "./Components/Squad";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllTimePlayerList from "./Components/AllTimePlayerList";
import Fixture from "./Components/Fixture";
import Trophies from "./Components/Trophies";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/squad" element={<Squad />}></Route>
          <Route exact path="/records" element={<AllTimePlayerList />}></Route>
          <Route exact path="/fixture" element={<Fixture />}></Route>
          <Route exact path="/trophies" element={<Trophies />}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
