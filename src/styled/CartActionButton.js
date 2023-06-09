import styled from "styled-components";
import { mainColor } from "../utils/constants/colors";

const CartActionButton = styled.button`
  color: ${props => props.color || mainColor};
  background-color: ${props => props.backgroundColor || "white"};
  border: 1px solid ${mainColor};
  width: 100px;
  height: 35px;
  border-radius: 26px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: ${mainColor};
  }
`;

export default CartActionButton;
