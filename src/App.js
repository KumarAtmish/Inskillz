import React from 'react'
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About";
import Courses from './components/pages/Courses';
import Tech from './components/pages/Tech';
import Teachers from './components/pages/Teachers';
import Contact from './components/pages/Contact/Contact';
import Footer from "./components/Footer/Footer";




function App() {
  return (
    <div className="container-fluid">
    <Router>
      <Navbar />
      
       <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About}/>
        <Route exact path="/courses" component={Courses}/>                
        <Route exact path="/teachers" component={Teachers}/>
        <Route exact path="/tech" component={Tech}/>
        <Route exact path="/contact" component={Contact}/>

       </Switch>
       <Footer />
      
    </Router>
    
      
    </div>
  );
}

export default App;
