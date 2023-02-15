import React from "react";
import styled from "styled-components";

const Section = styled.section`
    height: 100%;
    width: 100%;
    margin-left: -10px;
    padding-top: 6vh;
    padding-right: 20px;
    margin-bottom: -10px;
    align-items: center;
    justify-content: center;
    text-align: center;

    @media screen and (max-width: 767px) {
        padding-top: 2vh;
    }
`;

const Content = styled.div`
    background: linear-gradient(rgb(0, 1, 21), rgb(0, 1, 21), rgb(0, 1, 21), rgb(41, 39, 74), rgb(0, 1, 21), rgb(0, 1, 21));
    height: 6vh;
    width: 90vw;
    margin-left: 5vw;
    padding-bottom: 8vh;
    padding-top: 12vh;  
    
    @media screen and (max-width: 767px) {
        background: linear-gradient(rgb(0, 1, 21), rgb(0, 1, 21), rgb(41, 39, 74), rgb(0, 1, 21), rgb(0, 1, 21));
    }
`;

const MainButton = styled.a`
    display: inline;
    border-radius: 18px;
    width: 50vw;
    height: 10vh;
    line-height: 6vmin;
    font-size: 4vmin;
    text-align: center;
    color: rgb(255, 230, 150);
    text-shadow: 0.1vmin 0.1vmin rgba(255, 230, 150, 0.8);
    background: linear-gradient(15deg, #000, rgb(2, 0, 39), rgb(41, 39, 74), rgb(2, 0, 39), #000);
    text-decoration: none;
    box-shadow: 1vmin 1vmin 1vmin 1vmin rgb(2, 0, 39);
    padding: 4vmin;
    border-style: groove;
    border-width: 0.2vmax;
    border-color: rgb(41, 39, 74);

    &:hover {
        background: linear-gradient(15deg, #000, rgb(2, 0, 39), rgba(255, 230, 150, 0.5), rgb(2, 0, 39), #000);
        text-shadow: 0.3vmin 0.3vmin rgb(2, 0, 39);
        line-height: 8vmin;
        font-size: 4.5vmin;
    }
`;

function Home() {
    return (
      <div >      
        <Section>                              
            <Content>  
                <MainButton href="https://www.twitch.tv/panickypanda_197" target="_blank">
                    Follow me on Twitch
                </MainButton>                                      
            </Content>
        </Section>
      </div>
    );
  }
  
  export default Home;
  