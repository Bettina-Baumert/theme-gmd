/**
 * Copyright (c) 2017-present, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { mount } from 'enzyme';
import Picker from './index';

describe('<Picker />', () => {
  it('should render the picker', () => {
    const label = 'Picker label';

    const wrapper = mount(
      <Picker label={label} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
