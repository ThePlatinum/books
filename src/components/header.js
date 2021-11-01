import React from "react";

import { Navbar, NavbarBrand } from "reactstrap";

export default class Header extends React.Component {
  render() {
    return (
      <Navbar color='dark' dark className='header'>
        <NavbarBrand href='/'> Books </NavbarBrand>
      </Navbar>
    )
  }
}