import Result from "components/result";
import Layout from "layout";
import Head from "next/head";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Survey</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2 className="page-title">Risultati</h2>
      {["age"].map((name) => {
        return <Result name={name} />;
      })}
    </Layout>
  );
}
