import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import 'typeface-spectral' // eslint-disable-line

import theme from 'theme'

const { space } = theme

export const Row = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: ${props =>
    typeof props.flexWrap !== 'undefined' ? props.flexWrap : 'nowrap'};

  & > * {
    margin-right: 1rem;
    &:last-child {
      margin-right: 0;
    }
  }

  ${props =>
    props.columnOnMobile &&
    `@media all and (max-width: ${theme.breakpoints[1]}) {
    flex-direction: column;
    align-items: flex-start;
    & > * {
      width: 100%;
    }
  }

  `}
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const FinePrint = styled.div`
  font-size: 0.8em;
  color: ${props => (props.color ? props.color : theme.colors.blacks[8])};
`

export const SectionTitle = styled.div`
  font-size: ${theme.fontSize.small};
  text-transform: uppercase;
  position: relative;

  margin: 4rem 0;
`

export const GlobalStyle = createGlobalStyle`

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html,
  body {
    padding: 0;
    margin: 0;
  }

  ul {list-style-type: none; padding: 0;}
  li {
    padding: 0.5rem 0;
    margin: 0;
    a {
      font-weight: 600;
    }
  }

  ::selection {
    color: ${theme.colors.bg};
    background: ${theme.colors.primary};
  }

  html {
    /* font-family: ${theme.fontFamily.sansSerif}; */
    font-family: ${theme.fontFamily.sans};
    
    h1 {
      font-family: ${theme.fontFamily.serif};
      font-size: 2rem;
      font-weight: 300;
    }
    h2 {
      font-size: 2.441rem;
    }
    h3 {
      font-size: 1.953rem;
    }
    h4 {
      font-size: 1.563rem;
    }
    h5 {
      font-size: 1.25rem;
    }

    @media (max-width: ${theme.breakpoints.phone}) {
      font-size: 16px;
      h1 {
        font-size: 2.488rem;
      }
      h2 {
        font-size: 2.074rem;
      }
      h3 {
        font-size: 1.728rem;
      }
      h4 {
        font-size: 1.444rem;
      }
      h5 {
        font-size: 1.2rem;
      }
    }
  }

  body {
    background-color: ${theme.colors.cream};
    color: ${theme.colors.primary};
    font-family: ${theme.fontFamily.serif};
  }

  a {
    color: ${theme.colors.primary};
    text-decoration: none;
    transition: all ${theme.transitions.normal};
  }

  a:hover {
    color: ${theme.colors.primaryLight};
    text-decoration: underline;
  }  

  @media print {
    body {
      background-color: transparent!important;
    }
  }
`