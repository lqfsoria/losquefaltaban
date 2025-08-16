// import { useState } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/pages/Footer";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <Header />
      <Home />
      {/* <About /> */}
      <Footer />
    </div>
  );
}

export default App;
