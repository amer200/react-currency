import {
  Navbar,
  NavItem,
  NavLink,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav
} from "reactstrap";
const nav = () => {
  return (
    <div>
      <Navbar color="dark" dark expand="md" fixed="top" full>
        <NavbarBrand href="/">logo</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Eur</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default nav;
