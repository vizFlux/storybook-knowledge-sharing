import { configure, addParameters } from '@storybook/html';

const viewports = {
  mobileSmall: {
    name: 'iPhone 5/SE',
    styles: {
      width: '320px',
      height: '568px',
    },
  },
  mobileRegular: {
    name: 'iPhone 6/7/8/X',
    styles: {
      width: '375px',
      height: '667px',
    },
  },
  mobileLarge: {
    name: 'iPhone 6/7/8 Plus',
    styles: {
      width: '414px',
      height: '736px',
    },
  },
  tablet: {
    name: 'iPad',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
  largeTablet: {
    name: 'iPad Pro',
    styles: {
      width: '1024px',
      height: '1366px',
    },
  },
  desktop: {
    name: 'Desktop',
    styles: {
      width: '1440px',
      height: '1024px',
    },
  },
  largeDesktop: {
    name: 'HD Desktop',
    styles: {
      width: '1920px',
      height: '1080px',
    },
  },
};

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addParameters({
  backgrounds: [
    { name: 'default', value: '#fafafa', default: true },
    { name: 'dark', value: '#333333' },
    { name: 'light', value: '#ffffff' },
  ],
  viewport: { viewports: viewports },
});

configure(loadStories, module);
