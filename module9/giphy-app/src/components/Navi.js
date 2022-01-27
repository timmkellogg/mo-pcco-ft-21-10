import { Navbar, NavbarBrand, Collapse, NavLink, NavItem, Nav } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';

function Navi() {
    return (
        <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Giphy App</NavbarBrand>
        <Collapse navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/search">Search</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/saved">Saved</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>  
    )
}

export default Navi;