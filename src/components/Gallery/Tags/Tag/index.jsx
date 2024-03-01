import styled from 'styled-components'
import { mediaQuery } from '../../../GlobalStyles/breakpoints'

const StyledButton = styled.button`
  background-color: rgba(217, 217, 217, 0.3);
  color: white;
  border: 2px solid;
  border-color: ${ props => props.$active ? '#7B78E5' : 'transparent' };
  border-radius: 10px;
  padding: 6px 4px;
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: #C98CF1;
  }

  ${mediaQuery.md`
    font-size: 24px;
    line-height: 28px;
    padding: 8px 4px;
  `}
`

const Tag = ({ children, active = false, ...rest}) => {
  return (
    <StyledButton $active={active} {...rest}>
      {children}
    </StyledButton>
  )
}

export default Tag
