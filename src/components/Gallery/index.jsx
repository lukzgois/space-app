import styled from "styled-components"
import Tags from "./Tags"
import Popular from "./Popular"
import Photos from "./Photos"
import { mediaQuery } from "../GlobalStyles/breakpoints"

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

const Gallery = ({ photos = [], onSelectedPhoto, onToggleFavPhoto, onSelectTag, selectedTag }) => {
  return (
    <StyledDiv>
      <Tags selectedTag={selectedTag} onSelectTag={onSelectTag} />

      <Container>
        <Photos 
          photos={photos} 
          onSelectedPhoto={onSelectedPhoto} 
          onToggleFavPhoto={onToggleFavPhoto}
        />

        <Popular />
      </Container>
    </StyledDiv>
  )
}

export default Gallery
