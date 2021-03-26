import Layout from "layout";
import Head from "next/head";
import Survey from "components/survey"

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Survey</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>Completa questo breve questionario per darci la tua impressione.</p>
      <p>
        <span className="text-muted">
          (<strong>ps: </strong>quis fugiat officia nisi aute et. Irure
          reprehenderit proident fugiat labore sint voluptate voluptate enim ad
          aliquip do elit. Nulla ad ex eiusmod ipsum consequat incididunt do non
          eu officia fugiat cillum nulla tempor.)
        </span>
      </p>

      <Survey />

    </Layout>
  );
}
