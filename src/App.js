import Navbar from "./components/Navbar/Navbar"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from '@material-ui/core/Container';
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer/Footer"
import './App.css';

function App() {
  return (
    <Router>
        <Navbar />
        <Container>
        <Route exact path="/" component={Index} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        </Container>

        <Footer />


    </Router>
  );
}

export default App;
