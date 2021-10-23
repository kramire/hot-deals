import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Header, Segment } from "semantic-ui-react";
import { Item } from "../../lib/types";
import { ActionButton, ImageWrapper, TotalCost } from "../../components";
import { capitalize, padPrice } from "../../lib/utils";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 4em 8em;

  display: grid;
  grid-gap: 2em;
  grid-template-columns: 2fr 3fr;
  align-items: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: calc((90vh - 4em) / 2) 1fr;
  }
`;

const Description = styled(Segment)`
  &&&& {
    line-height: 1.75em;
    border-radius: 0;
    width: 70%;

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
`;

const DetailsWrapper = styled.div`
  &&&&&& {
    > * {
      margin: 0 0 1.5em;
    }
  }
`;

export const Product = () => {
  const [product, setProduct] = useState<Item | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      {!product ? (
        "No item found"
      ) : (
        <Wrapper>
          <ImageWrapper>
            <img src={product.image} alt="item img" />
          </ImageWrapper>
          <DetailsWrapper>
            <Header size="large">{product.title}</Header>
            <TotalCost>${padPrice(product.price)}</TotalCost>
            <Description>{capitalize(product.description)}</Description>
            <ActionButton
              content="Add to Cart"
              icon="cart"
              labelPosition="right"
              color="orange"
            />
          </DetailsWrapper>
        </Wrapper>
      )}
    </>
  );
};
