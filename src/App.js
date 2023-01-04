import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./style.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index element={<Login />}/>
          <Route path="home" element={<Home />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
