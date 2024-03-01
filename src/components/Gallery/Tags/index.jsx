import styled from 'styled-components'
import Tag from './Tag'
import tags from './tags.json'

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TagsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 24px;
  gap: 6px
`

const StyledText = styled.p`
  color:#D9D9D9;
  font-size: 20px;
  line-height: 24px;
  margin: 0
`

const Tags = ({selectedTag, onSelectTag}) => {
  return (
    <StyledDiv>
      <StyledText>Busque por tags:</StyledText>

      <TagsContainer>
        {tags.map(tag => (
          <Tag 
            key={tag.id}
            onClick={() => onSelectTag(tag)}
            active={selectedTag.id == tag.id}
          >
            {tag.titulo}
          </Tag>
        ))}
      </TagsContainer>
    </StyledDiv>
  )
}

export default Tags
