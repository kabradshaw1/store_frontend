import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { CartItems } from '../../utils/types';
import ItemDetail from '../../components/ItemDetail';
import { emptyCart } from '../../store/slices/cartSlice';
import axiosInstance from '../../utils/axios';

const CheckOut: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const cart = useSelector((state: RootState) => state.cart.value);
  const axiosCart = cart.map((item) => {
    return {item: item.id, cartQty: item.cartQty, price: item.price}
   });
  const dispatch = useDispatch();
  const navigiate = useNavigate();
  const getTotal = () => {
    let totalQantity = 0
    let totalPrice = 0
    cart.forEach(item => {
      totalQantity += item.cartQty;
      totalPrice += item.price * item.cartQty;
    });
    return {totalPrice, totalQantity}
  };

  const CheckOutSubmit = () => {
    setLoading(true);
    axiosInstance.post('checkout/',
      {
        ordered_items: axiosCart,
        price: getTotal().totalPrice.toFixed(2)
      }
    )
    .then(() => {
      setLoading(false);
      dispatch(emptyCart())
      navigiate('/order_completed')
    })
    .catch((err) => {
      setLoading(false);
      console.log(err.response.data)
    });
  };

  return (
    <Container>
      <h3>Check Out</h3>
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
      <Button className='me-1' disabled={loading} onClick={() => CheckOutSubmit()}>Pay Now</Button>
      <Button onClick={() => dispatch(emptyCart())}>Emptry Cart</Button>
    </Container>

  )
};

export default CheckOut;