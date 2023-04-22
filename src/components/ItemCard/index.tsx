import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/slices/cartSlice';
import { Items } from '../../utils/types';

const ItemCard: React.FC<Items> = ({ id, price, name, description, category, image, quantity }) => {
  const dispatch = useDispatch();

  return (
      <Card>
        <LinkContainer to={`/item/${id}`}>
          <Card.Img variant='top' src={`/images/${image}`}/>
        </LinkContainer>
        <Card.Body>
          <Card.Title>{name}:{category}</Card.Title>
          <Card.Text>${price}</Card.Text>
          <Card.Text>{quantity} in stock</Card.Text>
          <Card.Text>{description}</Card.Text>
          <Button onClick={() => dispatch(addItem({name: name, cartQty: 1, price: price, id:id}))}>Add to cart</Button>
        </Card.Body>
      </Card>
  )
};

export default ItemCard;