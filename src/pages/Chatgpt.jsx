import React from "react";
import styled from "styled-components";
import ChatBot from "../components/ChatBot";
import ChatGpt from "../assets/chatgpt.png";

const Chatgpt = () => {
  return (
    <>
      <ChatgptWrapper>
        <div className="main-div">
          <div className="left-side">
            <img src={ChatGpt} alt="" />
          </div>
          <div className="right-side">
            <ChatBot />
          </div>
        </div>
      </ChatgptWrapper>
    </>
  );
};

// const ChatgptWrapper = styled.div`
//   height: 60vh;
//   max-height: fit-content;
//   min-height: 90vh;
//   width: 100vw;
//   background: linear-gradient(90deg, black, blue);
    
//   @media screen and (max-width: 700px) {
//     background-color: orange;
//     width: 90vw;
//   }
//   .main-div {
//     width: 100%;
//     height: fit-content;
//     display: flex;
//     align-items: center;
//     /* background: linear-gradient(90deg, black, blue);
//     background-color: black; */
//     @media screen and (max-width: 700px) {
//     background-color: red;
//     width: 100%;
//     flex-direction: column;
//   }
//   }
//     .left-side {
//       width: 40%;
//     }
//     .right-side {
//     }
//   }
// `;
const ChatgptWrapper = styled.div`
  height: 60vh;
  max-height: fit-content;
  min-height: 90vh;
  width: 100vw;
  background: linear-gradient(90deg, black, blue);
    
  @media screen and (max-width: 700px) {
    background-color: orange;
    width: 100vw;
    height: fit-content;
  }

  .main-div {
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: center;

    @media screen and (max-width: 700px) {
      flex-direction: column;
    }
  }

  .left-side {
    width: 40%;
    perspective: 200px;
    overflow: hidden;

    @media screen and (max-width: 700px) {
      display: flex;
      width: 90%;
      align-items: center;
    }

    img{
        width: 100%;
      height: auto;
        /* transform-origin: center left; */
      transform: rotateX(-10deg); 
        @media screen and (max-width: 700px) {
      width: 50%;
      margin: auto;
    } 
    }
  }

  .right-side {
    width: 60%;

    @media screen and (max-width: 700px) {
      width: 100%;
    }
  }
`;

export default Chatgpt;
