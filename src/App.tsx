import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/home";
import Header from "./components/header";
import Navbar from "./components/navbar";
import CylindricalTransposition from "./views/cylindrical-transposition";
import MinimumBlankSize from "./views/minimum-blank-size";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/optomtools">
        <div className="grid grid-rows-1 bg-slate-50">
          <div className="py-4 px-6 bg- border border-b-slate-400">
            <Header />
          </div>
          <div className="grid grid-cols-5 gap-1 p-6 bg-slate-100">
            <div>
              <Navbar />
            </div>
            <div className="col-span-4 bg-slate-200">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="cylindrical_transposition"
                  element={<CylindricalTransposition />}
                />
                <Route
                  path="Minimum_blank_size"
                  element={<MinimumBlankSize />}
                />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
