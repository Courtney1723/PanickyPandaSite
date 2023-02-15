import React from "react";
import styled from "styled-components";
import PandaBg from '../images/PandaBackgroundVid.mp4';

const Section = styled.section`
    margin-left: -10px;
    margin-top: -20vh;
    padding-right: 20px;
    margin-bottom: 10vh;
    padding-top: 12vh;

    @media screen and (max-width: 767px) {
        margin-top: -24vh;
    }
`;

const Content = styled.div`
    background: linear-gradient(rgb(0, 1, 21), rgb(0, 1, 21), rgb(41, 39, 74), rgb(41, 39, 74), rgb(0, 1, 21), rgb(0, 1, 21), rgb(41, 39, 74));
    height: 80vh;
    width: 90vw;
    margin-left: 5vw;
`;

const Emojis = styled.div`
    margin-top: 8vh;
    padding-top: 2vh;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-left: 2vw;
    margin-right: 2vw;
    height: 80vh;
    border-style: groove;
    border-color: rgba(41, 39, 74, 0.6);
`;


const EmojiMainTitle = styled.h1`
    height: 5vh;
    width: 80vw;
    font-size: calc(8px + 2vmin);
    color: rgb(255, 230, 150);
    text-shadow: 0.2vmin 0.2vmin 0.2vmin rgba(255, 230, 150, 0.7);
    border-style: outset;
    border-color: rgba(255, 230, 150, 0.4);
    margin-left: 1.5vw;
    margin-right: 5vmin;
    padding-top: 2.5vmin;
    background: linear-gradient(15deg, #000, rgb(2, 0, 39), rgb(41, 39, 74), rgb(2, 0, 39), #000);
`;
const EmojiTitle = styled.h1`
    height: 5vh;
    width: 40vw;
    font-size: calc(8px + 2vmin);
    color: rgb(255, 230, 150);
    text-shadow: 0.2vmin 0.2vmin 0.2vmin rgba(255, 230, 150, 0.7);
    margin-left: 18vw;
    margin-right: 18vw;
    padding-top: 2.5vmin;
    border-style: outset;
    border-color: rgba(255, 230, 150, 0.7);
    background: linear-gradient(15deg, rgb(2, 0, 39), rgb(41, 39, 74), rgb(41, 39, 74), rgb(41, 39, 74), rgb(2, 0, 39));
    padding-left: 4vw;
    padding-right: 4vw;
`;
// const EmojiTopSubsTitle = styled.div`
//     height: 5vh;
//     width: 34vw;
//     font-size: calc(6px + 2vmin);
//     color: rgb(255, 230, 150);
//     text-shadow: 0.2vmin 0.2vmin 0.2vmin rgba(255, 230, 150, 0.7);
//     margin-left: 1vmin;
//     margin-right: 5vmin;
//     padding-top: 2.5vmin;
//     border-style: outset;
//     border-color: rgba(255, 230, 150, 0.7);    
//     background: linear-gradient(15deg, rgb(2, 0, 39), rgb(41, 39, 74), rgb(41, 39, 74), rgb(41, 39, 74), rgb(2, 0, 39));
// `;

const EmojiContainer = styled.div`
    height: 8vh;
    width: 80vw;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 4vh;
    margin-left: 2vw;
`;

// const EmojiTopSubsContainer = styled.div`
//     height: 12vh;
//     width: 38vw;
//     display: flex;
//     align-items: center;
//     justify-content: center;   
//     margin-top: 4vh;
//     margin-bottom: 4vh;
// `;

// const EmojiTopSubs = styled.div`
//     height: 16vh;
//     width: 90vw;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     margin-left: -2vw; /* why is this out of place?? */
//     margin-top: 2vh;
// `;

const Emoji = styled.img`
    display: block;
    height: calc(4vmin + 40px);
    width: calc(4vmin + 40px);
    margin: 2vmin;
    margin-top: 2vmin;
    overflow: hidden;
    border-style: groove;
    border-color: rgba(0, 0, 10, 0.8);
    margin-top: 2vh;

    &:hover {
        transform: scale(1.5);
        background-color: rgba(0, 0, 10, 0.8);
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
            <VideoContainer>
                <video src={PandaBg} autoplay="true" playsInline="true" loop="true" muted="true" type='video/mp4' height="100%" controls={false}/>
            </VideoContainer>                                                          
            <Content>                                        
                <Emojis>
                    <EmojiMainTitle>
                        Emojis
                    </EmojiMainTitle>  
                    <EmojiTitle>
                        Bit Tier Rewards
                    </EmojiTitle>                    
                    <EmojiContainer>
                        <Emoji src="https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_d7e1f83394124707b0a5b4e36a013ffe/static/dark/2.0" target="_blank" />
                        <Emoji src="https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_a07fde8bc0d444b59a5820a407c6ade6/static/dark/2.0" target="_blank" />
                        <Emoji src="https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_82565a1d0d2d46309ef1e1937c88b322/static/dark/2.0" target="_blank" />
                    </EmojiContainer>
                    <EmojiTitle>
                        Subscription (Tier 1)
                    </EmojiTitle> 
                    <EmojiContainer>
                        {/* <Emoji src="https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_a06f4dcd60af455c88e268d9ed99fd2b/default/dark/2.0" target="_blank" /> */}
                        {/* <Emoji src="https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_8aa4a6ae147744dcb4aaf2f6f1cc09ef/default/dark/2.0" target="_blank" /> */}
                        <Emoji src="https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_a4dbbf9b75c1455ea878a226f1e21ce9/default/dark/2.0" target="_blank" />
                        <Emoji src="https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_5e69805bdb084b20be180b831f3de608/default/dark/2.0" target="_blank" />
                        <Emoji src="https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_f4d5efcb8c4d4ce7a2f56ecfafa4ea4f/default/dark/2.0" target="_blank" />
                        <Emoji src="https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_7d6d4bef5f61450ea6539f58635f94ad/default/dark/2.0" target="_blank" />
                        {/* <Emoji src="https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_157111280ce7457894605a08462a647e/default/dark/2.0" target="_blank" /> */}
                    </EmojiContainer>                        
                    <EmojiContainer>

                        <Emoji src="https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_8f1e48115d00417e816a0a96a54eb05d/default/dark/2.0" target="_blank" />
                        <Emoji src="https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_2d9ae7af286048c1b64b540c5dd17c4b/default/dark/2.0" target="_blank" />
                        <Emoji src="https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_678ecc26138141bbb1b0a2e1b70fe991/default/dark/2.0" target="_blank" />

                        {/* <Emoji src="https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_922c58bf7564440c9c0e38b68b70c89b/default/dark/2.0" target="_blank" /> */}
                        {/* <Emoji src="https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_f97d6da7fd9c4df49b8bea5ec680ae82/default/dark/2.0" target="_blank" /> */}
                        {/* <Emoji src="https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_81faf17a9cfd4cc79e89376e7d49c3e0/default/dark/2.0" target="_blank" /> */}
                        {/* <Emoji src="https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_a832644272264492974b23e8b68b61a9/default/dark/2.0" target="_blank" /> */}
                    </EmojiContainer>
                    {/* <EmojiTopSubs>
                        <EmojiTopSubsTitle>
                            Subscription (Tier 2)  
                        <EmojiTopSubsContainer>
                            <Emoji src="https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_a27f98c1a586491e8a53bb9818438962/default/dark/2.0" target="_blank" />
                        </EmojiTopSubsContainer>
                        </EmojiTopSubsTitle>  
                        <EmojiTopSubsTitle>                                  
                            Subscription (Tier 3)
                        <EmojiTopSubsContainer>
                            <Emoji src="https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_1ee56a8d3e5b46f9980f60ab19888aec/default/dark/2.0" target="_blank" />
                        </EmojiTopSubsContainer>
                        </EmojiTopSubsTitle>   
                    </EmojiTopSubs> */}
                </Emojis>                             
            </Content>
        </Section>
      </div>
    );
  }
  
  export default Home;
  