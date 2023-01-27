import type { AppProps } from 'next/app'
import { GlobalStyle } from '@/styles/global'
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <div className="container">
      <GlobalStyle />
      <Component key={router.asPath} {...pageProps} />
    </div>
  )
}
