import '../styles/globals.css'
import { AppProps } from 'next/app'
import { wrapper } from '../store'

const App = ({
  Component,
  pageProps
}: AppProps) => <Component {...pageProps} />

export default wrapper.withRedux(App)