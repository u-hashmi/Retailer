const COLORS = {
  primary: "#007EA7",
  primaryDark: "#003249",
  secondary: "#003249",
  tertiary: "#80CED7" + "33",
  fadedWhite: "#fafafa",
  textMain: "#2e224a",
  textSecnd: "#7a7a7a",
  iconFaded: "white",
  shadowColor: "rgba(0, 0, 0, 0.12)",
  white: "#FFFFFF",
  borderColorGeneral: "rgba(0, 0, 0, 0.12)"
};

const GRADIENT = {
  primaryGradient: `linear-gradient(45deg, ${COLORS.primary}, ${COLORS.primaryDark})`,
  secondaryGradient: `linear-gradient(140deg, ${COLORS.primary}, ${COLORS.primaryDark})`
};

const TEXTSTYLES = {
  headingText: {
    fontSize: "28px",
    fontWeight: "bold"
  }
};

const CONSTS = {
  small: "5px",
  medium: "10px",
  large: "15px",
  XL: "20px",
  borderRadBase: "5px",
  borderGeneral: "1px solid rgba(0, 0, 0, 0.12)"
};

export { COLORS, TEXTSTYLES, CONSTS, GRADIENT };
