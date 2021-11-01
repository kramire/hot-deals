import React from "react";
import {
  Dropdown,
  DropdownProps,
  Button,
  Icon,
  SemanticICONS,
} from "semantic-ui-react";
import { SortDirection } from "../../lib/types";

// known from looking at the API documentation
// there is an endpoint to get this information dynamically as well
const categoryOptions = [
  { key: "electronics", value: "electronics", text: "Electronics" },
  { key: "jewelery", value: "jewelery", text: "Jewelery" },
  { key: `men's clothing`, value: `men's clothing`, text: `Men's Clothing` },
  {
    key: `women's clothing`,
    value: `women's clothing`,
    text: `Women's Clothing`,
  },
];

const directionDict: { [key in SortDirection]: string } = {
  asc: "ascending",
  desc: "descending",
};

const SortButton = (props: {
  sort: SortDirection;
  handleClick(value: SortDirection): () => void;
}) => (
  <Button
    icon
    active={props.sort === "asc"}
    onClick={props.handleClick(props.sort)}
  >
    <Icon
      name={`sort alphabet ${directionDict[props.sort]}` as SemanticICONS}
    />
  </Button>
);

interface ListControlsProps {
  filterCategory: string | undefined;
  setFilterCategory(value: any): void;
  sort: SortDirection;
  setSort(value: any): void;
}

export const ListControls = (props: ListControlsProps) => {
  const handleCatChange = (
    e: React.SyntheticEvent<HTMLElement, Event>,
    data: DropdownProps
  ) => props.setFilterCategory(data.value);

  const handleSortClick = (value: SortDirection) => () => props.setSort(value);

  return (
    <>
      <div>
        <div>Filter:</div>
        <Dropdown
          placeholder="Select Category"
          fluid
          selection
          clearable
          options={categoryOptions}
          onChange={handleCatChange}
          value={props.filterCategory}
        />
      </div>
      <div>
        <div>Sort:</div>
        <Button.Group>
          <SortButton sort={"asc"} handleClick={handleSortClick} />
          <SortButton sort={"desc"} handleClick={handleSortClick} />
        </Button.Group>
      </div>
    </>
  );
};
