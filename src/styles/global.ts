import { url } from "inspector";
import { globalCss } from ".";
import Background from '@/assets/img/background.png'

export const globalStyle = globalCss({
    "*": {
      margin: 0,
      padding: 0,
      border: 0,
      fontSize: "100%",
      font: "inherit",
      verticalAlign: "baseline",
    },
    "article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section":
      {
        display: "block",
      },
    body: {
      lineHeight: 1,
      backgroundImage:`url(${Background})`,
      backgroundPosition:'center',
      backgroundRepeat:'no-repeat',
      backgroundSize:'cover',
      background:'Beige',
      fontFamily:'Jua',
   
    },
    "ol, ul": {
      listStyle: "none",
    },
    "blockquote, q": {
      quotes: "none",
    },
    "blockquote:before, blockquote:after, q:before, q:after": {
      content: "''",
    },
    a:{
      textDecoration:'none',
    },
    table: {
      borderCollapse: "collapse",
      borderSpacing: 0,
    },
  });