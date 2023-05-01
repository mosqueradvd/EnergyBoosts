// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import { AppContextProvider } from "./ctx";

function MyApp({ Component, pageProps }: any) {
  return (
    <AppContextProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </AppContextProvider>
  );
}

export default MyApp;
