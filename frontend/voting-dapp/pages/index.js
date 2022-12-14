import Head from "next/head";
import Image from "next/image";
import _App from "./_app";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Quadratic Voting Dapp for NFTs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <_App />
    </div>
  );
}
