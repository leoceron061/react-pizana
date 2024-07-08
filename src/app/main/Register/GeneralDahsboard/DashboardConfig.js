import { lazy, useRouteMatch } from 'react';

//sets the pages display settings

const DashboardConfig = {

  settings: {
    layout: {
        style : 'layout1',
        config: {
          
            navbar : {
                display : false,
                
            },
            toolbar: {
                display : false,
            },
            footer : {
                display : false,
                
            },
            mode   : 'fullwidth'
        }
    },
    
},
  routes: [
    
    {
      exact: true,
      path: "/Dashboard",
      component: lazy(() => import('./Dashboard')),
    },
  ],
};

export default DashboardConfig;
