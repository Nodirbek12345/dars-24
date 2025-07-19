import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import DetailUser from "./pages/detailUser/DetailUser";
import DetailProduct from "./pages/detailProduct/DeatailProduct";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Users from "./pages/users/Users";

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<DetailProduct />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<DetailUser />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
