import styled from "styled-components"
import PropType from 'prop-types'

const StyledLi = styled.li`
  font-size: 24px;
  line-height: 24px;
  padding-bottom: 30px;
  cursor: pointer;
  color: ${ props => props.$active ? '#7B78E5' : '#D9D9D9' };
  font-weight: ${ props => props.$active ? 'bold' : 'normal' };
  display: flex;
  align-items: center;
  gap: 22px;

  &:last-child {
    padding-bottom: 0;
  }
`

const NavItem = ({ 
  children,
  icon,
  active = false 
}) => {
  const activeIcon = `/icons/${icon}-ativo.png`
  const inactiveIcon = `/icons/${icon}-inativo.png`

  return (
    <StyledLi $active={active}>
      <img src={active ? activeIcon : inactiveIcon} />

      {children}
    </StyledLi>
  )
}

NavItem.propTypes = {
  children: PropType.node.isRequired,
  icon: PropType.string.isRequired,
  active: PropType.bool,
}

export default NavItem
