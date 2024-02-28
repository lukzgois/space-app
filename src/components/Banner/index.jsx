import styled from "styled-components"

const StyledDiv = styled.div`
  background-image: ${ props => `url(${props.$background})` };
  min-height: 328px;
  max-width: 100%;
  border-radius: 20px;
  background-size: cover;
  display: flex;
  flex-grow: 1;
  align-items: center;
  padding-top: 92px;
  padding-bottom: 92px;
  padding-left: 64px;
  box-sizing: border-box;
`

const StyledTitle = styled.h1`
  font-size: 40px;
  line-height: 48px;
  color: white;
  font-weight: 400;
  max-width: 300px;
  margin: 0;
`

const Banner = ({ text, background }) => {
  return (
    <StyledDiv $background={background}>
      <StyledTitle>{text}</StyledTitle>
    </StyledDiv>
  )
}

export default Banner
