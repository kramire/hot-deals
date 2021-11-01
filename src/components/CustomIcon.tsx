import { Icon } from "semantic-ui-react";
import styled from "styled-components";

const StyledIcon = styled(Icon)`
  &&&&& {
    margin: 0 0.5em;

    :hover {
      cursor: pointer;
    }
  }
`;

export const CustomIcon = (props: {
  name: string;
  handleClick?(): void;
  color?: string;
}) => (
  <StyledIcon
    color={props.color ?? "black"}
    name={props.name}
    onClick={props.handleClick}
  />
);
