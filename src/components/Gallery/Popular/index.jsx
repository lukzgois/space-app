import photos from './popular.json'
import Title from "../../Title"
import styled from 'styled-components'
import { mediaQuery } from '../../GlobalStyles/breakpoints'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 32px;
`

const Image = styled.img`
  border-radius: 20px;
  object-fit: cover;

  ${mediaQuery.md`
    height: 158px;
  `}
`

const StyledButton = styled.button`
  border: 2px #7B78E5 solid;
  background: transparent;
  color: #FFF;
  font-size: 20px;
  line-height: 24px;
  border-radius: 10px;
  height: 56px;
  width: 100%;
  margin-top: 24px;
  cursor: pointer;
`

const Popular = () => {
  return (
    <div>
      <Title $align="center">Populares</Title>

      <Container>
        {photos.map(photo => (
          <Image key={photo.id} src={photo.path} alt={photo.alt} />
        ))}
      </Container>

      <StyledButton>Ver Mais</StyledButton>
    </div>
  )
}

export default Popular
