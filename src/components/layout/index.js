import React from "react";

import Header from "../header";

import GlobalStyles from "../../styles/global";
import SideBar from "../side-bar";
import { Main } from "./styled";

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Header />
    <SideBar />
    <Main>{children}</Main>
  </>
);

export default Layout;
