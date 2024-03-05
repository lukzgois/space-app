import styled from "styled-components"
import Photo from "@components/Gallery/Photos/Photo"
import IconButton from "@components/IconButton"
import { mediaQuery } from "@components/GlobalStyles/breakpoints"
import PropType from 'prop-types'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .8)
`

const StyledDialog = styled.dialog`
  position: absolute;
  top: 50%;
  bottom: 50%;
  border: none;
  padding: 0;
  background-color: transparent;
  width: 85%;

  ${mediaQuery.md`
    max-width: 900px;
  `}

  form {
    position: absolute;
    top: 20px;
    right: 20px;
  }
`

const PhotoModal = ({photo, onToggleFavPhoto, onClose}) => {
  return (
    <>
      {photo && <>
        <Overlay>
          <StyledDialog open={!!photo} onClose={onClose}>
            <Photo 
              photo={photo} 
              expanded={true}
              onToggleFavPhoto={onToggleFavPhoto}
            />

            <form method="dialog">
              <IconButton>
                <img src="/icons/fechar.png" alt="Fechar a visualização da foto" />
              </IconButton>
            </form>
          </StyledDialog>
        </Overlay>
      </>}
    </>
  )
}

PhotoModal.propTypes = {
  photo: PropType.object,
  onToggleFavPhoto: PropType.func.isRequired,
  onClose: PropType.func.isRequired,
}

export default PhotoModal
