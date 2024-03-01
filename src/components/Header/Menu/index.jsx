import { useRef } from "react"
import styled from "styled-components"
import { mediaQuery } from "../../GlobalStyles/breakpoints"
import IconButton from "../../IconButton"
import NavList from "../../Sidebar/NavList"

const Container = styled.div`
  ${mediaQuery.md`
    display: none;
  `} 
`

const MenuButton = styled.button`
  width: 32px;
  height: 32px;
  background-color: transparent;
  border: none;
  padding: 0;

  img {
    width: 100%;
    height: 100%;
  }
`

const Modal = styled.dialog`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  margin: 0;
  border: none;
  padding: 16px 24px;

  &::backdrop {
    background-color: rgba(0, 0, 0, .8)
  }
  
  form {
    display: flex;
    justify-content: flex-end;
  }
`

const Menu = () => {
  const modal = useRef(null)

  const open = () => {
    modal.current.showModal()
  }

  return (
    <Container>
      <MenuButton onClick={open}>
        <img src="/icons/menu.png" />
      </MenuButton>

      <Modal ref={modal}>
        <form method="dialog">
          <IconButton>
            <img src="/icons/fechar.png" />
          </IconButton>
        </form>

        <NavList />
      </Modal>
    </Container>
  )
}

export default Menu
