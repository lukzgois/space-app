import { css } from "styled-components"

export const size = {
  xs: '360px',
  md: '744px',
  lg: '1024px',
  xl: '1440px',
  xxl: '1920px',
}

export const device = {
  md: `(min-width: ${size.md})`,
  lg: `(min-width: ${size.lg})`,
  xl: `(min-width: ${size.xl})`,
  xxl: `(min-width: ${size.xxl})`,
}

export const mediaQuery = {
  md: (...args) => css`
    @media screen and ${device.md} {
      ${css(args)};
    }
  `
}
