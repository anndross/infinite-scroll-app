import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app'
import { client } from "../ApolloClient/client";
import '@/styles/globals.css'
import { ThemeProvider } from 'styled-components';
import { theme } from '@/themes';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ThemeProvider>
  )
}
