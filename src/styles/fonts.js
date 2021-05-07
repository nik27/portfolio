import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
        /* latin */
        @font-face {
            font-family: "Atkinson Hyperlegible";
            src: url("/fonts/Atkinson-Hyperlegible/WOFF2/Atkinson-Hyperlegible-Regular-102a.woff2") format('woff2);
            font-style: normal;
            font-weight: 400;
            font-display: swap;
        },
        @font-face {
            font-family: "Atkinson Hyperlegible";
            src: url("/fonts/Atkinson-Hyperlegible/WOFF2/Atkinson-Hyperlegible-Bold-102a.woff2") format('woff2);
            font-style: normal;
            font-weight: 700;
            font-display: swap;
        },
        /* latin */
        @font-face {
            font-family: "Atkinson Hyperlegible";
            src: url("/fonts/Atkinson-Hyperlegible/WOFF/Atkinson-Hyperlegible-Regular-102a.woff") format('woff);
            font-style: normal;
            font-weight: 400;
            font-display: swap;
        }
        @font-face {
            font-family: "Atkinson Hyperlegible";
            src: url("/fonts/Atkinson-Hyperlegible/WOFF/Atkinson-Hyperlegible-Bold-102a.woff") format('woff);
            font-style: normal;
            font-weight: 700;
            font-display: swap;
        },
    `}
  />
);

export default Fonts;
