import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./pages/Services";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Post from "./components/Post";
import Products from "./pages/Products";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/post/:id" element={<Post/>} />
          <Route path="/products/" element={<Products/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
