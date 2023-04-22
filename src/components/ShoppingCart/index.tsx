import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
import { CartItems } from '../../utils/types';
import { emptyCart } from '../../store/slices/cartSlice';
import ItemDetail from '../ItemDetail';

const ShoppingCart = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state: RootState) => state.cart.value);

  const getTotal = () => {
    let totalQantity = 0
    let totalPrice = 0
    cart.forEach(item => {
      totalQantity += item.cartQty;
      totalPrice += item.price * item.cartQty;
    });
    return {totalPrice, totalQantity}
  };

  const EmptyCart =() => {
    dispatch(emptyCart())
  };

  return (
    <Container className='sticky-top'>
      <h2>Shopping Cart</h2>
      <Col>
        {cart && cart.map((item: CartItems) => (
            <ItemDetail
              key={item.id}
              cartQty={item.cartQty}
              name={item.name}
              price={item.price}
              id={item.id}
            />
        ))}
      </Col>
      <Col>
          <p>Total ({getTotal().totalQantity} items): ${getTotal().totalPrice.toFixed(2)}</p>
      </Col>
      <LinkContainer to='/checkout'>
        <Button className='me-1'>Check Out</Button>
      </LinkContainer>
          <Button onClick={EmptyCart}>Emptry Cart</Button>
    </Container>
  )
};

export default ShoppingCart;