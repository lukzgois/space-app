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

const Gallery = ({ photos = [] }) => {
  return (
    <StyledDiv>
      <Tags activeTag="Todas" />
      <Title>Navegue pela galeria</Title>

      <PhotosContainer>
        {photos.map(photo => (
          <Photo 
            key={photo.id} 
            title={photo.titulo} 
            path={photo.path} 
            source={photo.fonte}
          />
        ))}
      </PhotosContainer>
    </StyledDiv>
  )
}

export default Gallery
