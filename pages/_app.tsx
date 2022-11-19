import { EmotionCache } from "@emotion/react";
import type { AppProps } from "next/app";
import React from "react";
import PageProvider from "../helpers/PageProvider";

export interface MUIAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const App: React.FC<MUIAppProps> = ({ Component, pageProps, emotionCache }) => {
  return (
    <PageProvider emotionCache={emotionCache}>
      <Component {...pageProps} />
    </PageProvider>
  );
};

export default App;
