import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { useRouter } from "next/router";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import store from "../store/store";
import Layout from "../components/footer/Layout";
import Spinner from "../components/spinner/Spinner";

import type { AppProps } from 'next/app';

import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => setLoading(false));
    router.events.on("routeChangeComplete", () => setLoading(true));
  }, [router]);

  return (
    <>
      {loading ? (
        <Layout>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </Layout>
      ) : (
        <Spinner />
      )}
      <ToastContainer position="top-center" />
    </>
  );
}

export default MyApp;
