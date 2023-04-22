import {incrementcartQty, decrementcartQty, removeItem} from '../../store/slices/cartSlice';
import { AiOutlineDelete } from 'react-icons/ai';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import Row from 'react-bootstrap/Row';
import { CartItems } from '../../utils/types';

const ItemDetail: React.FC<CartItems> = ({name, cartQty, price, id}) => {
  const dispatch = useDispatch();
  return (
    <Row>
      <p>
        <a onClick={() => dispatch(decrementcartQty({name:name, cartQty:1, price:price, id:id}))}>
          <AiOutlineMinusCircle/>
        </a>
        <a onClick={() => dispatch(incrementcartQty({name:name, cartQty:1, price:price, id:id}))}>
          <AiOutlinePlusCircle/>
        </a>
        <a onClick={() => dispatch(removeItem({name:name, cartQty:1, price:price, id:id}))}>
          <AiOutlineDelete/>
        </a>
        {cartQty} x {name}: {cartQty*price}
      </p>
    </Row>
  )
};

export default ItemDetail;