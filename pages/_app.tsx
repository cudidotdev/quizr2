import "../styles/globals.css";
import AppWrapper from "components/App/AppWrapper";
import type { AppPropsWithLayout } from "types/app";
import React from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const DefaultLayout: React.FC = ({ children }) => <>{children}</>;
  const Layout = Component.getLayout || DefaultLayout;
  return (
    <>
      <Head>
        <title>
          Quizr: Test your knowledge on the most common facts about stuff
        </title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <AppWrapper>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppWrapper>
    </>
  );
}

export default MyApp;