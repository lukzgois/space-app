import { useState } from 'react'
import GlobalStyles from './components/GlobalStyles'
import styled from "styled-components"
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Banner from './components/Banner'
import BannerImage from './assets/banner.png'
import Gallery from './components/Gallery'
import photosJson from './fotos.json'
import PhotoModal from './components/Gallery/PhotoModal'

const Background = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`

const MainContainer = styled.main`
  display: flex;
  gap: 24px
`

const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1
`

function App() {
  const [photos, setPhotos] = useState(photosJson)
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  const onToggleFavPhoto = (favPhoto) => {
    if (favPhoto.id === selectedPhoto?.id) {
      setSelectedPhoto({
        ...selectedPhoto,
        favorite: true
      })
    }

    setPhotos(photos.map(photo => ({
      ...photo,
      favorite: photo.id === favPhoto.id ? !photo.favorite : photo.favorite
    })))
  }

  return (
    <Background>
      <GlobalStyles />

      <AppContainer>
        <Header />
        <MainContainer>
          <Sidebar />
          <ContentContainer>
            <Banner 
              text="A galeria mais completa de fotos do espaço!"
              background={BannerImage}
            />

            <Gallery 
              photos={photos} 
              onSelectedPhoto={photo => setSelectedPhoto(photo)}
              onToggleFavPhoto={onToggleFavPhoto}
            />
          </ContentContainer>
        </MainContainer>
      </AppContainer>

      <PhotoModal 
        selectedPhoto={selectedPhoto}
        onClose={() => setSelectedPhoto(null)} 
        onToggleFavPhoto={onToggleFavPhoto}
      />
    </Background>
  )
}

export default App
