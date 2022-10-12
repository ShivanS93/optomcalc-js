import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/home";
import Header from "./components/header";
import Navbar from "./components/navbar";
import CylindricalTransposition from "./views/cylindrical-transposition";
import MinimumBlankSize from "./views/minimum-blank-size";
import BackVertexPower from "./views/backVertexPower";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/optomcalc">
        <div className="grid grid-rows-1">
          <div className="py-4 px-6 border bg-blue-800 text-white">
            <Header />
          </div>
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
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
