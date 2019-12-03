import React from 'react';

import { storiesOf } from '@storybook/react';
import PrimaryColors from '../components/palette/primaryColors';
import SupportColors from '../components/palette/supportColors';

const palette = {
    primary: {
      blue: '#005A8C',
      orange: '#EF8200'
    }
}

storiesOf("General | Palette", module)
  .add("Primary Colors", () => (
    <PrimaryColors />
  ))
  .add("Support Colors", () => (
    <SupportColors
      color={palette}/>
  ));
