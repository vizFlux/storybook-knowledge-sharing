import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

const stories = storiesOf('Buttons', module);
stories.addDecorator(withKnobs);

stories
  .add('primary', () => {
    const label = text('Label', 'Get started');

    const button = document.createElement('button');
    button.type = 'button';
    button.innerText = label;
    button.classList.add('button', 'button--p');
    button.addEventListener('click', e => console.log(e));

    return button;
  })
  .add('secondary', () => {
    const label = text('Label', 'Get started');

    const button = document.createElement('button');
    button.type = 'button';
    button.innerText = label;
    button.classList.add('button', 'button--s');
    button.addEventListener('click', e => console.log(e));

    return button;
  });
