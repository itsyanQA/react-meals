import styled from "styled-components";
import { mainColor } from "../utils/constants/colors";

const QuantityButton = styled.button`
  color: #e28e2f;
  background-color: white;
  border: 1px solid ${mainColor};
  width: 40px;
  height: 30px;
  border-radius: 4px;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: ${mainColor};
  }
`;

export default QuantityButton;
