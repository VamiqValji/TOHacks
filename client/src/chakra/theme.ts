import { extendTheme } from "@chakra-ui/react"
import styles from "./styles";

const theme = extendTheme(
    { 
      colors: {
        brand: {
          900: "#065666", 
          800: "#086F83",
          700: "#0987A0", 
          600: "#00A3C4",
          500: "#00B5D8",
          400: "#0BC5EA",
          300: "#76E4F7",
          200: "#9DECF9",
          100: "#C4F1F9",
          50: "#EDFDFD",
        },
      },
      config: { 
          initialColorMode: "dark",
          // useSystemColorMode: true
      },
      styles
    },
  );

export default theme;