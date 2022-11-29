import data from "./data.json";
import React, { useState } from "react";
import styled from "styled-components";

function SendComment({ Object, setObject }) {
  const filteredImages = data.currentUser;

  const [inputComment, setInputComment] = useState("");

  function changeHandler(event) {
    setInputComment(event.target.value);
  }

  function handleclick() {
    if (inputComment === "" || inputComment === " ") return;

    const copiedObject = [...Object];

    const newComment = {
      id: Math.floor(Math.random() * 100) + 5,
      content: inputComment,
      createdAt: "1 second ago",
      score: 0,
      currentUser: true,
      user: {
        image: {
          png: "./images/avatars/image-juliusomo.png",
          webp: "./images/avatars/image-juliusomo.webp",
        },
        username: "juliusomo",
      },
      replies: [],
    };
    copiedObject.push(newComment);
    setObject(copiedObject);
    setInputComment("");
  }

  return (
    <>
      <SentComment>
        <AddComment
          placeholder="Add a comment…"
          value={inputComment}
          onChange={changeHandler}
        ></AddComment>

        <ClickSendButton>
          {<Img src={process.env.PUBLIC_URL + filteredImages.image.png} />}

          <Button onClick={handleclick}>Send</Button>
        </ClickSendButton>
      </SentComment>

      <DesktopDiv>
        <div className="img-div">
          {<Img src={process.env.PUBLIC_URL + filteredImages.image.png} />}
        </div>

        <TextAreaDiv>
          <AddComment
            placeholder="Add a comment…"
            value={inputComment}
            onChange={changeHandler}
          ></AddComment>
        </TextAreaDiv>

        <div className="button-div">
          <Button onClick={handleclick}>Send</Button>
        </div>
      </DesktopDiv>
    </>
  );
}

export default SendComment;

const DesktopDiv = styled.div`
  display: none;
  @media (min-width: 1440px) {
    display: flex;
    justify-content: center;
    margin: 20px auto 0px auto;
    padding-bottom: 13px;
    background: #ffffff;
    border-radius: 8px;
    width: 52%;
    gap: 16px;
  }
`;

const TextAreaDiv = styled.div`
  width: 69%;
  margin-top: 24px;
`;

const SentComment = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  padding-bottom: 13px;
  background: #ffffff;
  border-radius: 8px;
  @media (min-width: 1440px) {
    display: none;
  }
`;

const AddComment = styled.textarea`
  margin: 16px;
  width: 311px;
  padding: 12px 24px;
  height: 96px;
  background: #ffffff;
  border: 1px solid #e9ebf0;
  border-radius: 8px;
  resize: none;

  &:hover {
    cursor: pointer;
    border: 1px solid #5357b6;
  }
  @media (min-width: 1440px) {
    width: 100%;
    margin: 0px;
  }
`;

const ClickSendButton = styled.div`
  width: 311px;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: space-between;
`;

const Img = styled.img`
  width: 32px;
  height: 32px;
`;

const Button = styled.button`
  background: #5357b6;
  border-radius: 8px;
  border: none;
  padding: 12px 30px;

  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  &:hover {
    cursor: pointer;
    background: #c5c6ef;
  }
`;
