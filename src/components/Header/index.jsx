import styled from "styled-components"
import { mediaQuery } from "../GlobalStyles/breakpoints"
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

  ${mediaQuery.md`
    flex-direction: row;
  `}
`

const LeftSide = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 32px;
  align-items: center;

  ${mediaQuery.md`
    margin-bottom: 0
  `}
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
