import styled from 'styled-components'

export const lineThickness = '1px'
export const gridUnit = '4px'
export const gridWidth = '960px'
export const gridHeight = '960px'
export const gridColumns = '240'
export const gridVisualColor = 'hsla(204, 80%, 72%, 0.25)'
export const ephemeralColor = 'hsla(204, 80%, 72%, 0.75)'
export const transitionSpeedDefault = "0.4s"

export const LabelSecondary = styled.div`
  font-size: 5px;
  text-align: center;
`

export const colors = {
  "yellow": "#ebd532",
  "red": "#9b2f23",
  "blue": "#4163b6",
  "lightgrey": "#dddddb",
  "white": "#f2f3ee",
}

export const EphemeralRectangle = styled.div`
  z-index: 4;
  background: ${ephemeralColor};
`

export const Title = styled.h1`
  font-size: 1em;
  padding: 1em 0;
`

// A container that establishes some CSS variables
//
export const Container = styled.div`
  position: relative;
  cursor: crosshair;
  background-color: ${colors.white};

  /* Settings */
  & {
    --columns: ;
    --baseline: ${gridUnit};
    --line-thickness: ${lineThickness};
    --visual-grid-color: ${gridVisualColor};
    --container-height: ${gridWidth};
    --container-width: ${gridHeight};
  }
`

// The grid container
// Immediate children are grid items ... this is used multiple times to achieve overlaying grids
export const GridPrimary = styled.div`
  opacity: 1;
  display: grid;
  grid-template-columns: repeat(${gridColumns}, ${gridUnit});
  grid-template-rows: repeat(${gridColumns}, ${gridUnit});
  width: ${gridWidth};
  height: ${gridColumns};

  & > div {
    /* Toggleable grid items */
    transition: opacity ${transitionSpeedDefault};
    visibility: ${props => (props.visibleGridItems ? 'visible' : 'hidden')};

    /* Toggleable ebugging marks on grid items */
    &::before,
    &::after {
      display: block;
      visibility: visible;
      position: absolute;
      font-size: 5px;
      color: aqua;
      transition: opacity ${transitionSpeedDefault};
      opacity: ${props => (props.visibleMarks ? '1' : '0')};
    }
  }
`

const rowGradient = `
  to bottom,
  ${ephemeralColor},
  transparent ${lineThickness},
  transparent ${gridUnit}
`

const columnGradient = `
  to right,
  ${ephemeralColor},
  transparent ${lineThickness},
  transparent ${gridUnit}
`

// A CSS overlay that mimics the grid rows and columns
//  using a repeating background image
//
export const GridVisual = styled.div`
  position: absolute;
  width: ${gridWidth};
  height: ${gridHeight};
  opacity: ${props => (props.visibleGrid ? '1' : '0')};
  transition: opacity ${transitionSpeedDefault};

  background-image: 
    repeating-linear-gradient(${columnGradient}),
    repeating-linear-gradient(${rowGradient});

  background-size: 100% 100%;
  background-position: 0;
  pointer-events: none;

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    min-height: 100%;
    content: '';
`

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
