import React from "react";
import "./Bizplan.css";

import Card from "react-bootstrap/Card";

import rec4 from "../../assets/rec4.png";
import rec5 from "../../assets/rec5.png";
import rec6 from "../../assets/rec6.png";

const Bizplan = () => {
    return (
        <section>
            <div>



<div className="Bizheading">Small Business Plan</div>
<div className="bizwrap">


<Card className="card border-0 bc">
<Card.Img variant="top" src={rec4} alt="rec" />
<div class="card-body">
    <a href="/#" class="btnn">free</a>
  </div>
<Card.Title>
<h3 className="under">Boost Blue Illustra...<br/>
Presentation by designe...</h3>
              </Card.Title>
</Card>




<Card className="card border-0 bc">
<Card.Img variant="top" src={rec5} alt="rec" />
<div class="card-body">
    <a href="/#" class="btnn">pro</a>
  </div>
<Card.Title>
<h3 className="under">Bold Business...<br/>
Youtube Thumbnail by...</h3>
              </Card.Title>
</Card>

<Card className="card border-0 bc">
<Card.Img variant="top" src={rec6} alt="rec" />
<div class="card-body">
    <a href="/#" class="btnn">free</a>
  </div>
<Card.Title>
<h3 className="under">Blue White Minimali...<br/>
Presentation by Selectin...</h3>      
              </Card.Title>
</Card>


</div>

</div>
</section>


);
};
export default Bizplan;