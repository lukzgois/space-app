import { useEffect, useState } from 'react'
import GlobalStyles from './components/GlobalStyles'
import styled from "styled-components"
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Banner from './components/Banner'
import BannerImage from './assets/banner.png'
import Gallery from './components/Gallery'
import photosJson from './fotos.json'
import PhotoModal from './components/Gallery/PhotoModal'
import Footer from './components/Footer'

const Background = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

const AppContainer = styled.div`
  padding: 24px;
`

const MainContainer = styled.main`
  margin: 24px 0;
`

const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1
`

function App() {
  const [photos, setPhotos] = useState(photosJson)
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTag, setSelectedTag] = useState({ id: 0})

  const onToggleFavPhoto = (favPhoto) => {
    if (favPhoto.id === selectedPhoto?.id) {
      setSelectedPhoto({
        ...selectedPhoto,
        favorite: !selectedPhoto.favorite
      })
    }

    setPhotos(photos.map(photo => ({
      ...photo,
      favorite: photo.id === favPhoto.id ? !photo.favorite : photo.favorite
    })))
  }

  useEffect(() => {
    const isPhotoVisible = (photo) => {
      const bySearchTerm = !searchTerm || photo.title.toLowerCase().startsWith(searchTerm.toLowerCase())
      const byTag = (!selectedTag || selectedTag.id === 0) || photo.tagId === selectedTag.id

      return bySearchTerm && byTag
    }

    const filteredPhotos = photos.map(photo => ({
      ...photo,
      isVisible: isPhotoVisible(photo)
    }))
    setPhotos(filteredPhotos)
  }, [searchTerm, selectedTag])

  return (

    <Background>
      <GlobalStyles />

      <AppContainer>
        <Header
          searchTerm={searchTerm}
          onSearch={term => setSearchTerm(term)}
        />

        <MainContainer>
          <ContentContainer>
            <Banner 
              text="A galeria mais completa de fotos do espaço!"
              background={BannerImage}
            />

            <Gallery 
              photos={photos} 
              onSelectedPhoto={photo => setSelectedPhoto(photo)}
              onSelectTag={tag => setSelectedTag(tag)}
              selectedTag={selectedTag}
              onToggleFavPhoto={onToggleFavPhoto}
            />
          </ContentContainer>
        </MainContainer>
      </AppContainer>

      <Footer />

      <PhotoModal 
        selectedPhoto={selectedPhoto}
        onClose={() => setSelectedPhoto(null)} 
        onToggleFavPhoto={onToggleFavPhoto}
      />
    </Background>
  )
}

export default App
