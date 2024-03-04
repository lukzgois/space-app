import styled from "styled-components"
import Photo from "../Photo"
import Title from "@components/Title"
import { mediaQuery } from "@components/GlobalStyles/breakpoints"

const PhotosContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-top: 32px;

  ${mediaQuery.md`
    grid-template-columns: 1fr 1fr
  `}
`

const PhotoList = ({photos = [], onSelectedPhoto, onToggleFavPhoto}) => {
  return (
    <div>
      <Title>Navegue pela galeria</Title>

      <PhotosContainer>
        {photos.map(photo => {
          if (!photo.isVisible) return;

          return <Photo 
            onExpand={onSelectedPhoto}
            onToggleFavPhoto={onToggleFavPhoto}
            key={photo.id} photo={photo}
          />
        })}
      </PhotosContainer>
    </div>
  )
}

export default PhotoList
