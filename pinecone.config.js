// // Referenced from https://github.com/rose-pine/vscode/blob/main/pinecone.config.js

import { colorish, defineConfig } from 'pinecone-cli'

import paletteRoles from './palette.js'

const palette = {}

Object.keys(paletteRoles).map((role) => {
  const currentRole = paletteRoles[role];

  palette[role] = {
    darkDefault: currentRole.darkDefault,
    dark: currentRole.dark,
  }

  // Add translucent variations.
  palette[`${role}/50`] = {
    darkDefault: colorish(currentRole.darkDefault, 0.5),
    dark: colorish(currentRole.dark, 0.5),
  }
  palette[`${role}/15`] = {
    darkDefault: colorish(currentRole.darkDefault, 0.15),
    dark: colorish(currentRole.dark, 0.15),
  }
})

export default defineConfig({
  options: {
    source: './themes/_pinecone-color-theme.json',
    output: './themes',
    prefix: '$',
  },
  variants: {
    darkDefault: {
      name: 'Benty',
      type: 'dark',
    },
    dark: {
      name: 'Benty Dark',
      type: 'dark',
    },
  },
  colors: {
    shadow: colorish(palette.panel, 0.3),
    transparent: '#0000',

    onPrimary: palette.base,
    primary: palette.lightgreen,
    primaryHover: colorish(palette.lightgreen, 0.9),

    onSecondary: palette.base,
    secondary: palette.purple,
    secondaryHover: colorish(palette.purple, 0.9),

    ...palette,
  },
})