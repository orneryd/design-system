import React from 'react';

import PrimaryColors from '../components/palette/primaryColors';
import SupportColors from '../components/palette/supportColors';

const palette = {
    primary: {
      blue: '#005A8C',
      orange: '#EF8200'
    }
}

export default {
  title: 'General/Color Palette',
};

export const primaryColors = ()=> <PrimaryColors />
export const supportColors = ()=> <SupportColors color={palette} />
