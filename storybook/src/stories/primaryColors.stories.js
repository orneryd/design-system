import React from 'react';

import { storiesOf } from '@storybook/react';
import PrimaryColors from '../global/primaryColors';

const palette = {
    primary: {
      blue: '#005A8C',
      orange: '#EF8200'
    }
}

storiesOf("Test", module)
.add("Primary Colors", () => (
  <PrimaryColors color={palette}/>
));
