/**
 * @format
 */

import 'react-native';
import React from 'react';
import Root from '../app/Root';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Root />);
});
