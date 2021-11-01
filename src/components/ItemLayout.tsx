import React from "react";
import { ImageWrapper } from "./ImageWrapper";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2em;

  display: grid;
  grid-gap: 2em;
  grid-template-columns: 1fr 3fr 1fr;
  align-items: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;

    .title {
      max-width: 60px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;

const MiddleWrapper = styled.div`
  > div {
    padding: 1em 0;
  }
`;

const RightWrapper = styled(MiddleWrapper)`
  text-align: right;
`;

export const ItemLayout = (props: {
  imgSrc: string;
  middle: React.ReactNode;
  right: React.ReactNode;
}) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <img src={props.imgSrc} alt="item img" />
      </ImageWrapper>
      <MiddleWrapper>{props.middle}</MiddleWrapper>
      <RightWrapper>{props.right}</RightWrapper>
    </Wrapper>
  );
};
