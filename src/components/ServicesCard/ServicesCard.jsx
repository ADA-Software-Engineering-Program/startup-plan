import React from "react";
import "./ServicesCard.css";

import Card from "react-bootstrap/Card";

import first from "../../assets/first.png";
import second from "../../assets/second.png";
import third from "../../assets/third.png";

const ServicesCard = () => {
  return (
    <section className="servicecard">
      <div className="cardContainer">
        <div className="head">
          <h2 className="Cheading">Our Services</h2>
          <h5 className="Chead">Our Focus Is Our Clients Success</h5>
        </div>
        
        <div className="cardwrap">
          <div className="cardone">
            <Card className="card border-0">
              <Card.Title>
                <h5 className="topcard">
                  Inspirational Business
                  <br />
                  Templates
                </h5>
              </Card.Title>
              <Card.Img variant="top" src={first} alt="first" />
            </Card>
          </div>

          <div className="cardtwo">
            <Card className="card border-0">
              <Card.Title>
                <h5 className="topcard">
                  Business Registration
                  <br />
                  Templates
                </h5>
              </Card.Title>
              <Card.Img variant="top" src={second} alt="first" />
            </Card>
          </div>

          <div className="cardthree">
            <Card className="card border-0">
              <Card.Title>
                <h5 className="topcard">
                  Legal & Financial
                  <br />
                  Consultants Templates
                </h5>
              </Card.Title>
              <Card.Img variant="top" src={third} alt="first" />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServicesCard;
