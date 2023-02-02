import type { AppProps } from 'next/app'
import { GlobalStyle } from '@/styles/global'
import { useRouter } from 'next/router';
import OnePieceContextProvider from '@/global/Provider/context';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <div className='container'>
      <OnePieceContextProvider>
      <GlobalStyle />
      <Component key={router.asPath} {...pageProps} />
      </OnePieceContextProvider>
    </div>
  )
}
