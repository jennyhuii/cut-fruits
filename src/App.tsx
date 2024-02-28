import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import FruitPlate from "./pages/FruitPlate";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<FruitPlate />}></Route>
          </Routes>
        </BrowserRouter>
        <FruitPlate />
      </div>
    </div>
  );
};

export default App;
