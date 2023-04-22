import React from 'react';
import { render } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { store } from './app/store';
import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(
//     <Provider store={store}>
//       <App />
//     </Provider>
//   );

//   expect(getByText(/learn/i)).toBeInTheDocument();
// });

// We call the 'describe function and provide a description-string as the first argument
// and a function with tests as the second:

// describe('divide function', () => {
//   describe('when given to integers', () => {
//     it('should return a division result', () => {
//       // Arrange: prepare function arguments
//       // and the expected division result.
//       // In this example 10 / 2 === 5:
//       const [a, b, expected] = [10, 2, 5];
//       // Here we use array destructuring 
//       // to assing `a === 10`, `b === 2`, 
//       // and `expected === 5`.

//       // Act: use the `divide` function 
//       // to get an actual function result
//       const result = divide(a, b);

//       // Assert: compare expected result
//       // with a function result.
//       expect(result).toEqual(expected);
//     });
//   });
// });

// describe('divide function', () => {
//   describe('when trying to divide by 0', () => {
//     it('should throw an error', () => {
//       // Arrange: prepare an error
//       // that is expected to be thrown.
//       const expectedError = new Error(
//         "You can't divide by zero."
//       )
      
//       // Act here is a callback inside of 'exact'.
//       // Arrange: check that the function call wiull result in a given error.
//       expect(() => divide(1, 0)).toThrow(expectedError);
//     });
//   });
// });

// test('generates a label', () => {
//   const result = label('React');
//   expect(result).toEqual('Hello REACT');
// })

describe('initial component', () => {
  test('label at top should have text', () =>{
    const { getByText } = render(<App/>);
    expect(getByText('People Invited to my Party')).toBeInTheDocument;
  });
  describe('people should have a defined type with name, url, age, and note properties', () => {
    test('variable exists', () => {
      
    })
  })
});