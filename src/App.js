import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Components/Navbar";
import Contact from "./Contact";
import Sidebar from "./Components/Sidebar";

function App() {
  // State for  the hamburgar menu when the site is responsive
  const [isOpen, setIsOpen] = useState(false);
  // Opening and closing the hamburgar menu
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // All content
  return (
    <Router>
      <div className="App">
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
