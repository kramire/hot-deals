import React from "react";
import { Dropdown, DropdownProps, Button, Icon } from "semantic-ui-react";
import { SortDirection } from "../../lib/types";

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
          <Button
            icon
            active={props.sort === "asc"}
            onClick={handleSortClick("asc")}
          >
            <Icon name="sort alphabet ascending" />
          </Button>
          <Button
            icon
            active={props.sort === "desc"}
            onClick={handleSortClick("desc")}
          >
            <Icon name="sort alphabet descending" />
          </Button>
        </Button.Group>
      </div>
    </>
  );
};
