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
        <NavigationLink
          target="_blank"
          href="mailto:antonio.carlos.sousa@outlook.pt"
        >
          Contact
        </NavigationLink>
      </NavigationItem>
    </NavigationList>
  </Navbar>
);

export default NavbarComponent;
