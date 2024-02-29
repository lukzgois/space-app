import styled from "styled-components"
import SearchInput from "../SearchInput"

/*
const StyledHeader = styled.header`
  padding: 60px 0; 
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    max-width: 212px;
  }
`
*/

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  img {
    max-width: 157px;
  }
`

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 32px;
  align-items: center;
`

const Header = ({searchTerm, onSearch}) => {

  return (
    <StyledHeader>
      <MenuContainer>
        <img src="/icons/menu.png" width="32" height="32" />
        <img src="/images/logo.png" />
      </MenuContainer>

      <SearchInput term={searchTerm} onSearch={onSearch} />
    </StyledHeader>
  )
}

export default Header
