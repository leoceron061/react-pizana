import { lazy } from 'react';



const SubscriptionViewConfig = {
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
      path: '/subscription/:type?/:step?',
      component: lazy(() => import('./SubscriptionView')),
    },
  ],
};

export default SubscriptionViewConfig
