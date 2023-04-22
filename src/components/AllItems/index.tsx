import ItemCard from '../ItemCard';
import useSWR from 'swr';
import { fetcher } from '../../utils/axios';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Items } from '../../utils/types';



const AllItems: React.FC = () => {
  const { data: items, error, isLoading } = useSWR<Items[]>('/item/', fetcher);

  if(error) return <Container><h3>Failed to load</h3></Container>
  if(isLoading) return <Container><h3>Loading...</h3></Container>

  return (
    <Container>
      <Row lg={3} sm={1} xl={4}>
      {items && items.map((item) => {
          return (
            <Col key={item.id}>
              <ItemCard
                quantity={item.quantity}
                id={item.id}
                price={item.price}
                name={item.name}
                description={item.description}
                category={item.category}
                image={item.image}
                created={item.created}
                updated={item.updated}
              />
            </Col>
          )
      })}
      </Row>
    </Container>
  )
};

export default AllItems;