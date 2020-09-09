import React from 'react';
import ReactDOM from 'react-dom';
import List from './list';
import renderer from 'react-test-renderer';


describe('List component', () => {
// this is the test case
it('renders without crashing', () => {
    const testCard =  [{
        content: 'lorem ipsum',
        key: 'a',
        title: 'Twelfth card',
      }];
  // first create a DOM element to render the component into
  const div = document.createElement('div');

  // render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(<List card = {testCard}/>, div);

  // clean up code
  ReactDOM.unmountComponentAtNode(div);
});
it('renders the UI as expected', () => {
    const testCard =  [{
        content: 'lorem ipsum',
        key: 'a',
        title: 'Twelfth card',
      }];
    const tree = renderer
      .create(<List card ={testCard} />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });
});