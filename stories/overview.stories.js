import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { action, configureActions } from '@storybook/addon-actions';

import star from '../static/star.svg';
import './main.css';

const stories = storiesOf('Overview', module);
stories.addDecorator(withKnobs);

stories.add(
  'Vision',
  () =>
    `<div class="block-container">
      <h1>Overview</h1>
      <p>
        In this project, we strive to help our Client to achieve this. When we deliver this product at the end of the day, the Client can expect to expecience the following:
      </p>
      <ol>
        <li>Tick something</li>
        <li>Tick something</li>
        <li>Tick something else</li>
      </ol>
    </div>`
);
