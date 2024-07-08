import { lazy, useRouteMatch } from 'react';

//sets the pages display settings

const OTPConfig = {

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
      
      path: "/confirm-otp/:id/:code",
      component: lazy(() => import('./OTP')),
    },
  ],
};

export default OTPConfig;
