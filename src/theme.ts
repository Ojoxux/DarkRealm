import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      500: "#8E24AA", // メインの紫色
      600: "#7B1FA2",
    },
    gray: {
      800: "#121212", // 背景色
      700: "#282828", // コンポーネント背景
      100: "#B3B3B3", // 薄いテキスト
    },
  },
  styles: {
    global: {
      body: {
        bg: "gray.800",
        color: "white",
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "full",
      },
    },
    Input: {
      baseStyle: {
        field: {
          borderRadius: "full",
        },
      },
    },
  },
});

export default theme;
