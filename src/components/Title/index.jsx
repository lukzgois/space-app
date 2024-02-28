import styled from "styled-components";

const Title = styled.h2`
  color: #7B78E5;
  font-size: 32px;
  font-weight: 400;
  line-height: 39px;
  text-align: ${props => props.$align ? props.$align : 'left' };
`

export default Title
