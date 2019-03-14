import React, { Component } from "react";
import { Parallax, Slider, Slide } from "react-materialize";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1 className="header center">Learn. Earn. Save.</h1>
          <Slider>
            <Slide
              src={require("../img/img_slide1.jpg")}
              title="Teaching values"
            >
              Start them early!
            </Slide>
            <Slide
              src={require("../img/img_slide2.jpg")}
              title="Saving for the future"
              placement="left"
            >
              Create savings and set goals!
            </Slide>
            <Slide
              src={require("../img/img_slide3.jpg")}
              title="Creating fun"
              placement="right"
            >
              Give them the power of choice.
            </Slide>
          </Slider>
        </div>        
        <div className="section transparent z-depth-0">
          <div className="row container">
            <h2 className="header center">Children today are more connected than ever.</h2>
            <h4 className="grey-text text-darken-3 lighten-3">
              They have been born in a fast-paced, ever-changing world full of technological advances. Today is a world where technology is the norm.</h4>
          </div>
        </div>
        <Parallax imageSrc="http://materializecss.com/images/parallax1.jpg" />
        <div className="section transparent z-depth-0">
          <div className="row container center">
            <h4 className="grey-text text-darken-3 lighten-3">
              It is a medium in which some choose to teach their children. This
              app was created as a learning tool in the hopes that children
              would learn the value of a dollar. Many children today don’t
              really see the challenges of having to earn money. They see their
              parents make online payments, swipe their credit cards, or create
              wireless payments.
            </h4>
          </div>
        </div>
        <Parallax imageSrc="http://materializecss.com/images/parallax2.jpg" />
        <div className="section transparent z-depth-0">
          <div className="row container center">
            <h4 className="grey-text text-darken-3 lighten-3">
              We wanted to give parents the power to show a child a fun and
              engaging way to earn money with tasks at home. Some call it
              chores, some call it jobs. With the money earned, the parents can
              provide acceptable prizes in an online shop and provide a view of
              the child’s piggy bank.{" "}</h4>
          </div>
        </div>
        <Parallax imageSrc="http://materializecss.com/images/parallax1.jpg" />
        <div className="section transparent z-depth-0">
          <div className="row container center">
            <h4 className="grey-text text-darken-3 lighten-3">
              The goal is so that one day, the virtual entrepreneurs can take
              the knowledge gained from their virtual enterprise into the real
              world.</h4>
          </div>
        </div>
        <Parallax imageSrc="http://materializecss.com/images/parallax2.jpg" />
        <div className="section transparent z-depth-0">
          <div className="row container center">
            <h4 className="grey-text text-darken-3 lighten-3">
              Enjoy your visit, and hope you sign-up!</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
