import styled from "styled-components"
import search from './search.png'

const StyledContainer = styled.div`
  position: relative;
  display: inline-block;
`

const StyledInput = styled.input`
  width: 612px;
  height: 56px;
  border-radius: 10px;
  border: 2px solid #C98CF1;
  padding: 12px 16px;
  background: transparent;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  color: #D9D9D9;
  box-sizing: border-box;

  &::placeholder {
    color: #D9D9D9;
    opacity: .7
  }
`

const SearchIcon = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 38px;
  height: 38px;
`

const SearchInput = (props) => {
  return (
    <StyledContainer>
      <StyledInput placeholder="O que você procura?" {...props} />
      <SearchIcon src={search} alt="Ícone de lupa" />
    </StyledContainer>
  )

}

export default SearchInput
