import type { AppProps } from 'next/app'
import { GlobalStyle } from '@/styles/global'
import { useRouter } from 'next/router';
import { Fragment } from 'react';
// import { ThemeProvider } from '@mui/material'
// import { Theme } from '@/styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <Fragment>
      {/* <ThemeProvider theme={Theme}> */}
      <GlobalStyle />
      <Component key={router.asPath} {...pageProps} />
      {/* </ThemeProvider> */}
    </Fragment>
  )
}
