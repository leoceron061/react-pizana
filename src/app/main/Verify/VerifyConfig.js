import { lazy } from 'react';


//sets the pages display settings

const VerifyConfig = {
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
      path: '/verify',
      component: lazy(() => import('./Verify')),
    },
    
  ],
};

export default VerifyConfig;
