import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import star from '../static/star.svg';
import './main.css';

const image = {
  src: star,
  alt: 'my image',
};

const stories = storiesOf('Project Card', module);
stories.addDecorator(withKnobs);

stories
  .add('heading', () => '<h1>Hello World</h1>')
  .add('button', () => {
    const button = document.createElement('button');
    button.type = 'button';
    button.innerText = 'Hello Button';
    button.addEventListener('click', e => console.log(e));
    return button;
  })
  .add('default', () => {
    const title = text('Title', 'Art Power Posters');
    const name = text('Name', 'The Lost Stock');

    return `<div class="container"><div class="card"><div class="thumbnail"><img class="thumbnail__img" src="https://api.artsylane.com/core/img/product_image/project_478/product_image.478.1.629609-medium.jpg" /><span class="card__title">${title}</span><div class="card__stars"><img class="star" src=${
      image.src
    } /><img class="star" src=${image.src} /><img class="star" src=${
      image.src
    } /><img class="star" src=${
      image.src
    } /></div><div class="card__user user"><div class="user__avatar"><img class="user__avatar-img" src="https://api.artsylane.com/core/img/studio/studio_111/studio_110-small.jpg?1561619585378" /></div><div class="user__name">${name}</div></div></div></div></div>`;
  });
