import type { AppProps } from 'next/app'
import { GlobalStyle } from '@/styles/global'
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { ThemeProvider } from '@mui/material'
import { Theme } from '@/theme/theme';
import OnePieceContextProvider from '@/global/Provider/context';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <Fragment>
      <ThemeProvider theme={Theme}>
        <OnePieceContextProvider>
      <GlobalStyle />
      <Component key={router.asPath} {...pageProps} />
      </OnePieceContextProvider>
      </ThemeProvider>
    </Fragment>
  )
}
