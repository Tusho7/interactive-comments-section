import { useState } from "react";
import React from "react";
import PlusIcon from "./Icons/icon-plus.svg";
import MinusIcon from "./Icons/icon-minus.svg";
import ReplyIcon from "./Icons/icon-reply.svg";
import styled from "styled-components";
import ReplyOrComment from "./ReplyOrComment";
import Reply from "./Reply";

function Comment({ object, Object, setObject, index }) {
  const [comments, SetComments] = useState(false);

  const handleClick = () => {
    SetComments(!comments);
  };

  return (
    <div>
      <Main>
        {object && (
          <Container>
            <ScoreAndReply>
              <ScoreBox>
                <PlusIcoon src={PlusIcon} />
                <Score>{object.score}</Score>
                <MinusIcoon src={MinusIcon} />
              </ScoreBox>

              <ReplyBox>
                <ReplyIcoon src={ReplyIcon} onClick={handleClick} />
                <ReplyText onClick={handleClick}>Reply</ReplyText>
              </ReplyBox>
            </ScoreAndReply>

            <div>
              <div className="flex">
                <Img src={process.env.PUBLIC_URL + object.user.image.png} />

                <P>{object.user.username}</P>

                <SecondP>{object.createdAt}</SecondP>
              </div>
              <Span>{object.content}</Span>
            </div>
          </Container>
        )}
      </Main>
      <DesktopDiv>
        <ScoreAndReply>
          <ScoreBox>
            <PlusIcoon src={PlusIcon} />
            <Score>{object.score}</Score>
            <MinusIcoon src={MinusIcon} />
          </ScoreBox>
        </ScoreAndReply>

        <div>
          <FlexContainer>
            <div className="flex">
              <Img src={process.env.PUBLIC_URL + object.user.image.png} />

              <P>{object.user.username}</P>

              <SecondP>{object.createdAt}</SecondP>
            </div>

            <div>
              <ReplyBox>
                <ReplyIcoon src={ReplyIcon} onClick={handleClick} />
                <ReplyText onClick={handleClick}>Reply</ReplyText>
              </ReplyBox>
            </div>
          </FlexContainer>
          <Span>{object.content}</Span>
        </div>
      </DesktopDiv>
      {comments && (
        <ReplyOrComment
          Object={Object}
          setObject={setObject}
          object={object}
          index={index}
        />
      )}
      <Reply
        object={object}
        Object={Object}
        index={index}
        setObject={setObject}
      />
    </div>
  );
}

export default Comment;

const DesktopDiv = styled.div`
  display: none;
  @media (min-width: 1440px) {
    display: flex;
    gap: 24px;
    margin-top: 16px;
    padding: 24px;
    border-radius: 8px;
    font-family: "Rubik";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #67727e;
    background-color: #ffffff;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 309px;
`;

const Main = styled.div`
  margin-top: 16px;
  padding: 16px;
  border-radius: 8px;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #67727e;
  background-color: #ffffff;
  @media (min-width: 1440px) {
    display: none;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

const Img = styled.img`
  width: 32px;
  height: 32px;
`;
const P = styled.p`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #334253;
`;

const SecondP = styled.p`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #67727e;
`;

const Span = styled.p`
  margin-top: 16px;
`;

const ScoreAndReply = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  @media (min-width: 1440px) {
    display: inline-block;
    margin-top: 0px;
    padding-bottom: 24px;
  }
`;

const ScoreBox = styled.div`
  width: 100px;
  height: 40px;
  display: flex;
  align-items: center;
  gap: 13px;
  justify-content: center;
  background: #f5f6fa;
  border-radius: 10px;
  @media (min-width: 1440px) {
    display: inline-flex;
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

const Score = styled.p`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #5357b6;
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

const ReplyText = styled.p`
  :hover {
    color: #c5c6ef;
    cursor: pointer;
  }
`;

const ReplyIcoon = styled.img`
  :hover {
    cursor: pointer;
  }
`;
