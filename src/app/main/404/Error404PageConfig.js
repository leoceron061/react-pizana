import { lazy } from 'react';

const Error404PageConfig = {
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
      path: '/404',
      component: lazy(() => import('./Error404Page')),
    },
  ],
};

export default Error404PageConfig;
