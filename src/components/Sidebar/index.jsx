import styled from "styled-components"
import NavList from "./NavList"
import { mediaQuery } from "../GlobalStyles/breakpoints"

const StyledAside = styled.aside`
  display: none;

  ${mediaQuery.md`
    min-width: 220px;
    display: block;
  `}
`

const Sidebar = () => {
  return (
    <StyledAside>
      <NavList />
    </StyledAside>
  )
}

export default Sidebar
