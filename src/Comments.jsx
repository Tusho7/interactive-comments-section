import React from "react";
import styled from "styled-components";
import Comment from "./Comment";

const Comments = ({ Object, setObject }) => {
  return (
    <MainContainer>
      {Object.map((object, index) => {
        return (
          <div>
            <Comment
              index={index}
              object={object}
              key={object.id}
              Object={Object}
              setObject={setObject}
            />
          </div>
        );
      })}
    </MainContainer>
  );
};

export default Comments;

const MainContainer = styled.div`
  width: 100%;
  margin-top: 32px;
  @media (min-width: 1440px) {
    margin: 64px auto 0px auto;
    width: 52%;
  }
`;
