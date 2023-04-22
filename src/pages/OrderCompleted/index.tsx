import useSWR from 'swr';
import { fetcher } from '../../utils/axios';
import { Order, OrderedItems } from '../../utils/types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import formatDate from '../../utils/format-date';

const OrderCompleted = () => {
  const { data: orders, error, isLoading } = useSWR<Order[]>('/order/', fetcher)
  if(error) return <Container><h3>Failed to load</h3></Container>
  if(isLoading) return <Container><h3>Loading...</h3></Container>

  const OrderedItemsList: React.FC<OrderedItems> = ({ item, cartQty, price, id}) => {
    return (
      <p>{cartQty}: {item} at ${price}</p>
    )
  }
  const OrdersList: React.FC<Order> = ({created, price, ordered_items, id }) => (
    <Col className='mb-2' lg={3} sm={1} xl={4}>
      <Card>
        <p>Date: {formatDate(created)} Total Order Price: {price}  </p>
        <p>ordered items: </p>
        {ordered_items && ordered_items.map((item) => {
          return (
            <OrderedItemsList item={item.item} price={item.price} cartQty={item.cartQty} key={item.id} id={item.id} order={item.order}/>
          )
        })}
      </Card>
    </Col>
  )
  return (
    <Container>
      <h2>Order Completed</h2>
      <Row>
        {orders && orders.map((order) => {
          return (
            <OrdersList
              key={order.id}
              created={order.created}
              id={order.id}
              price={order.price}
              ordered_items={order.ordered_items}
            />
          )
        })}
      </Row>
    </Container>
  )
};

export default OrderCompleted