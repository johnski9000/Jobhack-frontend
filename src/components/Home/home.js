import React from "react";
import styled from "styled-components";
import homeright from "./homeright.svg";
import { Link } from "react-router-dom";
import "./home.css";
import { Navbar } from "../Navbar/Navbar";

const Home = ({ user, logOutHandler }) => {
  return (
    <HomePage>
      <Navbar user={user} logOutHandler={logOutHandler} />
      <div className="hero">
        <LeftSide>
          <LeftSideTop>
            <h1>Get Hired.</h1>
            <p>Hack into your first Junior Developer Job.</p>
          </LeftSideTop>
          <LeftSideButtons>
            <Link to="/signup">
              <button className="btn1">Sign Up</button>
            </Link>
            <Link to="/login">
              <button className="btn2">Log In</button>
            </Link>
          </LeftSideButtons>
          <LeftSideBottom>
            {/* <ol>
            <li>
              <span className="listnum1">1</span>Sign Up or log in
            </li>
            <li>
              <span className="listnum">2</span>Find Junior Developer jobs all
              in one place
            </li>
            <li>
              <span className="listnum">3</span>Keep track & manage your
              applications
            </li>
          </ol> */}

            <div className="bullet-point">
              <div className="listnum">1</div>
              <h4 className="bullet-text">Sign Up Or Log In</h4>
            </div>
            <div className="bullet-point">
              <div className="listnum">2</div>
              <h4 className="bullet-text">
                Find Junior Developer jobs all in one place
              </h4>
            </div>
            <div className="bullet-point">
              <div className="listnum">
                <p style={{ textAlign: "center" }}>3</p>
              </div>
              <h4 className="bullet-text">
                Keep track & manage your applications
              </h4>
            </div>
          </LeftSideBottom>
        </LeftSide>
        <RightSide>
          <img src={homeright} alt=""></img>
        </RightSide>
      </div>
    </HomePage>
  );
};

const HomePage = styled.div`
  /* background: grey; */
  height: 100%;
  margin: 0 auto;
  max-width: 1500px;
  padding: 0;

  .hero {
    display: flex;
  }
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 50vw;
  height: 50vh;
  margin-top: 20vh;
  margin-left: 100px;
  @media only screen and (max-width: 1000px) {
    margin: 20vh 0;
    margin-left: 30px;

    h1 {
      font-size: 6rem;
    }
  }
`;

const LeftSideTop = styled.div`
  width: 100%;
  h1 {
    font-family: Roboto, sans-serif;
    color: #ff914d;
    font-size: 9em;
    text-align: left;
    margin: 0;
    padding: 0;
    font-weight: bold;
  }
  p {
    font-family: Roboto, sans-serif;
    text-align: left;
    font-size: 1.6rem;
    margin: 0 0 50px 0;
    padding: 0;
    font-weight: bold;
  }
  @media only screen and (max-width: 1000px) {
    width: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
  }
`;

const LeftSideButtons = styled.div`
  display: flex;
  width: 100%;
  margin: 0 0 50px 0;

  .btn1 {
    background: #ff914d;
    color: white;
    cursor: pointer;
    padding: 1em 2.5em;
    font-size: 1.4rem;
    margin: 0;
    border: 1px solid #ff914d;
    border-radius: 10px;
    font-weight: bold;
    &:hover {
      background-color: white;
      color: #ff914d;
      border: 1px solid #ff914d;
    }
  }
  .btn2 {
    background: white;
    color: #ff914d;
    cursor: pointer;
    border: 1px solid orange;
    padding: 1em 2.5em;
    font-size: 1.4rem;
    margin: 0 0 0 1em;
    border-radius: 10px;
    font-weight: bold;
    &:hover {
      background-color: #ff914d;
      color: white;
      border: 1px solid white;
    }
  }
  @media only screen and (max-width: 1000px) {
    width: 100vw;
    height: auto;
    margin-left: 250px;
  }
`;

const LeftSideBottom = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ol {
    list-style-type: none;
  }
  .bullet-point {
    display: flex;
    align-items: center;
  }
  .bullet-text {
    align-items: center;
    font-size: 1.5em;
    font-weight: lighter;
  }

  .listnum {
    display: flex;
    justify-content: center;
    background: #ff914d;
    color: white;
    width: 50px;
    height: 50px;
    align-items: center;
    text-align: center;
    font-size: 3em;
    margin-right: 20px;
    font-weight: bold;
    border-radius: 5px;
  }
  @media only screen and (max-width: 1000px) {
    height: auto;
    width: 100%;
    margin-top: 50px;
  }

  @media only screen and (max-width: 600px) {
    .bullet-text {
      width: 100%;
      margin: 10px 0;
    }
  }
`;

const RightSide = styled.div`
  width: 55vw;
  height: 92.5vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  img {
    max-width: 90%;
    height: auto;
    object-fit: contain;
  }
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

export default Home;
