import { createGlobalStyle } from "styled-components";
import media from "styled-media-query";

import * as V from "./variables";

const GlobalStyles = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html {
    font-size: 62.5%; /** - 10px - 1rem || default is 16px font-size of browsers */

    ${media.lessThan("1500px")` /** old 1255 */
        font-size: 52.5%;
    `}

    ${media.lessThan("small")`
        font-size: 42.5%;
    `}
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

body.light {
	--background: ${V.Color.lightWhite};
    --primaryColor: ${V.Color.black};
    --secondaryColor: ${V.Color.lightBlack};
    --headerBackground: rgba(225,225,225,0.1);
    --headerBackgroundSolid: ${V.Color.white};
    --highlight: ${V.Color.wineRed};
    --highLightText: ${V.Color.wineRed};
}

body.dark {
	--background: ${V.Color.darkGreen};
    --primaryColor: ${V.Color.white};
    --secondaryColor: ${V.Color.white};
    --headerBackground: rgba(0,0,0,0.2);
    --headerBackgroundSolid: ${V.Color.darkGreen};
    --highlight: ${V.Color.golden};
    --highLightText: ${V.Color.lightGolden};
}

ol, ul {
	list-style: none;
}

blockquote, q {
	quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

* {
    box-sizing: border-box;
}

body {
    background: var(--background);
    line-height: 1;
    font-family: Lato, sans-serif;
}

img {
    display: block;
    width: 100%;
    height: auto;
}

/** KeyFrames area */
@keyframes moveFirstHeroUpLeft {
    0% {
        opacity: 0;
        transform: translate(0);
    }

    50% {
        opacity: 0.5;
		transform: translate(-6rem, -2rem);
    }

    100% {
        opacity: 0;
        transform: translate(0);
    }
}

@keyframes moveSecondHeroUpLeft {
    0% {
        opacity: 0;
        transform: translate(0);
    }

    50% {
    	opacity: 0.3;
		transform: translate(-12rem, -4rem);
    }

    100% {
        opacity: 0;
        transform: translate(0);
    }
}

@keyframes moveThirdHeroUpLeft {
    0% {
        opacity: 0;
        transform: translate(0);
    }

    50% {
		opacity: 0.1;
		transform: translate(-16rem, -6rem);
    }

    100% {
        opacity: 0;
        transform: translate(0);
    }
}

@keyframes moveInLeft {
    0% {
        opacity: 0;
        transform: translateX(-10rem);
    }

    80% {
        transform: translateX(1rem);
    }

    100% {
        opacity: 1;
        transform: translate(0);
    }
}

@keyframes moveInRight {
    0% {
        opacity: 0;
        transform: translateX(10rem);
    }

    80% {
        transform: translateX(-1rem);
    }

    100% {
        opacity: 1;
        transform: translate(0);
    }
}

@keyframes moveDownToUp {
    0% {
        opacity: 0;
        transform: translateY(3rem);
    }

    100% {
        opacity: 1;
        transform: translate(0);
    }
}

@keyframes showUp {
    0% {
        opacity: 0;
    }

    50% {
        opacity: 0.5;
    }

    100% {
        opacity: 1;
    }
}
`;

export default GlobalStyles;
