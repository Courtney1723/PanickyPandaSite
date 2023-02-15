import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const scrollToTop = () => {
    window.scrollTo(0, 0)
}

const Section = styled.section`
    height: 100%;
    width: 100%;
    margin-left: -10px;
    margin-top: -10vh;
    padding-right: 20px;
    padding-bottom: 10vh;
    margin-bottom: -10px;
`;

const Content = styled.div`
    background: linear-gradient(rgb(41, 39, 74), rgb(41, 39, 74), rgb(0, 1, 21), rgb(0, 1, 21), rgb(41, 39, 74), rgb(41, 39, 74), transparent);
    height: fit-content;
    width: 90vw;
    margin-left: 5vw;
    padding-bottom: 2vh; 
    z-index: -10;
`;

const Links = styled.div`
    margin-left: 1vw;
    margin-right: 1vw;
    height: fit-content;
    padding-top: 2vh;
    padding-bottom: 2vh;
`;
const LinksContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Button = styled.a`
    display: inline;
    justify-content: center;
    align-items: center;
    border-radius: 18px;
    width: 30vw;
    height: 6vh;
    line-height: 6vh;
    font-size: 3vmin;
    text-align: center;
    color: rgb(255, 230, 150);
    background: linear-gradient(15deg, #000, rgb(2, 0, 39), rgb(41, 39, 74), rgb(2, 0, 39), #000);
    text-decoration: none;
    text-shadow: 0.1vmin 0.1vmin 0.1vmin rgb(255, 230, 150);
    box-shadow: 2vmin 2vmin 2vmin rgb(2, 0, 39);
    margin: 1vmin;
    border-style: groove;
    border-color: rgb(255, 230, 150);
    border-width: 0.1vmax;
    word-break: keep-all;

    &:hover {
        background: linear-gradient(15deg, #000, rgb(2, 0, 39), rgba(255, 230, 150, 0.5), rgb(2, 0, 39), #000);
        text-shadow: 0.3vmin 0.3vmin rgb(2, 0, 39);
        font-size: 4.5vmin;
    }

`;

const ButtonContainer = styled.div`
    display: inline;
    justify-content: center;
    align-items: center;
    border-radius: 18px;
    width: 20vw;
    height: 6vh;
    line-height: 6vh;
    font-size: 3vmin;
    text-align: center;
    color: rgb(255, 230, 150);
    background: linear-gradient(15deg, #000, rgb(2, 0, 39), rgb(41, 39, 74), rgb(2, 0, 39), #000);
    text-shadow: 0.1vmin 0.1vmin 0.1vmin rgb(255, 230, 150);
    box-shadow: 2vmin 2vmin 2vmin rgb(2, 0, 39);
    margin: 1vmin;
    border-style: groove;
    border-color: rgb(255, 230, 150);
    border-width: 0.1vmax;

    &:hover {
        background: linear-gradient(15deg, #000, rgb(2, 0, 39), rgba(255, 230, 150, 0.5), rgb(2, 0, 39), #000);
        text-shadow: 0.3vmin 0.3vmin rgb(2, 0, 39);
        font-size: 4vmin;
        color: rgb(255, 230, 150);
    }
`;


function Home() {
    return (
      <div >      
        <Section>                              
            <Content>                                                   
                <Links>
                    <LinksContainer>
                        <ButtonContainer>
                            <Link onClick={scrollToTop} to="/" style={{ textDecoration: 'none', color: "rgb(255, 230, 150)" }}>Home</Link> 
                        </ButtonContainer>                   
                        <Button href="https://discord.gg/UDGWDxPxfB" target="_blank">
                            Discord
                        </Button>
                        <br />
                        <Button href="https://www.youtube.com/channel/UCcF2Jl3jGRZmGVThrowbq0A" target="_blank">
                            YouTube
                        </Button>  
                        <br />
                        <Button href="https://twitter.com/PanickyPanda197" target="_blank">
                            Twitter
                        </Button> 
                        <br />   
                        <Button href="https://www.tiktok.com/@panickypanda_197" target="_blank">
                            Tik-Tok
                        </Button>   
                        <br />                        
                        <Button href="https://streamlabs.com/panickypanda_197/tip" target="_blank">
                            Tip
                        </Button> 
                        <ButtonContainer>
                            <Link onClick={scrollToTop} to="/Emojis" style={{ textDecoration: 'none', color: "rgb(255, 230, 150)" }}>Emojis</Link> 
                        </ButtonContainer>                                                                 
                    </LinksContainer>
                </Links>                
            </Content>
        </Section>
      </div>
    );
  }
  
  export default Home;
  