import styled from "styled-components"

const StyledDiv = styled.div`
  background-image: ${ props => `url(${props.$background})` };
  min-height: 140px;
  border-radius: 20px;
  background-size: cover;
  background-position-x: -25px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 0 24px;
`

const StyledTitle = styled.h1`
  font-size: 24px;
  line-height: 28px;
  color: white;
  font-weight: 400;
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
