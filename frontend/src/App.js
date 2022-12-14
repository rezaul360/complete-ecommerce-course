import "react-toastify/dist/ReactToastify.css";
import Cart from "./components/cart/Catr";
import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import NotFound from "./components/NotFound";
import "./App.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
