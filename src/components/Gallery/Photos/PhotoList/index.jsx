import { useContext } from "react"
import styled from "styled-components"
import Photo from "../Photo"
import Title from "@components/Title"
import { mediaQuery } from "@components/GlobalStyles/breakpoints"
import { PhotoContext } from "@/contexts/PhotoContext"
import PhotoModal from "../PhotoModal"

const PhotosContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-top: 32px;

  ${mediaQuery.md`
    grid-template-columns: 1fr 1fr
  `}
`

const PhotoList = () => {
  const { photos, selectedPhoto, setSelectedPhoto, onToggleFavPhoto } = useContext(PhotoContext)

  return (
    <div>
      <Title>Navegue pela galeria</Title>

      <PhotosContainer>
        {photos.map(photo => {
          if (!photo.isVisible) return;

          return <Photo 
            key={photo.id} 
            photo={photo} 
            onToggleFavPhoto={onToggleFavPhoto}
            onExpand={setSelectedPhoto}
          />
        })}
      </PhotosContainer>

      <PhotoModal 
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
        onToggleFavPhoto={onToggleFavPhoto}
      />
    </div>
  )
}

export default PhotoList
