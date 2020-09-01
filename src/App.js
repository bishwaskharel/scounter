import React from "react";
import Navbar from "./components/Navbar/navbar.component";
import UpperBody from "./components/upperBody/upperBody.components";
import MiddleBody from "./components/middleBody/middleBody.components";
import "./App.css";
import Footer from "./components/Footer/footer.component";


function App() {
  return (
    <div className="App">
      <Navbar />
      <UpperBody />
      <MiddleBody />
      <Footer />
     
    </div>
  );
}

export default App;
