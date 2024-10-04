import { ChakraProvider } from "@chakra-ui/react";
import { LoginPage } from "../src/components/pages/LoginPage";
import theme from "./theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <LoginPage />
    </ChakraProvider>
  );
}

export default App;
