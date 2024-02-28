import styled from "styled-components"
import Photo from "../Photo"
import Title from "../../Title"

const PhotosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`

const Photos = ({photos = [], onSelectedPhoto, onToggleFavPhoto}) => {
  return (
    <div>
      <Title>Navegue pela galeria</Title>

      <PhotosContainer>

        {photos.map(photo => (
          <Photo 
            onExpand={onSelectedPhoto}
            onToggleFavPhoto={onToggleFavPhoto}
            key={photo.id} photo={photo}
          />
        ))}
      </PhotosContainer>
    </div>
  )
}

export default Photos
