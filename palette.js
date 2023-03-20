// import chroma from "chroma-js";

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
  base: '#21374A',
  panel: '#1A2B3C',
  toolbar: '#0C1A23',
  overlay: '#1A2B3C',
  border: '#121F2A',
  muted: '#818891',
  subtle: '#818891',
  text: '#FFFFFF',
  yellow: colors.yellow,
  green: colors.green,
  lime: colors.lime,
  lightgreen: colors.lightgreen,
  gold: colors.gold,
  foam: "#9ccfd8",
  blue: colors.blue,
  cyan: colors.cyan,
  purple: colors.purple,
  pink: colors.pink,
  orange: colors.orange,
  highlightLow: "#21374A",
  highlightMed: "#2C4863",
  highlightHigh: "#324F6E",
}

const dark = {
  base: '#0C1A23',
  panel: '#000D16',
  toolbar: '#000000',
  overlay: '#000D16',
  border: '#1F2428',
  muted: '#818891',
  subtle: '#818891',
  text: '#FFFFFF',
  yellow: colors.yellow,
  green: colors.green,
  lime: colors.lime,
  lightgreen: colors.lightgreen,
  gold: colors.gold,
  foam: "#9ccfd8",
  blue: colors.blue,
  cyan: colors.cyan,
  purple: colors.purple,
  pink: colors.pink,
  orange: colors.orange,
  highlightLow: "#0F212D",
  highlightMed: "#0E202A",
  highlightHigh: "#1F4662",
}

const palette = {
  base: {
    darkDefault: darkDefault.base,
    dark: dark.base,
  },
  panel: {
    darkDefault: darkDefault.panel,
    dark: dark.panel
  },
  toolbar: {
    darkDefault: darkDefault.toolbar,
    dark: dark.toolbar
  },
  overlay: {
    darkDefault: darkDefault.overlay,
    dark: dark.overlay
  },
  border: {
    darkDefault: darkDefault.border,
    dark: dark.border
  },
  muted: {
    darkDefault: darkDefault.muted,
    dark: dark.muted
  },
  subtle: {
    darkDefault: darkDefault.subtle,
    dark: dark.subtle
  },
  text: {
    darkDefault: darkDefault.text,
    dark: dark.text
  },
  yellow: {
    darkDefault: darkDefault.yellow,
    dark: dark.yellow
  },
  green: {
    darkDefault: darkDefault.green,
    dark: dark.green
  },
  lime: {
    darkDefault: darkDefault.lime,
    dark: dark.lime
  },
  lightgreen: {
    darkDefault: darkDefault.lightgreen,
    dark: dark.lightgreen
  },
  gold: {
    darkDefault: darkDefault.gold,
    dark: dark.gold
  },
  foam: {
    darkDefault: darkDefault.foam,
    dark: dark.foam
  },
  blue: {
    darkDefault: darkDefault.blue,
    dark: dark.blue
  },
  cyan: {
    darkDefault: darkDefault.cyan,
    dark: dark.cyan
  },
  purple: {
    darkDefault: darkDefault.purple,
    dark: dark.purple
  },
  pink: {
    darkDefault: darkDefault.pink,
    dark: dark.pink
  },
  orange: {
    darkDefault: darkDefault.orange,
    dark: dark.orange
  },
  highlightLow: {
    darkDefault: darkDefault.highlightLow,
    dark: dark.highlightLow
  },
  highlightMed: {
    darkDefault: darkDefault.highlightMed,
    dark: dark.highlightMed
  },
  highlightHigh: {
    darkDefault: darkDefault.highlightHigh,
    dark: dark.highlightHigh
  },
}

export default palette