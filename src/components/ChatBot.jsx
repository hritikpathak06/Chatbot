import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/server";
import styled from "styled-components";
import ChatGptLogo from "../assets/chatgptLogo.svg";
import UserLogo from "../assets/user-icon.png";
import Rocket from "../assets/rocket.svg"

const ChatBot = () => {
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleSendMessage = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/openai/chatbot`, {
        message: input,
      });
      const newAnswer = response.data.answer;

      // Update the current answer first
      setAnswer(newAnswer);

      // Update chat history with the new message and answer
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { message: input, answer: newAnswer },
      ]);

      // Check if the user's message contains a code block
      if (input.includes("```")) {
        // Change background and styles here based on your requirements
        document.body.style.backgroundColor = "#f0f0f0"; // Example: Light Gray Background
      }

      // Clear the input field
      setInput("");
    } catch (error) {
      console.error("Error in API request:", error);
    }
  };

  return (
    <ChatBotWrapper>
      <div>
        {chatHistory.map((chat, index) => (
          <div key={index}>
            <br />
            <div className="question-div">
              <img src={UserLogo} alt="" />
              {chat.message}
            </div>
            <div className="ans-div">
              <div className="img-div">
                <img src={ChatGptLogo} alt="" />
              </div>
              <pre className="ans-pre">{chat.answer}</pre>
            </div>
            <br />
          </div>
        ))}
      </div>
      <div>
      <div className="input-div">

        <input
          type="text"
          value={input}
          placeholder="Enter Your Prompt Here"
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSendMessage}>
            <img src={Rocket} alt="" />
        </button>
      </div>
      </div>
    </ChatBotWrapper>
  );
};

const ChatBotWrapper = styled.div`
  color: white;
  height: 90vh;
  overflow: scroll;
  width: 100%;

  .question-div {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
    font-size: 1rem;
    color: blue;
    font-weight: bold;

    > img {
      width: 30px;
      border-radius: 100%;
    }
  }
  .ans-div {
    display: flex;
    width: 100%;
    gap: 1rem;
    .img-div {
      > img {
        width: 30px;
        border-radius: 100%;
      }
    }
  }
  .ans-pre {
    width: 800px;
    max-width: 100%; /* Ensure it doesn't exceed the container's width */
    height: 200px;
    height: fit-content;
    padding: 10px;
    overflow-y: scroll;
    overflow-x: hidden; /* Hide horizontal scrollbar */
    font-size: 1.3rem;
    color: white;
    font-weight: bolder;
    white-space: pre-wrap; /* Allow text to wrap */
  }
  .input-div{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    margin-top: 3rem;

    @media screen and (max-width: 700px) {
        width: 80%;
        margin: auto;
        margin-bottom: 2rem;
    }
    /* gap: 1rem; */
    input{
        width: 80%;
        padding: 1rem 5rem;
        border: none;
        outline: none;
        font-weight: bolder;
        
    }
    button{
        padding: 0.9rem 2rem;
        border: none;
        cursor: pointer;
        font-weight: bolder;
    }
  }
  /* .ans-pre {
    width: 800px;
    height: 200px;
    height: fit-content;
    padding: 10px;
    overflow-y: scroll;
    font-size: 1.3rem;
    color: white;
    font-weight: bolder;
  } */
`;

export default ChatBot;
