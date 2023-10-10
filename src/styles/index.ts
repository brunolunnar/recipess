import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
        brown100: '#E0CDA2',
        white:"#fff",
        green200:'#687E02',
        red:'#E04540',
        yellow200:'#DCC428'
    },
  },
});