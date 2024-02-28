import { useState } from 'react'
import GlobalStyles from './components/GlobalStyles'
import styled from "styled-components"
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Banner from './components/Banner'
import BannerImage from './assets/banner.png'
import Gallery from './components/Gallery'
import photosJson from './fotos.json'

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
            <Gallery photos={photos} />
          </ContentContainer>
        </MainContainer>
      </AppContainer>
    </Background>
  )
}

export default App
