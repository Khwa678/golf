import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Charities from "./pages/Charities";
import HowItWorks from "./pages/HowItWorks";
import Draw from "./pages/Draw";
import Pricing from "./pages/Pricing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/charities" element={<Charities />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/draw" element={<Draw />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;