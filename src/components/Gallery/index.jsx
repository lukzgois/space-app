import styled from "styled-components"
import Tags from "./Tags"
import Popular from "./Popular"
import PhotoList from "./Photos/PhotoList"
import { mediaQuery } from "@components/GlobalStyles/breakpoints"

const StyledDiv = styled.div`
  margin-top: 32px;

  ${mediaQuery.md`
    margin-top: 48px;
  `}
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-top: 32px;

  ${mediaQuery.md`
    grid-template-columns: 1fr minmax(156px, 212px)
  `}
`

const Gallery = () => {
  return (
    <StyledDiv>
      <Tags />

      <Container>
        <PhotoList />

        <Popular />
      </Container>
    </StyledDiv>
  )
}

export default Gallery
