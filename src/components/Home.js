import React from "react";
import styled from "styled-components";
import PandaBg from '../images/PandaBackgroundVid.mp4';
import { Link } from "react-router-dom";

const scrollToTop = () => {
    window.scrollTo(0, 0)
}

const Section = styled.section`
    background-clip: url(${PandaBg});
    background-repeat: repeat;
    height: 100%;
    width: 100%;
    margin-left: -10px;
    margin-top: -10px;
    padding-right: 20px;
    padding-bottom: 10vh;
    margin-bottom: -10px;
`;

const Content = styled.div`
    background: linear-gradient(rgb(0, 1, 21), rgb(0, 1, 21), rgb(41, 39, 74), rgb(41, 39, 74), rgb(0, 1, 21), rgb(0, 1, 21), rgb(41, 39, 74));
    height: fit-content;
    width: 90vw;
    margin-left: 5vw;
    padding-bottom: 2vh;
    padding-top: 12vh;    
`;

const Header = styled.div`
    text-align: center;
    align-items: center;
    justify-content: center;
    padding-bottom: 6vh;
`;

const Desc = styled.p`
    align-items: center;
    justify-content: center;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    line-height: 6vmin;
    font-size: 4vmin;
    color: rgb(225, 193, 125);
    padding-bottom: 2vh;
    text-shadow: 0.4vmin 0.4vmin 0.4vmin rgba(0, 8, 150, 0.8);
    margin-left: 1vmin;
    margin-right: 1vmin;
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

// const StreamContainer = styled.div`
//     display: block;
//     height: 40vh;
//     width: 90vw;
//     margin-top: 8vh;
//     align-items: center;
//     justify-content: center;
// `;

// const StreamVideo = styled.video`
//     height: 40vh;
//     width: 80vw;
//     position: inline;

// `;

const About = styled.div`
    display: flex;
    justify-content: left;
    align-items: top;
    width: 88vw;
    margin-left: 1vw;
    margin-top: 2vh;
`;
const AboutContainer = styled.div`
    display: block;
    justify-content: center;
    width: 44vw;
    text-align: center;
    align-items: center;
    margin: 1vmin;    
`;
const AboutTitle = styled.h1`
    color: rgb(255, 230, 150);
    font-size: 5vmin;
    text-shadow: 0.4vmin 0.4vmin rgb(0, 17, 91);
    /* background: linear-gradient(45deg, #FF0000, #FF8F00, #FFFF00, #2EFF00, #00D4FF, #002BFF, #AA00FF, #FF00AA, #FF0000); */
    height: 10vh;
    line-height: 5vh;
    text-align: center;
    margin: 1vmin;
    border-style: outset;
    border-color: rgba(255, 230, 150, 0.6);
    background: linear-gradient(150deg, #000, rgb(2, 0, 39), rgb(41, 39, 74), rgb(2, 0, 39), #000);
`;
const AboutDesc = styled.p`
    color: rgb(225, 193, 125);
    text-align: left;
    font-size: 3vmin;
    text-shadow: 0.1vmin 0.1vmin rgb(0, 17, 91);
    margin: 1vmin; 
`;

const ChatContainer = styled.div`
    display: block;
    justify-content: center;
    width: 22vw;
    margin: 1vmin; 
`;


const ChatTitle = styled.h1`
    color: rgb(255, 230, 150);
    font-size: 5vmin;
    text-shadow: 0.4vmin 0.4vmin rgb(0, 17, 91);
    /* background: linear-gradient(45deg, #FF0000, #FF8F00, #FFFF00, #2EFF00, #00D4FF, #002BFF, #AA00FF, #FF00AA, #FF0000); */
    height: 10vh;
    line-height: 5vh;
    text-align: center;
    margin: 1vmin;
    border-style: outset;
    border-color: rgba(255, 230, 150, 0.6);
    background: linear-gradient(150deg, #000, rgb(2, 0, 39), rgb(41, 39, 74), rgb(2, 0, 39), #000);
`;
const ChatDesc = styled.p`
    color: rgb(225, 193, 125);
    text-align: left;
    font-size: 3vmin;
    text-shadow: 0.1vmin 0.1vmin rgb(0, 17, 91);
    margin: 1vmin;   
`;


const PCContainer = styled.div`
    display: block;
    justify-content: center;
    width: 22vw;
    padding-right: 2vmin;
    margin: 1vmin; 
`;
const PCTitle = styled.h1`
    color: rgb(255, 230, 150);
    font-size: 5vmin;
    text-shadow: 0.4vmin 0.4vmin rgb(0, 17, 91);
    /* background: linear-gradient(45deg, #FF0000, #FF8F00, #FFFF00, #2EFF00, #00D4FF, #002BFF, #AA00FF, #FF00AA, #FF0000); */
    height: 10vh;
    line-height: 5vh;
    text-align: center;   
    margin: 1vmin; 
    border-style: outset;
    border-color: rgba(255, 230, 150, 0.6);
    background: linear-gradient(150deg, #000, rgb(2, 0, 39), rgb(41, 39, 74), rgb(2, 0, 39), #000);
`;
const PCDesc = styled.p`
    color: rgb(225, 193, 125);
    text-align: left;
    font-size: 3vmin;
    text-shadow: 0.1vmin 0.1vmin rgb(0, 17, 91);
    margin: 1vmin; 
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

const VideoContainer = styled.div`
  bottom: -10px;
  left: -10px;
  min-height: 100%;
  min-width: 100%;
  position: fixed;
  right: -10px;
  top: -10px;
  z-index: -100;
  background-color: rgb(0, 1, 21);
  overflow: hidden;
  margin-left: -4vw;
  transform: scaleX(1.28);

`;


function Home() {
    return (
      <div >      
        <Section>                              
            <Content>  
                <Header>  
                <VideoContainer>
                    <video src={PandaBg} autoPlay={true} playsInline={true} loop={true} muted={true} type='video/mp4' height="100%" controls={false}/>
                </VideoContainer>                                      
                    <Desc>
                    Welcome to Panda's Gaming Channel! <br />My pronouns are she/her. <br/>Some of my favorite genres to play are horror, survival, and PvP/FPS. <br />Viewers can look forward to seeing a lot of survival failures and funny moments as I traverse through all types of new worlds. <br />I hope to see you on my next adventure!
                    </Desc>
                    <MainButton href="https://www.twitch.tv/panickypanda_197" target="_blank">
                        Follow me on Twitch
                    </MainButton>          
                    {/* <StreamContainer>
                        <StreamVideo autoPlay muted type='video/mp4' controls={true} title="Panda_Stream" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true} url="https://player.twitch.tv/?enableExtensions=false&muted=true&parent=twitch.tv&player=popout&quality=auto&t=0h3m57s&video=1719391606" target="_blank"/>
                    </StreamContainer> */}
                </Header>
                <About>
                    <AboutContainer>
                        <AboutTitle>
                            About <br />Me
                        </AboutTitle>
                        <AboutDesc>
                            I feel like the best place to start is why I wanted to start streaming. <br/><br/>Due to a massive list of circumstances I had trouble bonding with my mother throughout my childhood years. Flashing forward as an adult I began searching for something my mother and I have in common. I didn't want to continue drifting apart. We tried a few different activities and nothing stuck, so I eventually asked her if she would set down and watch me play a video game. She loved it! We have gone through all of The Walking Dead games, Red Dead Redemption 2, and all of the Life is Strange games as well. That's just naming a few...She now owns a console and plays her own games. <br/><br/>During that time, I found out that I love sharing games with people. Nothing feels better than goofing off with someone while wildly trying to dash out of harm's way. <br/><br />So that's why I'm here! We have an amazing little community already but we are always looking to welcome new people into the panic room. <br/><br />If you have any questions make sure to follow so you can see when I go live!
                        </AboutDesc>
                    </AboutContainer>
                    <ChatContainer>
                        <ChatTitle>
                            Chat <br />Rules
                        </ChatTitle>
                        <ChatDesc>
                        1. No Religion or Politics <br /><br />2. No bullying, sexism, racism, homophobia, or other hate-based chat will be tolerated. <br /><br />3. No backseat gaming, If I want to know I promise I will ask! <br /><br />4. No Spamming! I want to see what everyone has to say. :) <br /><br />5. Be kind to each other. I want good vibes only! <br /><br />6. No bad-mouthing or gossiping about other streamers/their communities! This will not be tolerated. <br /><br />7. Remember to enjoy yourself!
                        </ChatDesc>
                    </ChatContainer>
                    <PCContainer>
                        <PCTitle>
                            PC <br />Specs
                        </PCTitle>
                        <PCDesc>
                        Monitor • 27" Dell Curved 144hz S2721HGF <br /><br />Motherboard • MSI Z370-A PRO <br /><br />CPU • Intel I5 9600k @ 4.5GHz <br /><br />RAM • 2x8GB Corsair Vengeance Pro RGB @3200Mhz <br /><br />GPU • NVidia GTX 1070 <br /><br />Operating System • Windows 10 Pro 64Bit
                        </PCDesc>
                    </PCContainer>
                </About>               
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
                            <Link to="/Emojis" style={{ textDecoration: 'none', color: "rgb(255, 230, 150)" }}>Emojis</Link> 
                        </ButtonContainer>                                                                 
                    </LinksContainer>
                </Links>                
            </Content>
        </Section>
      </div>
    );
  }
  
  export default Home;
  