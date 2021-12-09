import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Add } from "./components/Add";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";
import { GlobalProvider } from "./context/GlobalState";
import Movie from "./components/Movie";
import { Lists } from "./components/Lists";


function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />

        <Switch>
          <Route path="/">
            <Add />
          </Route>
          <Route path="/lists">
            <Lists />
          </Route>
         <Route path="/:movieId" element={<Movie />}>
            <Movie />
         </Route>

        </Switch>
      </Router>
    </GlobalProvider>
    
  );
}

export default App;
