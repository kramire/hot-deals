import React from "react";
import { Item } from "../lib/types";
import { padPrice } from "../lib/utils";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows:
    300px
    20%;
  grid-gap: 1em;
  align-items: center;
  color: black;

  &:hover {
    transform: scale(1.05);
  }
`;

const ItemWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 8px 2px #ccc;

  img {
    max-width: 90%;
    max-height: 90%;
  }
`;

export const ListItem = (props: { item: Item }) => (
  <Link to={`/product/${props.item.id}`}>
    <Wrapper>
      <ItemWrapper>
        <img src={props.item.image} alt="item img" />
      </ItemWrapper>
      <div>
        <div>{props.item.title}</div>
        <div>${padPrice(props.item.price)}</div>
      </div>
    </Wrapper>
  </Link>
);
