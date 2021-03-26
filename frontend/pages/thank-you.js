import Layout from "layout";
import Head from "next/head";
import Survey from "components/survey";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Survey</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-centered">Grazie!</h1>
      <p>
        Il questionario è stato inviato ed il tuo feedback verrà preso in
        considerazione
      </p>
      <p>
        <a className="btn btn-primary" href="https://www.lokky.it/">
          Torna al sito Lokky
        </a>
      </p>
    </Layout>
  );
}
