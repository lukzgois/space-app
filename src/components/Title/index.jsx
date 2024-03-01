import styled from "styled-components";
import { mediaQuery } from "../GlobalStyles/breakpoints";

const Title = styled.h2`
  color: #7B78E5;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  margin: 0;
  text-align: ${props => props.$align ? props.$align : 'left' };

  ${mediaQuery.md`
    font-size: 28px;
    line-height: 32px;
  `}
`

export default Title
