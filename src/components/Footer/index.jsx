import styled from "styled-components";

const StyledFooter = styled.footer`
  height: 80px;
  background: #04244F;
`

const Container = styled.div`
  width: 1440px;
  height: 100%;
  margin: 0 auto;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  line-height: 19px;
`

const IconsContainer = styled.ul`
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
        <IconsContainer>
          <li>
            <a href="https://www.instagram.com/lukzgois" target="_blank">
              <img src="/images/sociais/instagram.svg" alt="Meu Instagram" />
            </a>
          </li>
        </IconsContainer>

        <div>
          Designed by <Link href="https://alura.com.br" target="_blank">Alura</Link><br />
          Coded with ❤️ by Lucas Padilha Gois
        </div>
      </Container>
    </StyledFooter>
  )
}

export default Footer
