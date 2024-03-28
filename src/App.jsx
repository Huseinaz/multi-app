import FirstApp from "./pages/Weather";
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calculator from "./pages/Calculator";
import StickyNotes from "./pages/StickyNotes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/weather" element={<FirstApp />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/stickynotes" element={<StickyNotes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
