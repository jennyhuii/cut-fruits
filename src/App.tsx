import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import WholeFruits from "./pages/WholeFruits";
import Apple from "./pages/Apple";
import DragonFruit from "./pages/DragonFruit";
import Grapes from "./pages/Grapes";
import Mandarin from "./pages/Mandarin";
import Mango from "./pages/Mango";
import Pear from "./pages/Pear";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<WholeFruits />}></Route>
            <Route path="/apple" element={<Apple />}></Route>
            <Route path="/dragonfruit" element={<DragonFruit />}></Route>
            <Route path="/grapes" element={<Grapes />}></Route>
            <Route path="/mandarin" element={<Mandarin />}></Route>
            <Route path="/mango" element={<Mango />}></Route>
            <Route path="/pear" element={<Pear />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
