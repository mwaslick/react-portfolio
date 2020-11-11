import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Navbar />
        <Route exact path="/" component={Index} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />

      </div>



    </Router>
  );
}

export default App;
