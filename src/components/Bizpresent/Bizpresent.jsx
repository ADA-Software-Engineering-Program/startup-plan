import React from "react";
import "./Bizpresent.css";

import Card from "react-bootstrap/Card";

import rec7 from "../../assets/rec7.png";
import rec8 from "../../assets/rec8.png";
import rec9 from "../../assets/rec9.png";

const Bizpresent = () => {
    return (
        <section>
            <div>



<div className="Bizheading">Business Presentation</div>
<div className="bizwrap">


<Card className="card border-0 bc">
<Card.Img variant="top" src={rec7} alt="rec" />
<div class="card-body">
    <a href="/#" class="btnn">pro</a>
  </div>
<Card.Title>
<h3 className="under">Boost Brown Mini...<br/>
Presentation by designe...</h3>
              </Card.Title>
</Card>




<Card className="card border-0 bc">
<Card.Img variant="top" src={rec8} alt="rec" />
<div class="card-body">
    <a href="/#" class="btnn">free</a>
  </div>
<Card.Title>
<h3 className="under">Research Proposal B...
<br/>Presentation by...
</h3>
              </Card.Title>
</Card>

<Card className="card border-0 bc">
<Card.Img variant="top" src={rec9} alt="rec" />
<div class="card-body">
    <a href="/#" class="btnn">pro</a>
  </div>
<Card.Title>
<h3 className="under">Marketing Proposal B...
<br/>
Presentation by Susa...</h3>      
              </Card.Title>
</Card>


</div>

</div>
</section>


);
};
export default Bizpresent;