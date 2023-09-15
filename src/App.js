import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import MainPage from "./components/MainPage";

const App = () => {
  return (
    <ChakraProvider>
      <MainPage />
    </ChakraProvider>
  );
};

export default App;
