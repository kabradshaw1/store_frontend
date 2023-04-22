import { render } from '@testing-library/react';
import UserForm from './index'
// import {rest} from 'msw';

describe('Should render create user form', () => {
  const { getByText } = render(<UserForm/>)
  describe('has name group', () => {
    it('has a name label', () => {
      expect(getByText('First name')).toBeInDocument;
    })
    it('has a functional input', () => {

    })
  })
  describe('has name label', () => {

  })
})