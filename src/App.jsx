import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Location from "./pages/Location";
import About from "./pages/About";
import Error from "./pages/Error";

import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

import "./styles/main.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/location/:id" element={<Location />} />
            <Route path="/About" element={<About />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
