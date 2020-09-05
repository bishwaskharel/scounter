import React from "react";
import Navbar from "./components/Navbar/navbar.component";
import "./App.css";
import HomePage from "./pages/homePage/HomePage.component";
import Footer from "./components/Footer/footer.component";
import BlogPage from "./pages/blogPage/BlogPage.component";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage.component";
import NewsPage1 from "./pages/newsPage/NewsPage1.component";
import GameApp from "./pages/GameApp/GameApp.component"

import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/BlogPage" component={BlogPage} />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/AboutUsPage" component={AboutUsPage} />
          <Route exact path="/NewsPage1" component={NewsPage1} />
          <Route exact Path="/GameApp" component={GameApp} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
