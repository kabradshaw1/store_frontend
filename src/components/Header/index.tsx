import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import authSlice from '../../store/slices/authSlice';
import { AiOutlineShoppingCart } from 'react-icons/ai';

export default function Header() {

  const cart = useSelector((state: RootState) => state.cart);
  const isLoggedIn = useSelector((state: RootState) => state.auth.account);

  const getCartQauntity = () => {
    let total = 0;
    cart.value.forEach(item=> {
      total += item.cartQty
    });
    return total;
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(authSlice.actions.logout());
    navigate('/login');
  };

  return (
    <Navbar as='header' bg="light" expand="lg" className='sticky-top'>
      <Container>
        <LinkContainer to=''>
          <Navbar.Brand>Kyle's Store</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {isLoggedIn
            ? <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            : <LinkContainer to='/login'>
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            }
            <LinkContainer to='register'>
              <Nav.Link>Register</Nav.Link>
            </LinkContainer>
            {isLoggedIn
            ? <LinkContainer to='/checkout'>
                <Nav.Link>Checkout <AiOutlineShoppingCart/>: {getCartQauntity() | 0} </Nav.Link>
              </LinkContainer>: null
            }
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <LinkContainer to='/order_completed'>
                <NavDropdown.Item href="#action/3.1">Order History</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};
