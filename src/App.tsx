import { ChakraProvider } from "@chakra-ui/react";
import { LoginPage } from "../src/components/pages/LoginPage";

function App() {
  return (
    <ChakraProvider>
      <LoginPage />
    </ChakraProvider>
  );
}

export default App;
