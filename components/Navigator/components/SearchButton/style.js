/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import cxs from 'cxs';
import { navigator } from 'Styles/variables';

const button = cxs({
  color: 'inherit',
  fontSize: '1.5rem',
  lineHeight: 1,
  outline: 0,
  padding: 0,
  minWidth: navigator.height,
  height: navigator.height,
  position: 'relative',
  zIndex: 1,
});

const buttonContent = cxs({
  display: 'flex',
  height: '100%',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
});

export default {
  button,
  buttonContent,
};