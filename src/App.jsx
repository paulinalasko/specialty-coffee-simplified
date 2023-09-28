import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Origin from "./pages/Origin";
import Regions from "./pages/Regions";
import Processing from "./pages/Processing";
import Specialty from "./pages/Specialty";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/specialty-coffee-simplified/origin"
          element={<Origin />}
        />
        <Route
          path="/specialty-coffee-simplified/regions"
          element={<Regions />}
        />
        <Route
          path="/specialty-coffee-simplified/processing"
          element={<Processing />}
        />
        <Route
          path="/specialty-coffee-simplified/specialty-coffee"
          element={<Specialty />}
        />
        <Route path="/specialty-coffee-simplified/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
