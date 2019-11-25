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

storiesOf("Brand | Palette/Colors", module)
  .add("Primary Colors", () => (
    <PrimaryColors
      color={palette}/>
  ))
  .add("Support Colors", () => (
    <SupportColors
      color={palette}/>
  ));
