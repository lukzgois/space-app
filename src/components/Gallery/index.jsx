import styled from "styled-components"
import Tags from "./Tags"
import Popular from "./Popular"
import Photos from "./Photos"

const StyledDiv = styled.div`
  margin-top: 56px;
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 212px;
  gap: 24px;
`

const Gallery = ({ photos = [], onSelectedPhoto }) => {
  return (
    <StyledDiv>
      <Tags activeTag="Todas" />

      <Container>
        <Photos photos={photos} onSelectedPhoto={onSelectedPhoto} />
        <Popular />
      </Container>
    </StyledDiv>
  )
}

export default Gallery
