import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navigation from "./Components/Navigation";
import CountrySectionPage from "./Components/CountrySectionPage";
import CountryPage from "./Components/CountryPage";

function App() {
  return (
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <CountrySectionPage />
          </Route>
          <Route path="/:id">
            <CountryPage />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
