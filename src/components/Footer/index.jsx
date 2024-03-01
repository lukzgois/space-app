import styled from "styled-components";
import { mediaQuery } from "../GlobalStyles/breakpoints";

const StyledFooter = styled.footer`
  background: #04244F;
  padding: 16px;

  ${mediaQuery.md`
    padding: 16px 24px;
  `}
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  ${mediaQuery.md`
    flex-direction: row-reverse;
    justify-content: space-between;
    text-align: right
  `}
`

const IconsContainer = styled.ul`
  display: block;
  list-style: none;
  padding: 0;
  margin: 0;
`

const Link = styled.a`
  color: white;
  font-weight: bold;
`

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <div>
          <p>Designed by <Link href="https://alura.com.br" target="_blank">Alura</Link></p>
          <p>Coded with ❤️ by Lucas Padilha Gois</p>
        </div>

        <IconsContainer>
          <li>
            <a href="https://www.instagram.com/lukzgois" target="_blank">
              <img src="/images/sociais/instagram.svg" alt="Meu Instagram" />
            </a>
          </li>
        </IconsContainer>
      </Container>
    </StyledFooter>
  )
}

export default Footer
