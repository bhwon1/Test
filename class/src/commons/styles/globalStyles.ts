import { css } from "@emotion/react";

// prettier-ignore
export const globalStyles = css`
  * {margin: 0;padding: 0;vertical-align:middle;font-size: 100%;box-sizing: border-box;font-size-adjust:100%;/* font-family: "myfont"; */}
  html,body {width: 100%;height: 100%;}
  html {overflow-y: scroll;/* scroll-behavior: smooth; */}
  body {font: normal 14px/1 'Noto Sans', 'Noto Sans KR', 'Nanum Gothic', '맑은고딕', 'Montserrat', 'arial';color:#444;background: #fff;}
  h1,h2,h3,h4,h5,h6,strong,b {font-weight: normal;font-size: 14px;}
  i,em,address {font-style: normal;}
  ul {list-style: none;}
  a {color:#444;text-decoration: none;;}
  strong,b,i,em,span,a {vertical-align: baseline;}
  .hide {display: none;}
  .clear::after {content:"";display: block;clear: both;}
  #skip {position: absolute;z-index: 2;width:100%;top:0;left:0;}
  #skip li {width:100%;}
  #skip li a {display:flex;align-items: center;justify-content: center;width:100%;height:0;font-size:0;color:#fff;background: #000;}
  #skip li a:focus {height:50px;font-size:20px;}

  @font-face {
    font-family: "myfont";
    src: url("/font/scifibit.ttf");
  }
`;
