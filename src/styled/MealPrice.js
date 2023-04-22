import styled from "styled-components";
import { mainColor } from "../utils/constants/colors";

const MealPrice = styled.span`
  font-size: ${props => props.fontSize || '18px'};
  font-weight: bold;
  color: ${mainColor};
`;

export default MealPrice;
