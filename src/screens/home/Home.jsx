import React from "react";
import "../home/Home.scss";
import { Typewriter } from "react-simple-typewriter";
import TopItems from "../topItems/TopItems";
import Heading from "../../reusable/heading/Heading";
import About from "../about/About";
import Counter from "../counter/Counter";
import Navbar from "../navbar/Navbar";

const Home = () => {
  return (
    <>
      <div>
        <div className="backgroundContainer">
          <div className="backgroundImage">
        <Navbar/> 
            <div className="typeWriter">
              <h1 className="textC">
                We Are Providing <br />
                <span className="changedText">
                  <Typewriter
                    words={["100 + Dishes", "Russian Silets", "Tasty Food"]}
                    loop={5}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutCont">
        <About/>
      </div>
    <div className="mainCover">
    <div className="headingComp">
        <Heading heading="Our Popular Dishes" />
      </div>
      <div className="cardItems">
        <TopItems />
        <TopItems />
        <TopItems />
      </div>
    </div>
    <div className="countings">
      <Counter/>
    </div>
    </>
  );
};

export default Home;
