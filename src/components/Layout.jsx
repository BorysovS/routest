import { Outlet } from "react-router-dom";
import { Container, Header, Logo, Link } from "./Layout.styled";


const Layout = () => { 
    return (
<Container>
      <Header>
        <Logo>
          GoMerch Store
        </Logo>
        <nav>
          <Link to="/">
            Home
          </Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>
      </Header>
      <Outlet />
    </Container>
  )
}

export default Layout