import { lazy, useRouteMatch } from 'react';

//sets the pages display settings

const EmployeeLoginOTPConfig = {

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
      path: "/employee-otp",
      component: lazy(() => import('./EmployeeLoginOTP')),
    },
  ],
};

export default EmployeeLoginOTPConfig;
