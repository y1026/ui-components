import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import 'sendgrid-style-guide/app/scss/style-guide.scss';

import colors from '../src/utilities/colors';

import Badge from '../src/components/Badge';
import Button from '../src/components/Button';
import ButtonList from '../src/components/ButtonList';
import Loader from '../src/components/Loader';
import ToggleButtons from '../src/components/ToggleButtons';

const badgeStories = storiesOf('Badge', module);

for (const color of colors) {
  badgeStories.add(color, () => <Badge color={color}>{color}</Badge>);
}

const buttonStories = storiesOf('Button', module);

buttonStories.add('Primary Button', () => (
  <Button type="primary" onClick={action('Button Clicked')}>
    Primary
  </Button>
));

buttonStories.add('Secondary Button', () => (
  <Button type="secondary" onClick={action('Button Clicked')}>
    Secondary
  </Button>
));

buttonStories.add('Danger Button', () => (
  <Button type="danger" onClick={action('Button Clicked')}>
    Danger
  </Button>
));

buttonStories.add('Primary Button with Icon', () => (
  <Button type="primary" icon="create" onClick={action('Button Clicked')}>
    Primary
  </Button>
));

buttonStories.add('Secondary Button with Icon', () => (
  <Button type="secondary" icon="copy" onClick={action('Button Clicked')}>
    Secondary
  </Button>
));

buttonStories.add('Danger Button with Icon', () => (
  <Button type="danger" icon="trash" onClick={action('Button Clicked')}>
    Danger
  </Button>
));

buttonStories.add('Primary Button with Badge', () => (
  <Button type="primary" badge={1} onClick={action('Button Clicked')}>
    Primary
  </Button>
));

buttonStories.add('Secondary Button with Badge', () => (
  <Button type="secondary" badge={1} onClick={action('Button Clicked')}>
    Secondary
  </Button>
));

buttonStories.add('Danger Button with Badge', () => (
  <Button type="danger" badge={1} onClick={action('Button Clicked')}>
    Danger
  </Button>
));

buttonStories.add('Primary Button (Loading)', () => (
  <Button type="primary" loading onClick={action('Button Clicked')}>
    Primary (Loading)
  </Button>
));

buttonStories.add('Secondary Button (Loading)', () => (
  <Button type="secondary" loading onClick={action('Button Clicked')}>
    Secondary (Loading)
  </Button>
));

buttonStories.add('Primary Button (Disabled)', () => (
  <Button type="primary" disabled onClick={action('Button Clicked')}>
    Primary (Disabled)
  </Button>
));

buttonStories.add('Secondary Button (Disabled)', () => (
  <Button type="secondary" disabled onClick={action('Button Clicked')}>
    Secondary (Disabled)
  </Button>
));

buttonStories.add('Danger Button (Disabled)', () => (
  <Button type="danger" disabled onClick={action('Button Clicked')}>
    Danger (Disabled)
  </Button>
));

const buttonListStories = storiesOf('Button List', module);

buttonListStories.add('Button List on a Light Background', () => (
  <ButtonList>
    <Button type="primary" onClick={action('Button Clicked')}>
      Primary
    </Button>
    <Button type="secondary" onClick={action('Button Clicked')}>
      Secondary
    </Button>
    <Button type="danger" onClick={action('Button Clicked')}>
      Danger
    </Button>
  </ButtonList>
));

buttonListStories.add('Button List on a Dark Background', () => (
  <div style={{ backgroundColor: '#294661', height: '100vh' }}>
    <ButtonList onDark>
      <Button type="primary" onClick={action('Button Clicked')}>
        Primary
      </Button>
      <Button type="secondary" onClick={action('Button Clicked')}>
        Secondary
      </Button>
      <Button type="secondary" disabled onClick={action('Button Clicked')}>
        Disabled
      </Button>
    </ButtonList>
  </div>
));

const toggleButtonStories = storiesOf('ToggleButtons', module);

toggleButtonStories.add('Toggle Buttons', () => (
  <ToggleButtons onChange={action('Toggle Changed')}>
    <Button>Day</Button>
    <Button>Week</Button>
    <Button>Month</Button>
  </ToggleButtons>
));

toggleButtonStories.add('Toggle Buttons with an Explicit Active Option', () => (
  <ToggleButtons onChange={action('Toggle Changed')}>
    <Button>Day</Button>
    <Button>Week</Button>
    <Button active>Month</Button>
  </ToggleButtons>
));

const loaderStories = storiesOf('Loaders', module);

loaderStories.add('Standard Loader', () => <Loader />);

loaderStories.add('Large Loader', () => <Loader large />);

loaderStories.add('Small Loader', () => <Loader small />);

loaderStories.add('Centered Loader', () => (
  <div style={{ height: '100vh' }}>
    <Loader centered />
  </div>
));

loaderStories.add('Loader on Dark', () => (
  <div style={{ backgroundColor: '#294661', height: '100vh' }}>
    <Loader onDark centered large />
  </div>
));
