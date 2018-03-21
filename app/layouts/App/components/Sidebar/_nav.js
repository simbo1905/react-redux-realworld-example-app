// import {defineMessages, formatMessage} from 'react-intl';
//
// const messages = defineMessages({
//     dashboard: {
//         id: 'app.pages.dashboard.title',
//         defaultMessage: 'Dashboard',
//     },
// });
// console.log(formatMessage);
// console.log(formatMessage(messages.dashboard, {}));

export default {
  items: [
    {
      name: 'app.pages.dashboard.title',
      url: '/dashboard',
      icon: 'icon-speedometer'
    },{
      title: true,
      name: 'app.sidebar.dividers.items',
      icon: 'icon-key',
      },
    {
      name: 'app.pages.passwords.title',
      icon: 'icon-lock',
      url: '/passwords',
      },
    {
      name: 'app.pages.users.title',
      icon: 'icon-user-follow',
      url: '/users',
      },
    {
      name: 'app.pages.groups.title',
      icon: 'icon-people',
      url: '/groups',
      },
    {
      name: 'app.pages.reports.title',
      icon: 'icon-doc',
      url: '/reports',
      },
    {
      name: 'app.pages.tools.title',
      icon: 'icon-briefcase',
      url: '/tools',
      },
    {
      title: true,
      name: 'app.sidebar.dividers.settings',
      icon: 'icon-key',
      },
    {
      name: 'app.pages.profile.title',
      icon: 'icon-user',
      url: '/profile',
      },
    {
      name: 'app.pages.company.title',
      icon: 'icon-cup',
      url: '/company',
      },
    {
      name: 'app.pages.billing.title',
      icon: 'icon-wallet',
      url: '/billing',
    },
    {
      name: 'app.auth.logout',
      icon: 'icon-logout',
      url: '/#'
      }
  ]
};
