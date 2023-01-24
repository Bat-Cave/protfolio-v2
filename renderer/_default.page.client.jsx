import React from "react";
import ReactDOM from "react-dom/client";
import { Layout } from "../src/components/Layout";
import { LazyMotion, domAnimation } from "framer-motion";
import { UseEffectScroll } from "react-use-smooth-scroll";
import "./index.css";

export { render };

async function render(pageContext) {
  const { Page, pageProps } = pageContext;
  const page = (
    <LazyMotion features={domAnimation} strict>
      <UseEffectScroll>
        <Layout pageContext={pageContext}>
          <Page {...pageProps} />
        </Layout>
      </UseEffectScroll>
    </LazyMotion>
  );
  const container = document.getElementById("page-view");
  if (pageContext.isHydration) {
    root = ReactDOM.hydrateRoot(container, page);
  } else {
    if (!root) {
      root = ReactDOM.createRoot(container);
    }
    root.render(page);
  }
}

/* To enable Client-side Routing:
export const clientRouting = true
// !! WARNING !! Before doing so, read https://vite-plugin-ssr.com/clientRouting */
