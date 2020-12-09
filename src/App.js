
import { BrowserRouter as Router, Route } from "react-router-dom";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { Container } from 'semantic-ui-react'
import Navigation from './components/Navigation/Navigation'
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navigation />
      <Container>
        <Route exact path="/" component={Index} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      </Container>

    </Router>
  );
}

export default App;
