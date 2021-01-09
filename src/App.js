import React from 'react'
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Home from "./components/pages/Home/Home";
import Education from "./components/pages/Home/Education";
import Courses from './components/pages/Home/Courses';
import Learn from './components/pages/Home/Learn';
import Teachers from './components/pages/Home/Teacher';
import Contact from './components/pages/Contact/Contact';
import Footer from "./components/Footer/Footer";




function App() {
  return (
    <div className="container-fluid">
    <Router>
      <Navbar />
       <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={Education}/>
        <Route exact path="/courses" component={Courses}/>                
        <Route exact path="/teachers" component={Teachers}/>
        <Route exact path="/tech" component={Learn}/>
        <Route exact path="/contact" component={Contact}/>
       </Switch>
       <Footer />
      
    </Router>
    
      
    </div>
  );
}

export default App;
