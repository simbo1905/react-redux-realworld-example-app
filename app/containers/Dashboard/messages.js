/*
 * Dashboard Messages
 *
 * This contains all the text for the PageHome component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'app.pages.dashboard.title',
    defaultMessage: 'Dashboard',
  },
  settings: {
    id: 'app.sidebar.dividers.settings',
    defaultMessage: 'Settings',
  },
  items: {
    id: 'app.sidebar.dividers.items',
    defaultMessage: 'Items',
  },
  header: {
    id: 'app.containers.dashboard.header',
    defaultMessage: 'Dashboard',
  },
  welcome: {
    id: 'app.containers.dashboard.welcome',
    defaultMessage: 'Welcome back, {name}!',
  },
  threeSteps: {
    id: 'app.containers.dashboard.three_steps',
    defaultMessage: 'Get off to a great start with these 3 simple steps',
  },
  firstStep: {
    id: 'app.containers.dashboard.first_step',
    defaultMessage: '1 - Download the UniqKey app on you smart device.',
  },
  secondStep: {
    id: 'app.containers.dashboard.second_step',
    defaultMessage: '2 - Add the first team member. Or invite them to join by e-mail',
  },
  thirdStep: {
    id: 'app.containers.dashboard.third_step',
    defaultMessage: '3 - Create a group for easier joint access',
  },
  learnMore: {
    id: 'app.containers.dashboard.learn_more',
    defaultMessage: 'Learn more',
  },
});
