import React from "react";

import Header from "../Header";

import GlobalStyles from "../../styles/global";
import SideBar from "../SideBar";
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
