import {Component} from 'react'
import {
  MainContainer,
  Heading,
  Label,
  ButtonsContainer,
  GenerateButton,
  ColorValuesContainer,
  ColorInputsContainer,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const directions = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeDirection: directions[0].value,
    color1: '#8ae323',
    color2: '#014f7b',
    gradientStyle: `to ${directions[0].value}, #8ae323, #014f7b`,
  }

  updateColor1 = e => this.setState({color1: e.target.value})
  updateColor2 = e => this.setState({color2: e.target.value})

  updateDirection = value => this.setState({activeDirection: value})

  generateGradient = () => {
    const {activeDirection, color1, color2} = this.state
    this.setState({
      gradientStyle: `to ${activeDirection}, ${color1}, ${color2}`,
    })
  }

  render() {
    const {activeDirection, color1, color2, gradientStyle} = this.state

    return (
      <MainContainer
        gradientValue={gradientStyle}
        data-testid="gradientGenerator"
      >
        <Heading>🎨 CSS Gradient Generator</Heading>
        <Label>Select Direction</Label>
        <ButtonsContainer>
          {directions.map(item => (
            <GradientDirectionItem
              key={item.directionId}
              gradientButtonDetails={item}
              onChangeDirection={this.updateDirection}
              isActive={item.value === activeDirection}
            />
          ))}
        </ButtonsContainer>
        <Label>Choose Colors</Label>
        <ColorValuesContainer>
          <Label>{color1}</Label>
          <Label>{color2}</Label>
        </ColorValuesContainer>
        <ColorInputsContainer>
          <input type="color" value={color1} onChange={this.updateColor1} />
          <input type="color" value={color2} onChange={this.updateColor2} />
        </ColorInputsContainer>
        <GenerateButton type="button" onClick={this.generateGradient}>
          Generate
        </GenerateButton>
      </MainContainer>
    )
  }
}

export default GradientGenerator
