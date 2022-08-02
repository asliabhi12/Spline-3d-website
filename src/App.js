import Spline from "@splinetool/react-spline";
import styled from "styled-components";

import Logo from "./images/logo.svg";
import IconTwitter from "./images/icon-twitter.svg";
import IconYoutube from "./images/icon-youtube.svg";
import IconLaptop from "./images/icon-laptop.svg";

export default function App() {
  return (
    <Wrapper>
      <Spline
        className="spline"
        scene="https://prod.spline.design/YKxOY1KB6Q4regge/scene.splinecode"
      />
      <Content>
        <Menu>
          <li>
            <img src={Logo} alt="Logo" />
          </li>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Download</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
          <li>
            <a href="/">App</a>
          </li>
          <li>
            <button>Get Started</button>
          </li>
        </Menu>
        <h1>Collaborate With People</h1>
        <p>
          Bring your Team Together and build your community "Hello" is a song
          recorded by English singer-songwriter Adele, released on 23 October
          2015 by XL Recordings as the lead single from her third studio album
        </p>
        <button>
          <img src={IconLaptop} alt="Download for Mac" />
          Download for Mac
        </button>
      </Content>
      <Social>
        <div />
        <img src={IconTwitter} alt="twitter" />
        <img src={IconYoutube} alt="youtube" />
      </Social>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  font-family: "Spline Sans", sans-serif;
  font-size: 16px;
  color: white;
  position: relative;

  .spline {
    position: absolute;
    margin: 0 auto;
    top: 0;
    right: 0;

    @media (max-width: 1024px) {
      transform: scale(0.8) translateX(200px);
    }
    @media (max-width: 800px) {
      transform: scale(0.8) translateX(600px);
    }
    @media (max-width: 600px) {
      transform: scale(0.5) translateX(-100px);
      right: auto;
      left: 50%;
      margin-left: -600px;
    }
    @media (max-width: 375pxpx) {
      transform: scale(0.45) translateX(-50px);
    }
  }
`;
const Content = styled.div`
  position: absolute;
  top: 30px;

  display: flex;
  flex-direction: column;
  gap: 80px;

  @media (max-width: 1024px) {
    gap: 40px;
  }

  h1 {
    font-family: "Spline Sans Mono", monospace;
    font-weight: bold;
    font-size: 70px;
    margin: 0;
    max-width: 500px;

    @media (max-width: 1024px) {
      font-size: 60px;
      max-width: 400px;
    }
    @media (max-width: 800px) {
      font-size: 40px;
      max-width: 300px;
    }
    @media (max-width: 600px) {
      padding-top: 250px;
    }
  }

  p {
    font-weight: normal;
    line-height: 150%;
    max-width: 380px;
  }

  button {
    background: rgba(0, 0, 0, 0.2);
    border: 0px;
    font-size: 16px;
    padding: 12px;
    border-radius: 16px;
    border: solid 1px rgba(255, 255, 255, 0.1);
    color: white;
    max-width: 280px;
    backdrop-filter: blur(20px);

    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;

    transition: 1s;

    :hover {
      border: 1px solid rgba((255, 255, 255, 0.8));
      transform: translateY(-3px);
    }
  }

  h1,
  p,
  button {
    margin: 0 30px 0 100px;
  }
`;

const Menu = styled.ul`
  display: flex;
  gap: 30px;
  align-items: center;
  margin: 0 30px 0 100px;
  padding: 0;

  li {
    list-style: none;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: white;
    padding: 8px 20px;
    border: rgba(255, 255, 255, 0);
    transition: 1s;
    border-radius: 14px;

    :hover {
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
  }
`;

const Social = styled.div`
  position: absolute;
  top: 150px;
  left: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  div {
    width: 1px;
    height: 500px;
    background: white;
  }
`;
