import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from "./components/pages/Homepage/Home";
import Footer from './components/pages/Footer/Footer';
import {
  Switch,
  Route,
} from "react-router-dom";
import Services from './components/pages/Services/Services';
import Products from './components/pages/Products/Products';
import SignUp from './components/pages/SignUp/SignUp';


function App() {

  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/services" component={Services}/>
        <Route path="/products" component={Products}/>
        <Route path="/sign-up" component={SignUp}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
