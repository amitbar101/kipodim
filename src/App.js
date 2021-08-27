import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/Nav";
import Header from "./Components/Header/Header";
import Collections from "./Components/Collections/Collections";
import Clay from "./Components/Clay/Clay";
import JewelrysPage from "./Components/JewelrysPage/JewelrysPage";
import CustomMade from "./Components/CustomMade/CustomMade";
import Workshops from "./Components/Workshops/Workshops";
import Blog from "./Components/Blog/Blog";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <img className="logo-kipodim" src={process.env.PUBLIC_URL + 'logo_kipodim.png'} alt="logo" />
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/collections" component={(props) => <Collections {...props} myUniqueProp="elad!" />} />
          <Route path="/clay" component={Clay} />
          <Route path="/jewelry" component={JewelrysPage} />
          <Route path="/custom-made-items" component={CustomMade} />
          <Route path="/workshops" component={Workshops} />
          <Route path="/blog" component={Blog} />
        </Switch>
        <Footer/>

      </div>
    </Router>
  );
}

export default App;
