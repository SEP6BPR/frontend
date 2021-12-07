import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Add } from "./components/Add";
import './App.css';
import './lib/font-awesome/css/all.min.css';
import {GlobalProvider} from './context/GlobalState';



function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header/>
        <Switch>
          <Route path="/add">
            <Add />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
    
  );
}

export default App;
