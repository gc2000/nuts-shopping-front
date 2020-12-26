import React from "react";
import Products from "./components/Products";
import data from "./data.json";
import { Link } from "react-router-dom";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
    };
  }
  render() {
    return (
      <>
        <div className="hero-container">
          <video src="/videos/christmas.mp4" autoPlay loop muted />
          <h1> The Best Nuts In The World! </h1>
          <p>What are you waiting for?</p>
        </div>
        <div className="grid-container">
          <main>
            <div className="container-fluid">
              <div>
                <ul className="products">
                  <li>
                    <div className="product">
                      <Link to="/products/xmas">
                        <img src="/images/1.jpg" alt="Merry Christmas" />
                        <p className="product-title"> Merry Christmas</p>
                      </Link>
                    </div>
                  </li>

                  <li>
                    <div className="product">
                      <Link to="/products/mom">
                        <img src="/images/2.jpg" alt="Mama's favorite" />
                        <p className="product-title"> Mama's favorite</p>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </main>
        </div>
      </>
    );
  }
}

export default Home;
