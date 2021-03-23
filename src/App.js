import Header from './components/layout/Header';
import Home from './components/pages/Home';
import Form from './components/pages/Formularios';
import Gallery from './components/pages/Gallery';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/form" component={Form} />
          <Route path="/gallery" component={Gallery} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
