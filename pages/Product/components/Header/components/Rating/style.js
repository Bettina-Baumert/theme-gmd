/**
 * Copyright (c) 2017-present, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { css } from 'glamor';
import variables from 'Styles/variables';

const container = css({
  display: 'flex',
  alignItems: 'center',
  lineHeight: '12px',
  marginBottom: variables.gap.small,
}).toString();

export {
  container,
};
