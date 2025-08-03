import styled from 'styled-components'

export const DirectionItem = styled.li`
  list-style: none;
  margin: 0 8px;
`

export const DirectionButton = styled.button`
  padding: 10px 16px;
  font-weight: 500;
  color: ${props => (props.active ? '#ffffff' : '#000000')};
  background-color: ${props => (props.active ? '#00c9b7' : '#e0e0e0')};
  border: none;
  border-radius: 8px;
  opacity: ${props => (props.active ? 1 : 0.6)};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
    transform: scale(1.05);
  }
`
