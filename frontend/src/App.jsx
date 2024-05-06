import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import FetchItem from "./components/FetchItem";
export default function App() {
  return (
    <BrowserRouter>
      <FetchItem />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
