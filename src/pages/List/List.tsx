import React, { useEffect, useState } from "react";
import { Item } from "../../lib/types";
import { ListItem } from "./ListItem";
import { useLoading } from "../../hooks/useLoading";
import { Spinner } from "../../components";
import axios from "axios";
import styled from "styled-components";

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
  const { loading, setLoading } = useLoading();
  const LIST_LENGTH = 12;

  useEffect(() => {
    const loadList = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL}/products?limit=${LIST_LENGTH}`
        );
        setItems(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    loadList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <Wrapper>
      {items.map(item => (
        <ListItem key={item.id} item={item} />
      ))}
    </Wrapper>
  );
};
