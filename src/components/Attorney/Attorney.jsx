import React from "react";
import "./Attorney.css";

import Card from "react-bootstrap/Card";

import rec11 from "../../assets/rec11.png";
import rec12 from "../../assets/rec12.png";
import rec13 from "../../assets/rec13.png";


const Attorney = () => {
  return (
    <section className="Cards2">
<div className="Cards2Container">
<div className="CardsHeading">
    <h5 className="CardsH">Meet Our Attorneys</h5>
</div>
<div className="wrapper">
 
<Card className="card border-0 sc">
<Card.Img variant="top" src={rec11} alt="rec" />

<Card.Title>
                <h2 className="CardsTitle">
                Olivia Daniels
                </h2>
              </Card.Title>
</Card>


<Card className="card border-0 sc">
<Card.Img variant="top" src={rec12} alt="rec" />
<Card.Title>
                <h2 className="CardsTitle">
                Max Scott
                </h2>
              </Card.Title>
</Card>

<Card className="card border-0 sc">
<Card.Img variant="top" src={rec13} alt="rec" />
<Card.Title>
                <h2 className="CardsTitle">
                Rufus Sopuruchi
                </h2>
              </Card.Title>
</Card>
</div>
{/* <div>
<div className="eclip1">

</div>
<div className="eclip2">
    <div>
       <h2> 27 </h2><br/>
       <h3>Years Of Experience</h3>
    </div>
</div>
<div className="lastwrap">
<div >
    <h2>1245</h2><br/>
    <h2>Satisfied Clients</h2>
</div>
<div className="">
    <h2>50</h2><br/>
    <h2>Consultants</h2>
</div>
<h2>110</h2>
<h2>Employers</h2>
</div>





</div> */}
</div>
</section>



  );
};
export default Attorney;
