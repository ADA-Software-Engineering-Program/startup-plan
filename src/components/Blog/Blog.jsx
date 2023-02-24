import React from "react";
import "./Blog.css";
import people from "../../assets/people.png";
import suit from "../../assets/suit.png";


const Blog = () => {
  return (
    <div className="blogContainer">
        <div className="blogHead">Blogs and News</div>
        <div className="peoplePic">
            <img src={people} />
        </div>
        <div className="container">
        <div className="contentHead">Fulfil your dreams of becoming a business owner</div>
        <div className="blogcontent1">
        The benefits of working at a startup include 
greater  opportunities to learn,
 increased responsibility, flexible work hours, relaxed work environment,
 increased employee interaction, 
good workplace benefits, and innovation
        </div>
</div>
<div className="container2">
<div className="yet">
Yet to Register your Business?
</div>
<div className="blogcontent1">
You can open a corporate account with your registered business certificate. When you register through us, you get a Zenith Bank account.
Potential customers feel more comfortable paying into a corporate account because they know their money can be traced. And you can open a corporate account with any bank of your choice with a registered business.
You can apply for loans and grants when your business is registered.
When you register your business, customers trust you because they see you as legit and reliable.
</div>

</div>
<div className="suitPic">
    <img src={suit} />
</div>




    </div>
  );
};

export default Blog;