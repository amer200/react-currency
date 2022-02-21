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
const nav = (props) => {
  const currs = props.currs;
  return (
    <div>
      <Navbar color="light" light expand="md" fixed="top" container>
        <NavbarBrand href="/">LOGO</NavbarBrand>
        <NavbarToggler
          onClick={function noRefCheck() {
            const btn = document.getElementsByClassName("collapse")[0];
            if (btn.style.display === "none") {
              return (btn.style.display = "block");
            } else {
              return (btn.style.display = "none");
            }
          }}
        />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              {currs.map((c, id) => {
                return (
                  <NavLink className="active" href={"/" + c} key={id}>
                    {c}
                  </NavLink>
                );
              })}
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default nav;
