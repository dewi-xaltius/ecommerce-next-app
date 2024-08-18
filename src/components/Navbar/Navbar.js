import Link from 'next/link';
import { NavbarContainer, NavList, NavItem } from './Navbar.styles';

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavList>
        <NavItem>
          <Link href="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link href="/add-product">Add Product</Link>
        </NavItem>
        <NavItem>
          <Link href="/inventory">Check Inventory</Link>
        </NavItem>
      </NavList>
    </NavbarContainer>
  );
};

export default Navbar;
