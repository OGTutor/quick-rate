import { AppProps } from 'next/app';

import '@/assets/styles/globals.css';

function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default App;
