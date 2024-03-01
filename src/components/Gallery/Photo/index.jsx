import styled from "styled-components"
import IconButton from "../../IconButton"
import { mediaQuery } from "../../GlobalStyles/breakpoints"

const StyledFigure = styled.figure`
  margin: 0;
  display: flex;
  flex-direction: column;
  width: 100%;

  ${mediaQuery.md`
    min-width: 246px;
    flex: 1;
  `}

  & > img {
    max-width: 100%;
    border-radius: 20px 20px 0 0;
  }

  figcaption {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #001634;
    border-radius: 0 0 20px 20px;
    padding: 0 16px;
    color: #FFF;
    gap: 12px;

    h3,h4 {
      margin: 0;
    }

    h3 {
      font-weight: bold;
      font-size: 16px;
      line-height: 20px;
    }
      
    h4 {
      font-size: 14px;
      line-height: 17px;
    }
  }
`

const ButtonsContainer = styled.div`
  display: flex;
  gap: 24px;
`

const Photo = ({ photo, expanded = false, onExpand, onToggleFavPhoto }) => {
  const { path, title, source } = photo
  const favIconImage = !!photo.favorite ? '/icons/favorito-ativo.png' : '/icons/favorito.png'

  return (
    <StyledFigure>
      <img src={path} alt={title} />
      <figcaption>
        <div>
          <h3>{title}</h3>
          <h4>{source}</h4>
        </div>

        <ButtonsContainer>
          <IconButton onClick={() => onToggleFavPhoto(photo)}>
            <img 
              src={favIconImage}
              alt="Icone de favorito" 
              width="16"
              height="16"
            />
          </IconButton>

          {!expanded &&
          <IconButton onClick={ () => onExpand(photo) }>
            <img
              src="/icons/expandir.png" 
              alt="Icone de expandir" 
              width="16"
              height="16"
            />
          </IconButton>}
        </ButtonsContainer>
      </figcaption>
    </StyledFigure>
  )
}

export default Photo
