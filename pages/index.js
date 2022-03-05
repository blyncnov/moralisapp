import { useEffect } from "react";
import Head from "next/head";

export default function Home() {
  useEffect(() => {
    if (window.etherum) {
      alert("Metamask isn't installed. Please install Metamask to continue.");
    } else {
      alert("Metamask is installed. Press okay to continue.");
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Moralis practice dapps</title>
        <meta
          name="description"
          content="Created by blyncnov using next app and Moralis"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <a href="./login">Go to Login Page</a>
    </div>
  );
}
