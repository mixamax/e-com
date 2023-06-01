import "./App.css";
// import { Header } from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import { AboutPage } from "./pages/AboutPage";
import { BlogPage } from "./pages/BlogPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { NotfoundPage } from "./pages/NotfoundPage";
import { ShopPage } from "./pages/ShopPage";
import { Layout } from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />}></Route>
        <Route path="shop" element={<ShopPage />}></Route>
        <Route path="about" element={<AboutPage />}></Route>
        <Route path="blog" element={<BlogPage />}></Route>
        <Route path="contact" element={<ContactPage />}></Route>
        <Route path="*" element={<NotfoundPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
