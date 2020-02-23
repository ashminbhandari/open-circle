import React from 'react';
import Landing from './components/Landing'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router,  Switch} from 'react-router-dom';
import Route from 'react-router-dom/Route';

function App() {
  return (
        <Router>
        <div className="App">
        </div>
            <Switch>
            <Route path="/" exact component={Landing}/>
            <Route path="/" component={Landing}/>
            </Switch>
        </Router>

  );
}

export default App;
