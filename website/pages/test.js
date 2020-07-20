import Head from "next/head";
import Layout from "layout";

export default function Home() {
  return (
    <Layout>
      <div className="container">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <h1>Ciao!</h1>
        </main>
      </div>
    </Layout>
  );
}
