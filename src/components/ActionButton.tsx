import { Button } from "semantic-ui-react";
import styled from "styled-components";

export const StyledButton = styled(Button)`
  &&&& {
    width: 50%;
    border-radius: 0;

    &:hover {
      opacity: 0.5;
    }

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
`;

export const ActionButton = (props: {
  content: string;
  handleClick: () => void;
  icon?: string;
  labelPosition?: string;
  style?: Object;
}) => (
  <StyledButton
    onClick={props.handleClick}
    color="orange"
    content={props.content}
    icon={props.icon}
    labelPosition={props.labelPosition}
    style={props.style}
  />
);
