/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { shallow } from 'enzyme';
import Logo from './index';

// Mock the redux connect() method instead of providing a fake store.
jest.mock('Library/connectors/navigator', () => obj => obj);

describe('<Logo />', () => {
  it('should not render anything', () => {
    const wrapper = shallow(
      <Logo logoUrl={null} />
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('img').exists()).toBe(false);
  });

  it('should render an image', () => {
    const wrapper = shallow(
      <Logo logoUrl="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" />
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('img').exists()).toBe(true);
  });
});