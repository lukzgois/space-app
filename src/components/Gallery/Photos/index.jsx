import styled from "styled-components"
import Photo from "../Photo"
import Title from "../../Title"

const PhotosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`

const Photos = ({photos = [], onSelectedPhoto}) => {
  return (
    <div>
      <Title>Navegue pela galeria</Title>

      <PhotosContainer>

        {photos.map(photo => (
          <Photo 
            onExpand={onSelectedPhoto}
            key={photo.id} photo={photo}
          />
        ))}
      </PhotosContainer>
    </div>
  )
}

export default Photos
