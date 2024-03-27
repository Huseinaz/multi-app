import FirstApp from "./pages/Weather";
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/weather" element={<FirstApp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
