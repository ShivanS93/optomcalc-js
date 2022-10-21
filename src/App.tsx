import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import CylindricalTransposition from "./views/CylindricalTransposition";
import MinimumBlankSize from "./views/MinimumBlankSize";
import BackVertexPower from "./views/BackVertexPower";
import CrossCylinder from "./views/CrossCylinder";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/optomcalc">
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
                <Route
                  path="minimum_blank_size"
                  element={<MinimumBlankSize />}
                />
                <Route path="back_vertex_power" element={<BackVertexPower />} />
                <Route path="cross_cylinder" element={<CrossCylinder />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
