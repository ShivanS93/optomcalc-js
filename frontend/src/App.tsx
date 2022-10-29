import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import CylindricalTransposition from "./views/CylindricalTransposition";

function App() {
  return (
    <div className="App">
      <div className="grid grid-rows-1">
        <Header />
        <div className="grid grid-cols-5 gap-1 p-6">
          <div>
            <Navbar />
          </div>
          <div className="col-span-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="cylindrical_transposition"
                element={<CylindricalTransposition />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
