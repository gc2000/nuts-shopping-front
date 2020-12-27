import React from "react";
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
          <div className="grid-container">
            <main>
              <div className="container-fluid">
                <div>
                  <ul className="promos">
                    <li>
                      <div className="promo">
                        <Link to="/products/xmas">
                          <img
                            src="/images/xmas-promo.jpg"
                            alt="Merry Christmas"
                          />
                          <p className="promo-title"> Holiday Top Picks </p>
                          <p className="promo-text">
                            It's the most wonderful time of the year... What's
                            on your Christmas wishlist?
                          </p>
                        </Link>
                      </div>
                    </li>

                    <li>
                      <div className="promo">
                        <Link to="/products/mom">
                          <img
                            src="/images/mom-promo.jpg"
                            alt="Mama's favorite"
                          />
                          <p className="promo-title"> For Mothers </p>
                          <p className="promo-text">
                            The Mothers Day Gift Basket for Mom
                          </p>
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </main>
          </div>
        </div>
        <footer>All right is reserved.</footer>
      </>
    );
  }
}

export default Home;
