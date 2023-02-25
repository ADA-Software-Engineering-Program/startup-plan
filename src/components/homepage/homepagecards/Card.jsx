import React from "react";
import Cardcontent from "./Cardcontent";
import vector2 from "../../../assets/Vector2.svg";
import vector3 from "../../../assets/Vector3.svg";
import star from "../../../assets/Star1.svg";

const Card = () => {
  return (
    <section className="w-90 mx-auto mt-7 card-wrapper">
      <Cardcontent figure={star} text="years of experience" numbers={27} />
      <Cardcontent figure={vector2} text="team" numbers={1245} />
      <Cardcontent figure={vector3} text="satisfied clients" numbers={1245} />
    </section>
  );
};

export default Card;
