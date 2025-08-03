import {DirectionButton, DirectionItem} from './styledComponents'

const GradientDirectionItem = ({
  gradientButtonDetails,
  onChangeDirection,
  isActive,
}) => {
  const {displayText, value} = gradientButtonDetails

  const handleClick = () => onChangeDirection(value)

  return (
    <DirectionItem>
      <DirectionButton type="button" active={isActive} onClick={handleClick}>
        {displayText}
      </DirectionButton>
    </DirectionItem>
  )
}

export default GradientDirectionItem
