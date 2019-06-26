import styled, { css } from 'styled-components'
import { color, colorScheme, fontSizing, flex } from '../DesignComponents/theme'

export const ScoreboardContainer = styled.div`
  width: 100%;
  max-width: 600px;
  ${flex('column', 'center', 'center')};
  margin: 10px auto;
  border: 1px solid ${colorScheme.defaultBorderColor};
  border-radius: 5px;
`

export const StatContainer = styled.div`
  width: 90%;
  ${flex('row','center','space-between')}

`

export const StatWrapper = styled.div`
  width: 100%;
  text-align: center;
`

export const StatCategory = styled.div`
  margin: 5px 0;
  font-size: ${fontSizing.s}
  text-transform: uppercase;
`

export const StatDisplay = styled.div`
  margin: 5px 0;
  font-size: ${fontSizing.m}
  ${props => props.strike &&
    css`
      color: ${color.danger};
  `}

  ${props => props.ball &&
    css`
      color: ${color.accent};
  `}
`

export const DashBoardContainer = styled.div`
  width: 100%;
  max-width: 600px;
  ${flex('row','center','space-between')};
  margin: 10px auto;

  button {
    width: 150px;
  }
`