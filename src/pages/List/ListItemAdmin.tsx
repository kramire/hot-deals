import React, { useState } from "react";
import { Item } from "../../lib/types";
import { padPrice } from "../../lib/utils";
import { Input, InputOnChangeData } from "semantic-ui-react";
import { CustomIcon, ItemLayout, Spinner } from "../../components";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import { useLoading } from "../../hooks/useLoading";

const FieldWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ItemField = (props: {
  itemId: string;
  label: string;
  fieldValue: string | number;
  isPrice?: boolean;
}) => {
  const [value, setValue] = useState(props.fieldValue);
  const [isEditing, setIsEditing] = useState(false);
  const { loading, setLoading } = useLoading();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    data: InputOnChangeData
  ) => setValue(data.value);

  const toggleEditing = (value: boolean) => () => setIsEditing(value);

  const updateProduct = async () => {
    try {
      setLoading(true);
      await axios.put(
        `${process.env.REACT_APP_API_URL}/products/${props.itemId}`,
        JSON.stringify({
          [props.label]: value,
        })
      );
      window.alert("PUT call success! But mock data will stay the same.");
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (value !== props.fieldValue) {
      await updateProduct();
    }
    setIsEditing(false);
  };

  return (
    <FieldWrapper>
      {loading ? (
        <Spinner />
      ) : isEditing ? (
        <>
          {props.isPrice ? (
            <>
              <span>$</span>
              <Input
                value={value}
                onChange={handleChange}
                type="number"
                min="0"
              />
            </>
          ) : (
            <Input value={value} onChange={handleChange} />
          )}
          <CustomIcon
            color="orange"
            name={"checkmark"}
            handleClick={handleSave}
          />
        </>
      ) : (
        <>
          {props.isPrice && <span>$</span>}
          <div>{props.fieldValue}</div>
          <CustomIcon
            color="orange"
            name={"pencil"}
            handleClick={toggleEditing(true)}
          />
        </>
      )}
    </FieldWrapper>
  );
};

export const ListItemAdmin = (props: { item: Item }) => (
  <ItemLayout
    role="admin"
    imgSrc={props.item.image}
    middle={
      <>
        <ItemField
          itemId={props.item.id}
          label="title"
          fieldValue={props.item.title}
        />
        <Link to={`/product/${props.item.id}`}>See Item Details</Link>
      </>
    }
    right={
      <ItemField
        itemId={props.item.id}
        label="price"
        fieldValue={padPrice(props.item.price)}
        isPrice={true}
      />
    }
  />
);
