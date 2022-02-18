import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./views/home";
import CylindricalTransposition from "./views/cylindrical_transposition";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route
            path="cylindrical_transposition"
            element={<CylindricalTransposition />}
            exact
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
