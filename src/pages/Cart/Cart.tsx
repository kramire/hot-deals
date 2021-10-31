import React, { useEffect, useMemo, useState } from "react";
import { Header } from "semantic-ui-react";
import { Spinner } from "../../components";
import { useLoading } from "../../hooks/useLoading";
import { CartType, Item } from "../../lib/types";
import { totalCartCost, totalCartItems } from "../../lib/utils";
import { CartCost } from "./CartCost";
import { CartItem } from "./CartItem";
import axios from "axios";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 4em 8em;

  display: grid;
  grid-gap: 2em;
  grid-template-areas: "items cost";
  grid-template-columns: 2fr 1fr;
  height: calc(90vh - 4em);

  @media screen and (max-width: 768px) {
    margin: 4em 2em;
    grid-template-areas: "cost" "items";
    grid-template-columns: 1fr;
  }
`;

const ItemsWrapper = styled.div`
  grid-area: items;
`;

const ItemsListWrapper = styled.div`
  overflow-y: scroll;
  height: 80%;

  @media screen and (max-width: 768px) {
    overflow-y: inherit;
    height: inherit;
  }
`;

export const Cart = (props: {
  cart: CartType;
  setCart: (value: CartType) => void;
}) => {
  const { cart, setCart } = props;
  const [items, setItems] = useState<Item[]>([]);
  const { loading, setLoading } = useLoading();

  const totalItems = useMemo(() => totalCartItems(cart), [cart]);
  const totalCost = useMemo(() => totalCartCost(cart), [cart]);

  useEffect(() => {
    const getItemData = async () => {
      setLoading(true);
      const itemIds = Object.keys(cart);
      try {
        const items = await Promise.all(
          itemIds.map(async id => {
            const { data } = await axios.get(
              `${process.env.REACT_APP_API_URL}/products/${id}`
            );
            return data;
          })
        );
        setItems(items);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    getItemData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  return loading ? (
    <Spinner />
  ) : !items.length ? (
    <div>Cart is Empty</div>
  ) : (
    <Wrapper>
      <ItemsWrapper>
        <Header size="large">
          {`Cart: ${totalItems} ${totalItems === 1 ? "Item" : "Items"}`}
        </Header>
        <ItemsListWrapper>
          {items.map(
            item =>
              cart[item.id] && (
                <CartItem
                  key={item.id}
                  item={item}
                  cartCounts={cart[item.id]}
                  cart={cart}
                  setCart={setCart}
                />
              )
          )}
        </ItemsListWrapper>
      </ItemsWrapper>
      <CartCost total={totalCost} />
    </Wrapper>
  );
};
