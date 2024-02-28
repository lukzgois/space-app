import styled from "styled-components"
import IconButton from "../../IconButton"

const StyledFigure = styled.figure`
  margin: 0;
  display: flex;
  flex-direction: column;
  width: ${props => props.$expanded ? '90%' : '448px'};

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

    h3,h4 {
      margin: 0;
    }

    h3 {
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
    }
      
    h4 {
      font-size: 16px;
      line-height: 19px;
    }
  }
`

const ButtonsContainer = styled.div`
  display: flex;
  gap: 24px;
`

const Photo = ({ photo, expanded = false, onExpand }) => {
  const { path, title, source } = photo

  return (
    <StyledFigure $expanded={expanded}>
      <img src={path} alt={title} />
      <figcaption>
        <div>
          <h3>{title}</h3>
          <h4>{source}</h4>
        </div>

        <ButtonsContainer>
          <IconButton>
            <img src="/icons/favorito.png" alt="Icone de favorito" />
          </IconButton>

          <IconButton onClick={ () => onExpand(photo) }>
            {!expanded && <img src="/icons/expandir.png" alt="Icone de expandir" />}
          </IconButton>
        </ButtonsContainer>
      </figcaption>
    </StyledFigure>
  )
}

export default Photo
