import React from "react";

import {
  Navbar,
  NavigationLink,
  NavigationList,
  NavigationItem,
} from "./styled";

const NavbarComponent = () => (
  <Navbar>
    <NavigationList>
      <NavigationItem>
        <NavigationLink to="/about">Blog</NavigationLink>
      </NavigationItem>

      <NavigationItem>
        <NavigationLink to="/blog">Portfolio</NavigationLink>
      </NavigationItem>

      <NavigationItem>
        <NavigationLink to="/blog">Contact</NavigationLink>
      </NavigationItem>
    </NavigationList>
  </Navbar>
);

export default NavbarComponent;
