import React from "react";
import "./Pricing.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Pricing = () => {
    return (
        <section>
            <div>


            <div className="Bizheading">Our Pricing</div>
<div className="Pwrap">


<Card className="card border-0 pc">

<div class="card-body2">
<h1 className="top"><b>Basic<br/>N900/weekly</b></h1>
<h5 className="body">Unlock All Features<br/>Cancel Anytime<br/>3-day free trial</h5>

    
    <div className="w-[100px] mx-auto h-[30px] bg-orange mt-[30px] rounded-md signUp">
    <Link
            to="/"
            className="w-full h-full flex justify-center items-center text-base text-white capitalize font-bold"
          >
            Subscribe
          </Link>
          </div>
  </div>
</Card>


<Card className="card border-0 pc">

<div class="card-body2">
<h1 className="top"><b>Basic<br/>N900/weekly</b></h1>
<h5 className="body">Unlock All Features<br/>Cancel Anytime<br/>3-day free trial</h5>

    
    <div className="w-[100px] mx-auto h-[30px] bg-orange mt-[30px] rounded-md signUp">
    <Link
            to="/"
            className="w-full h-full flex justify-center items-center text-base text-white capitalize font-bold"
          >
            Subscribe
          </Link>
          </div>
  </div>
</Card>


<Card className="card border-0 pc">

<div class="card-body2">
<h1 className="top"><b>Basic<br/>N900/weekly</b></h1>
<h5 className="body">Unlock All Features<br/>Cancel Anytime<br/>3-day free trial</h5>

    
    <div className="w-[100px] mx-auto h-[30px] bg-orange mt-[30px] rounded-md signUp">
    <Link
            to="/"
            className="w-full h-full flex justify-center items-center text-base text-white capitalize font-bold"
          >
            Subscribe
          </Link>
          </div>
  </div>
</Card>





</div>

            </div>


            </section>

    );
};
export default Pricing;         