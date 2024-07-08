import { lazy } from 'react';




//sets the pages display settings

const EmployeeLoginConfig = {
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
      path: '/employee-login',
      component: lazy(() => import('./EmployeeLogin')),
    },
  ],
};

export default EmployeeLoginConfig
