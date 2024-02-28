import styled from "styled-components"
import SearchInput from "../SearchInput"

const StyledHeader = styled.header`
  padding: 60px 0; 
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    max-width: 212px;
  }
`

const Header = () => {

  return (
    <StyledHeader>
      <img src="/images/logo.png" />
      <SearchInput />
    </StyledHeader>
  )
}

export default Header
