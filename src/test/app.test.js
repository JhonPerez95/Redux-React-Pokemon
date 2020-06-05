import React from 'react';
import { Provider } from 'react-redux';
import { shallow, render } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import store from '../redux/store';
import App from '../app';

Enzyme.configure({ adapter: new Adapter() });

it('render Root', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
<Provider store={store}>
  <App />
</Provider>;
