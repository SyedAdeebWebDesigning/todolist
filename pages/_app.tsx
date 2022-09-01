import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Todo List</title>
				<link rel="icon" href="/logo.png" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
