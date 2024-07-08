import { lazy } from 'react';

//sets the pages display settings

const ResetErrorConfig = {
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
      path: '/reset-error',
      component: lazy(() => import('./ResetError')),
    },
  ],
};

export default ResetErrorConfig;
