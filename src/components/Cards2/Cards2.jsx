import React from "react";
import "./Cards2.css";

import Card from "react-bootstrap/Card";

import rec1 from "../../assets/rec1.png";
import rec2 from "../../assets/rec2.png";
import rec3 from "../../assets/rec3.png";


const Cards2 = () => {
  return (
    <section className="Cards2">
<div className="Cards2Container">
<div className="CardsHeading">
    <h5 className="CardsH">You Might Want To try...</h5>
</div>
<div className="wrapper">
 
<Card className="card border-0 sc">
<Card.Img variant="top" src={rec1} alt="rec" />
<h2 className="plus">+</h2>
<Card.Title>
                <h2 className="CardsTitle">
                  Blank
                </h2>
              </Card.Title>
</Card>


<Card className="card border-0 sc">
<Card.Img variant="top" src={rec2} alt="rec" />
<Card.Title>
                <h2 className="CardsTitle">
                logos
                </h2>
              </Card.Title>
</Card>

<Card className="card border-0 sc">
<Card.Img variant="top" src={rec3} alt="rec" />
<Card.Title>
                <h2 className="CardsTitle">
                Business card
                </h2>
              </Card.Title>
</Card>
</div>






</div>
</section>



  );
};
export default Cards2
