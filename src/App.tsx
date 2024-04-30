import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Fruits from "./pages/Fruits";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Fruits />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
