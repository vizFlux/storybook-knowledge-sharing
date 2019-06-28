import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import star from '../static/star.svg';
import starred from '../static/starred.svg';
import './main.css';

const image = {
  star: star,
  starred: starred,
  alt: 'my image',
};

const avatarLink =
  'https://api.artsylane.com/core/img/studio/studio_111/studio_110-small.jpg?1561619585378';

const thumbnailLink =
  'https://api.artsylane.com/core/img/product_image/project_478/product_image.478.1.629609-medium.jpg';

const stories = storiesOf('Project Card', module);

stories.addDecorator(withKnobs);

stories
  .add('default', () => {
    const title = text('Title', 'Art Power Posters');
    const name = text('Name', 'The Lost Stock');
    const avatar = text('Avatar', avatarLink);
    const thumbnail = text('Thumbnail', thumbnailLink);

    return `
    <div class="container">
      <div class="card">
        <div class="thumbnail">
          <img class="thumbnail__img" src=${thumbnail} />
          <span class="card__title">${title}</span>
          <div class="card__stars"><img class="star" src=${image.star} />
            <img class="star" src=${image.star} />
            <img class="star" src=${image.star} />
            <img class="star" src=${image.star} />
          </div>
          <div class="card__user user">
            <div class="user__avatar">
              <img class="user__avatar-img" src=${avatar} />
            </div>
            <div class="user__name">${name}</div>
          </div>
        </div>
      </div>
    </div>`;
  })
  .add('with user ratings', () => {
    const title = text('Title', 'Art Power Posters');
    const name = text('Name', 'The Lost Stock');
    const avatar = text('Avatar', avatarLink);
    const thumbnail = text('Thumbnail', thumbnailLink);

    return `<div class="container">
      <div id="js-card" class="card">
        <div class="thumbnail">
          <img class="thumbnail__img" src=${thumbnail} />
            <span class="card__title">${title}</span>
          <div class="card__stars">
            <img class="star" src=${image.starred} />
            <img class="star" src=${image.starred} />
            <img class="star" src=${image.starred} />
            <img class="star" src=${image.star} />
          </div>
          <div class="card__user user">
            <div class="user__avatar">
              <img class="user__avatar-img" src=${avatar} />
            </div>
            <div class="user__name">${name}</div>
          </div>
        </div>
      </div>
    </div>`;
  });
