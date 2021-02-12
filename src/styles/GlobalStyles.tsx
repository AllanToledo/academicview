import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
       margin: 0;
       padding: 0;
       box-sizing: border-box;
    }

   html, body, #root {
       height: 100%;
   }

   .green {
       background-color: #00C853;
       color: #fff;
   }

   .disabled {
        color: #c4c4c4;
    }

    .clean {
        background-color: #0000;
        border: none;
    }

`;