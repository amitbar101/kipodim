import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/Nav";
import Header from "./Components/Header/Header";
import JewelrysPage from "./Components/JewelrysPage/JewelrysPage";
import CustomMade from "./Components/CustomMade/CustomMade";
import Workshops from "./Components/Workshops/Workshops";
import Footer from "./Components/Footer/Footer";
import ItemsPage from "./Components/ItemsPage/ItemsPage";
import CategoriesPage from "./Components/Categories/CategoriesPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <img className="logo-kipodim" src={"/logo_kipodim.png"} alt="logo" />
        <Nav />
        <Switch>
          <Route path="/" exact={true} component={Home} />
          {}
          {/* <Route path="/collections" exact component={CategoriesPage} />
          <Route path="/clay" exact component={CategoriesPage} /> */}
          <Route path="/jewelry" component={JewelrysPage} />
          <Route path="/custom-made-items" component={CustomMade} />
          <Route path="/workshops" component={Workshops} />
          <Route path="/clay/plates" component={ItemsPage} />
          <Route path="/clay/mugs" component={ItemsPage} />
          <Route path="/clay/bowls" component={ItemsPage} />
          <Route path="/clay/garden" component={ItemsPage} />
          <Route path="/collections/plates" component={ItemsPage} />
          <Route path="/collections/mugs" component={ItemsPage} />
          <Route path="/collections/bowls" component={ItemsPage} />
          <Route path="/collections/garden" component={ItemsPage} />
        </Switch>

      </Router>
      <Footer />
    </div>
  );
}

export default App;
