import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";
import Home from "./Home";
import ProductList from "./ProductList";
import Error from "./components/NotFound/Error";
import Form from "./components/Signup/Form";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={ProductList} />
          <Route path="/signup" component={Form} />
          <Route path="*" component={Error} />
        </Switch>
      </Router>
    </>
  );
}
