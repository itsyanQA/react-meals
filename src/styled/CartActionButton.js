import styled from "styled-components";

const CartActionButton = styled.button`
  color: ${props => props.color || "#e28e2f"};
  background-color: ${props => props.backgroundColor || "white"};
  border: 1px solid #e28e2f;
  width: 100px;
  height: 35px;
  border-radius: 26px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #e28e2f;
  }
`;

export default CartActionButton;
