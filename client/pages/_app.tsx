import { AppProps } from 'next/app';
import MainProvider from 'providers/MainProvider';

import '@/assets/styles/globals.css';

function App({ Component, pageProps }: AppProps) {
	return (
		<MainProvider Component={Component}>
			<Component {...pageProps} />
		</MainProvider>
	);
}

export default App;
