import { MoralisProvider } from "react-moralis";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  /* Moralis init code */
  const serverUrl = "https://6sl4jvicbndm.usemoralis.com:2053/server";
  const appId = "b8sad1sUnAXXPldmmxKDBzjTz5P16MvmLI2Sf9oO";

  return (
    <MoralisProvider appId={appId} serverUrl={serverUrl}>
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
