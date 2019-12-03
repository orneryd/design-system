import React from 'react';
import ReactDOM from 'react-dom';

import Typography from '../components/Typography/Typography';

describe('Typography', () => {

  it('Typography renders correctly', () => {

    const div = document.createElement('div');
    ReactDOM.render(<Typography />, div);

    /* Makes sures it renders correctly */
    expect(div).toMatchSnapshot();

    ReactDOM.unmountComponentAtNode(div);
  });
  
});
