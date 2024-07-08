import { lazy } from 'react';

//sets the pages display settings

const ResetPasswordPageConfig = {
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
      path: '/reset-password/:id',//add parameter
      component: lazy(() => import('./ResetPasswordPage')),
    },
  ],
};

export default ResetPasswordPageConfig;
