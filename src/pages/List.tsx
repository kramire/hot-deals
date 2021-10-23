import React, { useEffect, useState } from "react";
import { Item } from "../lib/types";
import styled from "styled-components";
import { ListItem } from "../components";

const Wrapper = styled.div`
  display: grid;
  grid-gap: 2em;
  grid-template-columns: repeat(3, minmax(100px, 300px));

  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(2, minmax(100px, 300px));
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, minmax(100px, 300px));
  }
`;

export const List = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit=12`)
      .then(res => res.json())
      .then(data => setItems(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      {items.map(item => (
        <ListItem key={item.id} item={item} />
      ))}
    </Wrapper>
  );
};
