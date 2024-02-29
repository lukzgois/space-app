import styled from "styled-components"
import NavList from "./NavList"

const StyledAside = styled.aside`
  min-width: 220px;
`

const Sidebar = () => {
  return (
    <StyledAside>
      <NavList />
    </StyledAside>
  )
}

export default Sidebar
