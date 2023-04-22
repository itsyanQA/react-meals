import styled from "styled-components";

const BoldText = styled.span`
  font-size: ${props => props.fontSize || "18px"};
  font-weight: bold;
`;

export default BoldText;
