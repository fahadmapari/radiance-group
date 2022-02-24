import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
  font-family: "Poppins", Arial;
  font-size: 62.5%;
}

html,body, #root{
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}

a{
  text-decoration: none;
  cursor: pointer;
}
`;

export default GlobalStyles;
