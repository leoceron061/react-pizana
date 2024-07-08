import { lazy } from 'react';

const CalendarAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/calendar',
      component: lazy(() => import('./CalendarApp')),
    },
  ],
};

export default CalendarAppConfig;
