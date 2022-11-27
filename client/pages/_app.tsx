import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../src/styles/theme';
import { Auth0Provider } from '@auth0/auth0-react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Auth0Provider
      domain="dev-gkk0vqc0wo5m83rz.us.auth0.com"
      clientId="YgYP7zTDgej4LZDP1t6RKHzhI5wYGuK6"
      redirectUri="http://localhost:3000"
    >
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Auth0Provider>
  );
}
