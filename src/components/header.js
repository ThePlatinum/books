import React from "react";

import { Navbar, NavbarBrand, NavItem } from "reactstrap";

export default class Header extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Navbar color='dark' dark className='header'>
        <NavbarBrand href='/'> Books </NavbarBrand>
      </Navbar>
    )
  }
}