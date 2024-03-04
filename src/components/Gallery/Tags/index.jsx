import styled from 'styled-components'
import Tag from './Tag'
import tags from './tags.json'
import { mediaQuery } from '../../GlobalStyles/breakpoints'
import { useContext } from 'react'
import { PhotoContext } from '@/contexts/PhotoContext'

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${mediaQuery.md`
    flex-direction: row;
  `}
`

const TagsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 24px;
  gap: 6px;

  ${mediaQuery.md`
    margin-top: 0;
    gap: 16px;
  `}
`

const StyledText = styled.p`
  color:#D9D9D9;
  font-size: 20px;
  line-height: 24px;
  margin: 0;

  ${mediaQuery.md`
    margin-right: 24px;
    font-size: 24px;
    line-height: 28px;
  `}
`

const Tags = () => {
  const { selectedTag, setSelectedTag } = useContext(PhotoContext)

  return (
    <StyledDiv>
      <StyledText>Busque por tags:</StyledText>

      <TagsContainer>
        {tags.map(tag => (
          <Tag 
            key={tag.id}
            onClick={() => setSelectedTag(tag)}
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
