import { lazy, useRouteMatch } from 'react';

//sets the pages display settings

const ComingSoonPageConfig = {

  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    
    {
      exact: true,
      path: "/coming-soon",
      component: lazy(() => import('./ComingSoonPage')),
    },
  ],
};

export default ComingSoonPageConfig;
