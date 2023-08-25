import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "Inter, sans-serif",
  },
  colors: {
    primary: "#00",
  },
  fontWeights: {
    normal: 500,
  },
  fontStyles: {
    normal: "normal",
  },
  lineHeights: {
    normal: "normal",
  },
});

export default theme;
