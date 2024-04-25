import React from "react";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./Footer";
// import { Banner } from "./components/Banner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/search" element={<SearchPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <Banner /> */}
      {/* Home -->main page*/}
      {/* Header ->inside Home*/}

      {/* Banner ->inside Home*/}
      {/* Search ->inside Banner*/}

      {/* Cards  ->inside Home*/}

      {/* Footer ->inside Home*/}

      {/* Search page ->second page*/}
    </div>
  );
}

export default App;
