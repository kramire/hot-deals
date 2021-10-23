import { Button } from "semantic-ui-react";
import styled from "styled-components";

export const ActionButton = styled(Button)`
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
