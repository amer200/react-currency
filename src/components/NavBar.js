import {
  Navbar,
  NavItem,
  NavLink,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
} from "reactstrap";
import "./NavBar.css";
const nav = () => {
  return (
    <div>
      <Navbar color="light" light expand="md" fixed="top" container>
        <NavbarBrand href="/">LOGO</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink className="active" href="/components/">
                Eur
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default nav;
