import React from "react";

import Header from "../header";

import GlobalStyles from "../../styles/global";
import SideBar from "../side-bar";
import { Main } from "./styled";
import MobileFooter from "../footer/mobile";

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Header />
    <SideBar />
    <Main>{children}</Main>
    <MobileFooter />
  </>
);

export default Layout;
