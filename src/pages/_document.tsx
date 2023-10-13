
import { getCssText } from "@/styles";
import { globalStyle } from "@/styles/global";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  globalStyle();
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Jua&family=Just+Another+Hand&display=swap"
          rel="stylesheet"
        />
        <style
          id="stiches"
          dangerouslySetInnerHTML={{ __html: getCssText }}
        ></style>
      </Head>
      <body>
 
        <Main/>

        <NextScript />
      </body>
    </Html>
  );
}
