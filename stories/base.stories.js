import { document, console } from 'global';
import { storiesOf } from '@storybook/html';

const stories = storiesOf('Base', module);

stories.add('Colors', () => {
  const colors = [
    { name: 'white', hex: '#ffffff', code: 'c100' },
    { name: 'black', hex: '#333333', code: 'c200' },
    { name: 'gray', hex: '#a39e9e', code: 'c300' },
    { name: 'lightGray', hex: '#f1f3f5', code: 'c400' },
    { name: 'primaryPink', hex: '#db5dcc', code: 'c500' },
    { name: 'pinkDark', hex: '#db0fc3', code: 'c600' },
    { name: 'pinkDarker', hex: '#ac1a9a', code: 'c700' },
    { name: 'blue', hex: '#a5d8ff', code: 'c800' },
  ];

  return `
  <div class="color-container">
      ${colors.map(
        color => `
          <div class="color-card">
            <div class="color-card__color color--${color.name}"></div>
              <div class="color-card__description">
              <div class="color-text">${color.hex}</div>
              <div class="color-suffix">${color.code}</div>
            </div>
          </div>`
      )}
    </div>`;
});
