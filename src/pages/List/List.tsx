import React, { useEffect, useState } from "react";
import { Item, Role, SortDirection } from "../../lib/types";
import { ListItem } from "./ListItem";
import { useLoading } from "../../hooks/useLoading";
import { Spinner } from "../../components";
import { ListControls } from "./ListControls";
import axios from "axios";
import styled from "styled-components";
import { ListItemAdmin } from "./ListItemAdmin";

const BaseWrapper = styled.div`
  margin: 1em;
`;

const Wrapper = styled(BaseWrapper)`
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

export const List = (props: { role: Role }) => {
  const [items, setItems] = useState<Item[]>([]);
  const [filterCategory, setFilterCategory] = useState<string | undefined>();
  const [sort, setSort] = useState<SortDirection>("asc");
  const { loading, setLoading } = useLoading();
  const LIST_LENGTH = 12;

  useEffect(() => {
    let baseUrl = `${process.env.REACT_APP_API_URL}/products`;
    if (filterCategory) {
      baseUrl = baseUrl + `/category/${filterCategory}`;
    }

    const loadList = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `${baseUrl}?limit=${LIST_LENGTH}&sort=${sort}`
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
  }, [filterCategory, sort]);

  return (
    <>
      <Wrapper>
        <ListControls
          filterCategory={filterCategory}
          setFilterCategory={setFilterCategory}
          sort={sort}
          setSort={setSort}
        />
      </Wrapper>
      {loading ? (
        <Spinner />
      ) : props.role === "admin" ? (
        <BaseWrapper>
          {items.map(item => (
            <ListItemAdmin key={item.id} item={item} />
          ))}
        </BaseWrapper>
      ) : (
        <Wrapper>
          {items.map(item => (
            <ListItem key={item.id} item={item} />
          ))}
        </Wrapper>
      )}
    </>
  );
};
