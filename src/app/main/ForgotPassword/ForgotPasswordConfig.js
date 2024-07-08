import { lazy } from 'react';

//sets the pages display settings

const ForgotPasswordConfig = {
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
      path: '/frgt-password/:password_code?',
      component: lazy(() => import('./ForgotPassword')),
    },
  ],
};

export default ForgotPasswordConfig;