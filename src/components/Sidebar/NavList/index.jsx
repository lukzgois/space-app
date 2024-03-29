import styled from "styled-components"
import NavItem from "../NavItem"

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const NavList = () => {
  return (
    <nav>
      <StyledList>
        <NavItem icon="home" active>Início</NavItem>
        <NavItem icon="mais-vistas">Mais Vistas</NavItem>
        <NavItem icon="mais-curtidas">Mais Curtidas</NavItem>
        <NavItem icon="novas">Novas</NavItem>
        <NavItem icon="surpreenda-me">Surpreenda-me</NavItem>
      </StyledList>
    </nav>
  )
}

export default NavList
