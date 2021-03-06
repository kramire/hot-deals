import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Header, Segment } from "semantic-ui-react";
import { CartType, Item, Role } from "../../lib/types";
import {
  ActionButton,
  ImageWrapper,
  TotalCost,
  Spinner,
} from "../../components";
import { capitalize, padPrice } from "../../lib/utils";
import { useLoading } from "../../hooks/useLoading";
import axios from "axios";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 4em 8em;

  display: grid;
  grid-gap: 2em;
  grid-template-columns: 2fr 3fr;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin: 4em;
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

export const Product = (props: {
  cart: CartType;
  setCart: (value: CartType) => void;
  role: Role;
}) => {
  const { cart, setCart } = props;
  const [product, setProduct] = useState<Item | null>(null);
  const { id } = useParams<{ id: string }>();
  const { loading, setLoading } = useLoading();

  const addToCart = () => {
    const currCount = cart?.[id]?.quantity ?? 0;
    setCart({
      ...cart,
      [id]: {
        ...cart?.[id],
        quantity: currCount + 1,
        unitPrice: Number(product?.price),
      },
    });
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL}/products/${id}`
        );
        setProduct(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      getProduct();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : !product ? (
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
            {props.role === "user" && (
              <ActionButton
                handleClick={addToCart}
                content="Add to Cart"
                icon="cart"
                labelPosition="right"
              />
            )}
          </DetailsWrapper>
        </Wrapper>
      )}
    </>
  );
};
