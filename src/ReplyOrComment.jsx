import data from "./data.json";
import React, { useState } from "react";
import styled from "styled-components";

function ReplyOrComment({ Object, setObject, index, object }) {
  const filteredImages = data.currentUser;
  const replyingTo = object.user.username;

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
      replyingTo: replyingTo,
      user: {
        image: {
          png: "./images/avatars/image-juliusomo.png",
          webp: "./images/avatars/image-juliusomo.webp",
        },
        username: "juliusomo",
      },
    };
    copiedObject[index].replies.push(newComment);
    setObject(copiedObject);
    setInputComment("");
  }
  return (
    <div>
      <SentComment>
        <AddComment
          placeholder="Add a comment…"
          value={inputComment}
          onChange={changeHandler}
        ></AddComment>

        <ClickSendButton>
          {<Img src={process.env.PUBLIC_URL + filteredImages.image.png} />}
          <Button onClick={handleclick}>REPLY</Button>
        </ClickSendButton>
      </SentComment>

      <DesktopDiv>
        <ClickSendButtonn>
          {<Img src={process.env.PUBLIC_URL + filteredImages.image.png} />}
          <AddComment
            placeholder="Add a comment…"
            value={inputComment}
            onChange={changeHandler}
          ></AddComment>
          <Button onClick={handleclick}>REPLY</Button>
        </ClickSendButtonn>
      </DesktopDiv>
    </div>
  );
}

export default ReplyOrComment;

const DesktopDiv = styled.div`
  display: none;
  margin-top: 16px;
  padding-bottom: 13px;
  background: #ffffff;
  border-radius: 8px;

  @media (min-width: 1440px) {
    display: block;
  }
`;

const ClickSendButtonn = styled.div`
  @media (min-width: 1440px) {
    display: flex;
    margin: auto;
    align-items: center;
    justify-content: space-between;
    width: 95%;
    align-items: baseline;
  }
`;

const SentComment = styled.div`
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
    width: 73%;
  }
`;

const ClickSendButton = styled.div`
  width: 311px;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 1440px) {
    display: none;
  }
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
