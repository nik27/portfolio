import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const fonts = {
  heading: "Atkinson Hyperlegible",
  body: "Atkinson Hyperlegible",
};

const config = {
  initialColorMode: "systen",
  useSystemColorMode: true,
};

export const theme = extendTheme({ colors, config, fonts });
