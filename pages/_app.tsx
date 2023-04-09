import React from 'react';
import { AppProps } from 'next/app';
import '../democracy-ai-poc/style.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;