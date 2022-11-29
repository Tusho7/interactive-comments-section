import React from "react";
import styled from "styled-components";
import ReplySection from "./ReplySection";

function Reply({ Object, index, setObject }) {
  const filteredReplies = Object[index].replies;

  return (
    <RepliesContainer>
      {filteredReplies.map((object, i) => {
        return (
          <ReplySection
            object={object}
            key={i}
            Object={Object}
            setObject={setObject}
            index={index}
          />
        );
      })}
    </RepliesContainer>
  );
}

export default Reply;

const RepliesContainer = styled.div`
  width: 100%;
  border-left: 2px solid #e9ebf0;
  padding-left: 16px;
  @media (min-width: 1440px) {
    padding-left: 44px;
    margin-left: 44px;
  }
`;
