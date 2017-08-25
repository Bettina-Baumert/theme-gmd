/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import I18n from '@shopgate/pwa-common/components/I18n';
import Icon from './components/Icon';
import styles from './style';

/**
 * The circle indicator component.
 * @param {Object} props The component props.
 * @param {Object} props.size Width and height of the circle.
 * @param {Object} props.color Color of the circle.
 * @param {Object} props.strokeWidth Stroke width of the circle.
 * @returns {JSX}
 */
const NoResults = props => (
  <div className={styles.wrapper} rt-stateless>
    <div className={styles.icon}>
      <Icon />
    </div>
    <div className={styles.headline}>
      <I18n.Text string={props.headlineText} params={props} />
    </div>
    <div className={styles.text}>
      <I18n.Text string={props.bodyText} params={props} />
    </div>
  </div>
);

NoResults.propTypes = {
  bodyText: PropTypes.string.isRequired,
  headlineText: PropTypes.string.isRequired,
};

export default NoResults;