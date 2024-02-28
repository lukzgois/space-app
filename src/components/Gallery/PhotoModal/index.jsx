import styled from "styled-components"
import Photo from "../Photo"
import IconButton from "../../IconButton"

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
  width: 1156px;
  display: flex;
  justify-content: center;
  top: 200px;
  border: none;
  padding: 0;
  background-color: transparent;

  form {
    button {
      position: relative;
      top: 20px;
      right: 45px;
    }
  }
`

const PhotoModal = ({ selectedPhoto, onClose }) => {
  return (
    <>
      {selectedPhoto && <>
        <Overlay>
          <StyledDialog open={!!selectedPhoto} onClose={onClose}>
            <Photo photo={selectedPhoto} expanded={true} />

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

export default PhotoModal
