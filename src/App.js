import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Watchlist } from "./components/Watchlist";
import { Add } from "./components/Add";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";
import { GlobalProvider } from "./context/GlobalState";
import { Watched } from "./components/Watched";


function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Add />
          </Route>

          <Route exact path="/watchlist">
            <Watchlist />
          </Route>

          <Route path="/watched">
            <Watched />
          </Route>

          
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
