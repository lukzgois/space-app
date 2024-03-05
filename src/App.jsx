import GlobalStyles from './components/GlobalStyles'
import styled from "styled-components"
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Banner from './components/Banner'
import BannerImage from './assets/banner.png'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import { mediaQuery } from './components/GlobalStyles/breakpoints'
import { PhotoContextProvider } from '@/contexts/PhotoContext'

const Background = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

const AppContainer = styled.div`
  padding: 24px;

  ${mediaQuery.xl`
    max-width: 1440px;
    margin: 0 auto;
  `}
`

const MainContainer = styled.main`
  margin: 24px 0;

  ${mediaQuery.xl`
    display: flex;
    gap: 24px;
  `}
`

const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  ${mediaQuery.md`
    > div:first-child {
      display: flex;
      justify-content: space-between;
      gap: 24px;
    }
  `}

  ${mediaQuery.xl`
    > div > aside {
      display: none;
    }
  `}
`

const SidebarDesktopContainer = styled.section`
  display: none;

  ${mediaQuery.xl`
    display: block;
  `}
`

function App() {
  return (
    <Background>
      <GlobalStyles />

      <AppContainer>
        <PhotoContextProvider >
          <Header />

          <MainContainer>
            <SidebarDesktopContainer>
              <Sidebar />
            </SidebarDesktopContainer>

            <ContentContainer>
              <div>
                <Sidebar />

                <Banner 
                  text="A galeria mais completa de fotos do espaço!"
                  background={BannerImage}
                />
              </div>

              <Gallery />
            </ContentContainer>
          </MainContainer>
        </PhotoContextProvider>
      </AppContainer>

      <Footer />
    </Background>
  )
}

export default App
