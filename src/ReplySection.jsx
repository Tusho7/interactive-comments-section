import { useState } from "react";
import React from "react";
import styled from "styled-components";
import DeleteIcon from "./Icons/icon-delete.svg";
import EditIcon from "./Icons/icon-edit.svg";
import ReplyIcon from "./Icons/icon-reply.svg";
import PlusIcon from "./Icons/icon-plus.svg";
import MinusIcon from "./Icons/icon-minus.svg";
import ReplyOrComment from "./ReplyOrComment";
import data from "./data.json";

function ReplySection({ object, Object, setObject, index }) {
  const currentUser = data.currentUser.username;
  const [comments, SetComments] = useState(false);
  const [edit, setEdit] = useState(false);
  const [isShown, setIsShown] = useState(true);
  const [deleteText, setDeleteText] = useState(true);

  const [inputComment, setInputComment] = useState("");

  const handleClick = () => {
    SetComments(!comments);
  };

  const editClick = () => {
    setEdit(!edit);
  };

  const showOrHide = () => {
    setIsShown((current) => !current);
    <UpdateBtn style={{ display: "block" }}>Update</UpdateBtn>;
  };

  function updateReply(event) {
    setInputComment(event.target.value);
  }

  const updateReplyBtn = () => {
    const copiedObject = [...Object];

    const mainReply = copiedObject.map((element) => {
      element.replies.map((reply) => {
        if (reply.id === object.id) {
          reply.content = inputComment;
        }
        return reply;
      });
      return element;
    });

    setObject(mainReply);
    setEdit(false);
    setInputComment("");
  };

  const deleteclick = () => {
    setDeleteText((current) => !current);
  };

  const nocancel = () => {
    setDeleteText((current) => !current);
    <DeleteModalContainer style={{ display: "none" }}></DeleteModalContainer>;
  };

  const deletehandler = () => {
    const filteredReplies = Object.map((element) => {
      element.replies = element.replies.filter(
        (reply) => reply.id !== object.id
      );
      return element;
    });
    setObject(filteredReplies);
  };

  function foo() {
    if (currentUser === object.user.username) {
      return (
        <>
          <ReplyBox onClick={showOrHide} className="icons-reply">
            <img src={DeleteIcon} />
            <DeleteText onClick={deleteclick}>Delete</DeleteText>
            <img src={EditIcon} />
            <ReplyText onClick={editClick}>Edit</ReplyText>
          </ReplyBox>
        </>
      );
    } else {
      return (
        <ReplyBox className="reply-text">
          <ReplyIcoon src={ReplyIcon} />
          <ReplyText onClick={handleClick}>Reply</ReplyText>
        </ReplyBox>
      );
    }
  }
  return (
    <div className="width">
      <Replies>
        <ScoreAndReply>
          <ScoresDiv>
            <PlusIcoon src={PlusIcon} /> {object.score}
            <MinusIcoon src={MinusIcon} />
          </ScoresDiv>

          {foo()}
        </ScoreAndReply>

        {edit ? (
          <Parent>
            <Edit defaultValue={object.content} onChange={updateReply}></Edit>
            <UpdateBtn
              style={{ display: !isShown ? "flex" : "none" }}
              onClick={updateReplyBtn}
            >
              Update
            </UpdateBtn>
          </Parent>
        ) : (
          <Span>
            <ImagesDiv>
              <Img src={process.env.PUBLIC_URL + object.user.image.png} />
              <UserName>{object.user.username}</UserName>
              <p>{object.createdAt}</p>
            </ImagesDiv>
            {object.replyingTo && (
              <ReplyingTo>@{object.replyingTo + " "}</ReplyingTo>
            )}
            {object.replyingTo ? (
              object.content
            ) : (
              <ReplyComm>{object.content}</ReplyComm>
            )}
          </Span>
        )}
      </Replies>
      <DeleteModalContainer style={{ display: !deleteText ? "flex" : "none" }}>
        <DeleteModal style={{ display: !deleteText ? "flex" : "none" }}>
          <DeleteTitle>Delete comment</DeleteTitle>
          <DeleteSureText>
            Are you sure you want to delete this comment? This will remove the
            comment and can’t be undone.
          </DeleteSureText>

          <ModalButtons>
            <NoCancelBtn onClick={nocancel}>NO, CANCEL</NoCancelBtn>
            <YesDeleteBtn onClick={deletehandler}>YES, DELETE</YesDeleteBtn>
          </ModalButtons>
        </DeleteModal>
      </DeleteModalContainer>

      <DesktopDiv>
        <Main>
          <ScoreAndReply>
            <ScoresDiv>
              <PlusIcoon src={PlusIcon} /> {object.score}
              <MinusIcoon src={MinusIcon} />
            </ScoresDiv>
          </ScoreAndReply>

          <div>
            <div className="desktop-user-and-reply">
              <ImagesDiv>
                <Img src={process.env.PUBLIC_URL + object.user.image.png} />
                <UserName>{object.user.username}</UserName>
                <p>{object.createdAt}</p>
              </ImagesDiv>

              {foo()}
            </div>

            {edit ? (
          <Parent>
            <Edit defaultValue={object.content} onChange={updateReply}></Edit>
            <UpdateBtn
              style={{ display: !isShown ? "flex" : "none" }}
              onClick={updateReplyBtn}
            >
              Update
            </UpdateBtn>
          </Parent>
        ) : (
          <Span>
           
            {object.replyingTo && (
              <ReplyingTo>@{object.replyingTo + " "}</ReplyingTo>
            )}
            {object.replyingTo ? (
              object.content
            ) : (
              <ReplyComm>{object.content}</ReplyComm>
            )}
          </Span>
        )}
          </div>
        </Main>
      </DesktopDiv>
      <Repliess>
        {comments && (
          <ReplyOrComment
            Object={Object}
            setObject={setObject}
            index={index}
            object={object}
          />
        )}
      </Repliess>
    </div>
  );
}

export default ReplySection;

const Repliess = styled.div`
  margin-top: 8px;
  width: 94%;
`;

const DesktopDiv = styled.div`
  display: none;
  margin-top: 20px;
  border-radius: 8px;
  padding: 16px;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #67727e;
  background-color: #ffffff;
  @media (min-width: 1440px) {
    display: block;
    gap: 24px;
    width: 94%;
    align-items: baseline;
  }
`;

const Main = styled.div`
  display: flex;
  gap: 24px;
  align-items: baseline;
  margin-top: 8px;
`;

const DeleteModalContainer = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`;

const DeleteModal = styled.div`
  background: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  width: 90%;
  z-index: 999;
  @media (min-width: 1440px) {
    width: 28%;
    padding: 32px;
  }
`;

const DeleteTitle = styled.p`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #334253;
  @media (min-width: 1440px) {
    width: 93%;
    font-size: 24px;
  }
`;

const DeleteSureText = styled.p`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #67727e;
`;

const ModalButtons = styled.div`
  display: flex;
  gap: 12px;
  @media (min-width: 1440px) {
    gap: 14px;
  }
`;

const NoCancelBtn = styled.button`
  background: #67727e;
  border-radius: 8px;
  border: none;
  padding: 12px 22px;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  &:hover {
    cursor: pointer;
  }
  @media (min-width: 1440px) {
    width: 161px;
  }
`;

const YesDeleteBtn = styled.button`
  background: #ed6368;
  border-radius: 8px;
  border: none;
  padding: 12px 19px;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  &:hover {
    cursor: pointer;
  }
  @media (min-width: 1440px) {
    width: 161px;
  }
`;

const Parent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;

const Edit = styled.textarea`
  margin-top: 16px;
  width: 293px;
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
  @media (min-width: 1440px){
    width: 530px;
  }
`;

const Replies = styled.div`
  margin-top: 20px;
  border-radius: 8px;
  padding: 16px;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #67727e;
  background-color: #ffffff;
  display: flex;
  flex-direction: column-reverse;
  @media (min-width: 1440px) {
    display: none;
  }
`;

const ImagesDiv = styled.div`
  display: flex;
  align-items: center;
  width: 84%;
  gap: 16px;
`;

const Span = styled.p`
  margin-top: 16px;
`;
const Img = styled.img`
  width: 32px;
  height: 32px;
`;
const UserName = styled.p`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #334253;
`;

const ReplyingTo = styled.span`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #5357b6;
`;

const ScoresDiv = styled.div`
  width: 100px;
  height: 40px;
  background: #f5f6fa;
  border-radius: 10px;
  display: flex;
  gap: 13px;
  justify-content: center;
  align-items: center;
  @media (min-width: 1440px) {
    width: 40px;
    height: 100px;
    flex-direction: column;
  }
`;

const PlusIcoon = styled.img`
  :hover {
    cursor: pointer;
  }
`;

const MinusIcoon = styled.img`
  :hover {
    cursor: pointer;
  }
`;

const ScoreAndReply = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
`;

const ReplyBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #5357b6;
`;

const DeleteText = styled.p`
  color: #ed6368;
  &:hover {
    cursor: pointer;
    color: #ffb8bb;
  }
`;
const ReplyIcoon = styled.img`
  width: 14px;
  height: 13px;
`;

const ReplyText = styled.p`
  :hover {
    color: #c5c6ef;
    cursor: pointer;
  }
`;

const ReplyComm = styled.span`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #5357b6;
`;

const UpdateBtn = styled.button`
  background: #5357b6;
  border-radius: 8px;
  border: none;
  padding: 12px 30px;
  align-self: flex-end;

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
