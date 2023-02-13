import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Section = styled.section`
    height: 10vh;
    width: 90vw;
    position: fixed;
    width: 90vw;
    padding-bottom: 5vh;
    background: linear-gradient(180deg, #000, rgb(2, 0, 30), rgb(2, 0, 20), rgb(1, 0, 20), transparent);
    padding-top: 1.5vh;
    margin-top: -1vh;
    margin-left: calc(5vw - 10px);
    text-align: center;
`;

const TitleContainer = styled.div`
    width: 90vw;
`;

const Title = styled.h1`
    width: 90vw;
    font-size: calc(8vmin + 10px);
    font-family: cursive;
    text-decoration: underline;
    text-shadow: 0.5vmin 0.5vmin rgba(0, 17, 91);
    color: rgb(255, 231, 156);
    margin-top: -0.3vh;
`;



function Navbar() {
    return (
      <div >
        <Section>
            <TitleContainer>
                <Link to="/" style={{ textDecoration: 'none', color: "rgb(255, 230, 150)" }}>
                <Title>
                    Panicky Panda
                </Title>
                </Link> 
            </TitleContainer>
        </Section>
      </div>
    );
  }
  
  export default Navbar;
  