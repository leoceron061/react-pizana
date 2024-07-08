import { lazy } from 'react';




//sets the pages display settings

const EmployeeRegisterConfig = {
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
      path: '/employee-register/:code',
      component: lazy(() => import('./EmployeeRegister')),
    },
  ],
};

export default EmployeeRegisterConfig
