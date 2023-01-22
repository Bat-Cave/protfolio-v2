import ReactDOMServer from "react-dom/server";
import React from "react";
import { Layout } from "../src/components/Layout";
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr";
import { LazyMotion, domAnimation } from "framer-motion";
import { UseEffectScroll } from "react-use-smooth-scroll";

export { render };
// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ["pageProps", "urlPathname"];

async function render(pageContext) {
  const { Page, pageProps } = pageContext;
  const pageHtml = ReactDOMServer.renderToString(
    <LazyMotion features={domAnimation} strict>
      <UseEffectScroll>
        <Layout pageContext={pageContext}>
          <Page {...pageProps} />
        </Layout>
      </UseEffectScroll>
    </LazyMotion>
  );

  // See https://vite-plugin-ssr.com/head
  const { documentProps } = pageContext.exports;
  const title = (documentProps && documentProps.title) || "Vite SSR app";
  const desc =
    (documentProps && documentProps.description) ||
    "App using Vite + vite-plugin-ssr";

  const documentHtml = escapeInject`<!DOCTYPE html>
  <html lang="en" data-theme="dracula">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="description" content="Personal portfolio of Rico Hancock" />
      <title>Rico Hancock | Howdy</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito&family=Philosopher&display=swap"
        rel="stylesheet"
      />
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-XMXSSMNL4Y"
      ></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag("js", new Date());
  
        gtag("config", "G-XMXSSMNL4Y");
      </script>
    </head>
      <body>
        <div id="page-view">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    },
  };
}