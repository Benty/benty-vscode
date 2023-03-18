import chroma from "chroma-js";

const colors = {
  green: "#0bd69f",
  lightgreen: "#80FF82",
  lime: "#b1ff03",
  cyan: "#89ccf7",
  blue: "#0093fe",
  purple: "#c678dd",
  lightpurple: "#DE98DC",
  red: "#e62c3a",
  darkred: "#a2000d",
  pink: "#FF628C",
  orange: "#ffc600",
  darkorange: "#FF9D00",
  lightyellow: "#ffed50",
  yellow: "#ebff00",
  gold: "#FFDD00",
  white: "#FFFFFF",
}

const darkDefault = {
  base: '#0C1A23',
  surface: '#000D16',
  overlay: '#1A2B3C',
  border: '#121F2A',
  muted: '#818891',
  subtle: '#818891',
  text: '#FFFFFF',
  yellow: colors.yellow,
  green: colors.green,
  lime: colors.lime,
  lightgreen: colors.limegreen,
  gold: colors.gold,
  foam: "#9ccfd8",
  blue: colors.blue,
  cyan: colors.cyan,
  purple: colors.purple,
  pink: colors.pink,
  highlightLow: "#21374A",
  highlightMed: "#2C4863",
  highlightHigh: "#000",
}

const palette = {
  variants: {
    darkDefault,
  },
  roles: {
    base: {
      darkDefault: darkDefault.base
    },
    surface: {
      darkDefault: darkDefault.surface
    },
    overlay: {
      darkDefault: darkDefault.overlay
    },
    border: {
      darkDefault: darkDefault.border
    },
    muted: {
      darkDefault: darkDefault.muted
    },
    subtle: {
      darkDefault: darkDefault.subtle
    },
    text: {
      darkDefault: darkDefault.text
    },
    yellow: {
      darkDefault: darkDefault.yellow
    },
    green: {
      darkDefault: darkDefault.green
    },
    lime: {
      darkDefault: darkDefault.lime
    },
    lightgreen: {
      darkDefault: darkDefault.lightgreen
    },
    gold: {
      darkDefault: darkDefault.gold
    },
    foam: {
      darkDefault: darkDefault.foam
    },
    blue: {
      darkDefault: darkDefault.blue
    },
    cyan: {
      darkDefault: darkDefault.cyan
    },
    purple: {
      darkDefault: darkDefault.purple
    },
    pink: {
      darkDefault: darkDefault.pink
    },
    highlightLow: {
      darkDefault: darkDefault.highlightLow
    },
    highlightMed: {
      darkDefault: darkDefault.highlightMed
    },
    highlightHigh: {
      darkDefault: darkDefault.highlightHigh
    },
  }
}

export const { variants, roles } = palette
export default palette