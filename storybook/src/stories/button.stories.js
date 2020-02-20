import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, select } from "@storybook/addon-knobs";
import '../../../packages/button'
import '../../../packages/paper'


export default {
  title: 'Web Components/Button',
  decorators: [withKnobs]
};


const label = 'Variants';
const options = {
  Primary: 'primary',
  PrimaryRounded: 'primary rounded',
  Secondary: 'secondary',
  SecondaryRounded: 'secondary rounded',
  Outlined: 'outlined',
  OutlinedRounded: 'outlined rounded',
};
const defaultValue = 'primary';
const groupId = 'Buttons';

export const Button = () => <mds-button style={{textTransform: 'capitalize'}} variant={select(label, options, defaultValue, groupId)} onClick={action('clicked')}>{select(label, options, defaultValue, groupId)}</mds-button>;


