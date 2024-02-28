import styled from "styled-components"
import Title from "../Title"
import Tags from "./Tags"
import Photo from "./Photo"

const StyledDiv = styled.div`
  margin-top: 56px;
`

const PhotosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`

const Gallery = ({ photos = [], onSelectedPhoto }) => {
  return (
    <StyledDiv>
      <Tags activeTag="Todas" />
      <Title>Navegue pela galeria</Title>

      <PhotosContainer>
        {photos.map(photo => (
          <Photo 
            onExpand={onSelectedPhoto}
            key={photo.id}
            photo={photo}
          />
        ))}
      </PhotosContainer>
    </StyledDiv>
  )
}

export default Gallery
