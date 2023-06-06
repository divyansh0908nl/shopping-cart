import type { AppProps } from "next/app";
import { ReactQueryProvider } from "@jadoo/services";

import "../../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReactQueryProvider>
  <Component {...pageProps} />;
  </ReactQueryProvider>
  )
}

export default MyApp;