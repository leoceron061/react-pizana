import { lazy } from 'react';




//sets the pages display settings

const RegisterPageConfig = {
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
      path: '/register',
      component: lazy(() => import('./RegisterPage')),
    },
  ],
};

export default RegisterPageConfig
