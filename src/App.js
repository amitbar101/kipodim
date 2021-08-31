import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/Nav";
import Header from "./Components/Header/Header";
import CustomMade from "./Components/CustomMade/CustomMade";
import Workshops from "./Components/Workshops/Workshops";
import Footer from "./Components/Footer/Footer";
import ItemsPage from "./Components/ItemsPage/ItemsPage";
import CategoriesPage from "./Components/Categories/CategoriesPage";

const allRoutes = [
  { path: "/", isExact: true, Component: Home },
  { path: "/collections", isExact: true, Component: CategoriesPage },
  { path: "/clay", isExact: true, Component: CategoriesPage },
  { path: "/jewelry", isExact: false, Component: ItemsPage },
  { path: "/custom-made-items", isExact: false, Component: CustomMade },
  { path: "/workshops", isExact: false, Component: Workshops },
  { path: "/clay/plates", isExact: false, Component: ItemsPage },
  { path: "/clay/mugs", isExact: false, Component: ItemsPage },
  { path: "/clay/bowls", isExact: false, Component: ItemsPage },
  { path: "/clay/garden", isExact: false, Component: ItemsPage },
  { path: "/collections/plates", isExact: false, Component: ItemsPage },
  { path: "/collections/mugs", isExact: false, Component: ItemsPage },
  { path: "/collections/bowls", isExact: false, Component: ItemsPage },
  { path: "/collections/garden", isExact: false, Component: ItemsPage },
  { path: "/collections/mahsan", isExact: false, Component: ItemsPage },
];

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <img className="logo-kipodim" src={"/logo_kipodim.png"} alt="logo" />
        <Nav />
        <Switch>
          {allRoutes.map((route) => (
            <Route
              path={route.path}
              exact={route.isExact}
              component={route.Component}
            />
          ))}
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
