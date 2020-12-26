import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Route, Switch } from "react-router";
import Navbar from "./Navbar";
import Home from "./Home";
import ProductList from "./ProductList";
import Contact from "./Contact";
import Error from "./Error";
import Products from "./components/Products";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={ProductList} />
          <Route path="/contact" component={Contact} />
          <Route path="*" component={Error} />
          {/* <Route path="/products/:promotion" component={ProductList} /> */}
          {/* <Route path="/products">
            <ProductList promotion="Xmas1" />
          </Route> */}
        </Switch>
      </Router>
    </>
  );
}
