/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import View from 'Components/View';

/**
 * Favorites page.
 */
class Favorites extends Component {
  static contextTypes = {
    i18n: PropTypes.func,
  };

  /**
   * Title getter.
   */
  get title() {
    const { __ } = this.context.i18n();
    return __('titles.favorites');
  }

  /**
   *
   * @returns {XML}
   */
  render() {
    return (
      <View title={this.title}>
        <p>Hello world.</p>
      </View>
    );
  }
}

export default Favorites;