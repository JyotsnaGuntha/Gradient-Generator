import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  padding: 40px 20px;
  background-image: linear-gradient(${props => props.gradientValue});
  transition: background-image 0.4s ease;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-size: 2rem;
  margin-bottom: 20px;
`

export const Label = styled.p`
  color: #ffffff;
  margin-top: 20px;
  font-size: 1rem;
`

export const ButtonsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 30px;
`

export const ColorInputsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
`

export const GenerateButton = styled.button`
  background-color: #00c9b7;
  color: #000;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`

export const ColorValuesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin: 10px 0;
`
