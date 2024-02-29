import styled from "styled-components"
import SearchInput from "../SearchInput"
import Menu from "./Menu"

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  img {
    max-width: 157px;
  }
`

const LeftSide = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 32px;
  align-items: center;
`

const Header = ({searchTerm, onSearch}) => {

  return (
    <StyledHeader>
      <LeftSide>
        <Menu />

        <img src="/images/logo.png" />
      </LeftSide>

      <SearchInput term={searchTerm} onSearch={onSearch} />
    </StyledHeader>
  )
}

export default Header
